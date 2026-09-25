// @vitest-environment jsdom
//
// This file needs a DOM for its first half. The suite's default is `node`
// (MAINT-9); see src/__tests__/client-locale-fallback.test.ts.
import { describe, it, expect, vi, beforeEach, afterEach, type MockInstance } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import * as React from 'react'
import Link from 'next/link'
import ts from 'typescript'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { reset as resetBaseUiErrors } from '@base-ui/utils/error'

import { Button } from '@/components/ui/button'

/**
 * A link styled as a button is a link.
 *
 * WHY. On 25 September 2026 every `<Button render={<Link href=... />}>` on the
 * site, 1,041 of them plus 23 rendering a plain <a>, went through Base UI's
 * Button, which expects to render a <button>. It put type="button" and
 * tabindex="0" on each <a> and logged "A component that acts as a button
 * expected a native <button>" in development, once per link. The warning's own
 * suggestion, nativeButton={false}, would have silenced it by adding
 * role="button" to every one of those links, so a screen reader would announce
 * navigation as an action and Space would do nothing. The shared Button now
 * renders any `render` element carrying an href as that element, styled, with
 * no button semantics (src/components/ui/button.tsx).
 *
 * The first half renders the component. The second half reads every `render=`
 * in src and fails on any that hands a button-only Base UI part an element that
 * is not a button, which is the same condition Base UI warns about, checked
 * before a page ever runs.
 */

const WARNING = 'expected a native <button>'
const REVERSE_WARNING = 'expected a non-<button>'

let errors: MockInstance<typeof console.error>
beforeEach(() => {
  // Base UI logs each distinct message once per process. Without this reset, a
  // warning raised by one test would be swallowed in every later one, and the
  // "no warning" assertions below would pass whatever the component did.
  resetBaseUiErrors()
  errors = vi.spyOn(console, 'error').mockImplementation(() => {})
})
afterEach(() => {
  cleanup()
  errors.mockRestore()
})
const baseUiWarnings = () =>
  errors.mock.calls
    .map((c) => String(c[0]))
    .filter((m) => m.includes(WARNING) || m.includes(REVERSE_WARNING))

describe('the spy sees the warning it is guarding against', () => {
  it('Base UI warns for a Button primitive rendering a link, in every test', () => {
    // The control. If this stops warning, the assertions of silence below mean
    // nothing, so it runs twice across a reset to prove the reset reaches the
    // same logger Base UI uses.
    render(<ButtonPrimitive render={<a href="/x" />}>Old path</ButtonPrimitive>)
    expect(baseUiWarnings()).toHaveLength(1)
    cleanup()
    resetBaseUiErrors()
    render(<ButtonPrimitive render={<a href="/y" />}>Old path again</ButtonPrimitive>)
    expect(baseUiWarnings()).toHaveLength(2)
  })
})

describe('Button given a link renders a link', () => {
  it('a Next <Link> is announced as a link, with none of the button attributes', () => {
    render(
      <Button variant="outline" size="sm" render={<Link href="/revision/texts/macbeth" />}>
        Back to Macbeth
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'Back to Macbeth' })
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', '/revision/texts/macbeth')
    expect(link).not.toHaveAttribute('role')
    expect(link).not.toHaveAttribute('type')
    expect(link).not.toHaveAttribute('tabindex')
    expect(screen.queryByRole('button')).toBeNull()
    expect(baseUiWarnings()).toEqual([])
  })

  it('keeps the button look: the variant classes and data-slot', () => {
    render(
      <Button variant="outline" className="extra" render={<a href="/press" />}>
        Press
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'Press' })
    expect(link).toHaveAttribute('data-slot', 'button')
    expect(link.className).toContain('inline-flex')
    expect(link.className).toContain('border-border')
    expect(link.className).toContain('extra')
  })

  it("keeps the rendered element's own attributes: target, rel, download, aria-label", () => {
    render(
      <Button
        render={
          <a
            href="https://example.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reviews"
          />
        }
      >
        Read reviews
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'Reviews' })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('drops type="submit" and type="button", which mean nothing on a link', () => {
    render(
      <form>
        <Button type="submit" render={<Link href="/marking" />}>
          Cancel
        </Button>
      </form>,
    )
    expect(screen.getByRole('link', { name: 'Cancel' })).not.toHaveAttribute('type')
  })

  it('forwards its ref to the <a>', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(
      <Button ref={ref} render={<Link href="/x" />}>
        Go
      </Button>,
    )
    expect((ref.current as unknown as HTMLElement).tagName).toBe('A')
  })

  it('passes clicks through, and resolves a style function', () => {
    const onClick = vi.fn()
    render(
      <Button
        onClick={onClick}
        style={(state) => ({ opacity: state.disabled ? 0.5 : 1 })}
        render={<a href="#here" />}
      >
        Jump
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'Jump' })
    fireEvent.click(link)
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(link.style.opacity).toBe('1')
  })

  it('a disabled link is an unavailable link: no href, out of the tab order, and it cannot fire', () => {
    const onClick = vi.fn()
    render(
      <Button disabled onClick={onClick} render={<Link href="/locked" aria-label="Locked unit" />}>
        Unit 4
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'Locked unit' })
    expect(link.tagName).toBe('A')
    expect(link).not.toHaveAttribute('href')
    expect(link).toHaveAttribute('aria-disabled', 'true')
    expect(link).not.toHaveAttribute('tabindex')
    fireEvent.click(link)
    expect(onClick).not.toHaveBeenCalled()
    expect(baseUiWarnings()).toEqual([])
  })
})

describe('a disabled link keeps everything but the navigation', () => {
  // Both found in review of the first version, which drew a bare <a> from
  // Button's props alone when disabled.
  it('keeps link text written inside the render element, as src/app/press/page.tsx does', () => {
    render(
      <Button
        disabled
        render={
          <a href="https://example.org" target="_blank" rel="noopener noreferrer">
            Trustpilot
          </a>
        }
      />,
    )
    const link = screen.getByRole('link', { name: 'Trustpilot' })
    expect(link).not.toHaveAttribute('href')
    expect(link).not.toHaveAttribute('target')
    expect(link).not.toHaveAttribute('rel')
  })

  it('names itself the same way enabled and disabled', () => {
    const { unmount } = render(
      <Button aria-label="Outer" render={<Link href="/x" aria-label="Inner" />}>
        x
      </Button>,
    )
    expect(screen.getByRole('link', { name: 'Inner' })).toBeTruthy()
    unmount()
    render(
      <>
        <span id="lbl">Unit 4, locked</span>
        <Button disabled aria-label="Outer" render={<Link href="/x" aria-label="Inner" />}>
          x
        </Button>
        <Button disabled render={<Link href="/y" aria-labelledby="lbl" />}>
          <svg aria-hidden="true" />
        </Button>
      </>,
    )
    expect(screen.getByRole('link', { name: 'Inner' })).toHaveAttribute('aria-disabled', 'true')
    expect(screen.getByRole('link', { name: 'Unit 4, locked' })).toBeTruthy()
  })

  it("does not run the render element's own click handler", () => {
    const own = vi.fn()
    render(
      <Button disabled render={<a href="/x" onClick={own} />}>
        Locked
      </Button>,
    )
    fireEvent.click(screen.getByRole('link', { name: 'Locked' }))
    expect(own).not.toHaveBeenCalled()
  })

  it('blocks the five handlers a disabled Base UI button blocks, from Button and from the element', () => {
    const fired: string[] = []
    const h = (name: string) => () => fired.push(name)
    render(
      <Button
        disabled
        focusableWhenDisabled
        onClick={h('click')}
        onKeyDown={h('keydown')}
        onKeyUp={h('keyup')}
        onMouseDown={h('mousedown')}
        onPointerDown={h('pointerdown')}
        render={<a href="/x" onKeyDown={h('own-keydown')} onMouseDown={h('own-mousedown')} />}
      >
        Locked
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'Locked' })
    fireEvent.keyDown(link, { key: 'Enter' })
    fireEvent.keyUp(link, { key: 'Enter' })
    fireEvent.pointerDown(link)
    fireEvent.mouseDown(link)
    fireEvent.click(link)
    expect(fired).toEqual([])
  })

  it('honours an explicit tabIndex, from Button or from the element, as a <button> does', () => {
    render(
      <>
        <Button disabled focusableWhenDisabled tabIndex={-1} render={<Link href="/x" />}>
          A
        </Button>
        <Button disabled focusableWhenDisabled render={<Link href="/y" tabIndex={-1} />}>
          B
        </Button>
      </>,
    )
    expect(screen.getByRole('link', { name: 'A' })).toHaveAttribute('tabindex', '-1')
    expect(screen.getByRole('link', { name: 'B' })).toHaveAttribute('tabindex', '-1')
  })

  it("puts none of a link component's own props on the DOM <a>", () => {
    // A component with a prop of its own, as Next's app-router <Link> has
    // (unstable_dynamicOnHover and the rest): a list of props to remove misses
    // whatever it does not name, so the disabled copy keeps an allowlist.
    function AppLink({
      href,
      children,
    }: {
      href: string
      tone?: string
      children?: React.ReactNode
    }) {
      return <a href={href}>{children}</a>
    }
    render(
      <>
        <Button disabled render={<AppLink href="/x" tone="quiet" />}>
          Locked
        </Button>
        <Button disabled render={<Link href="/y" prefetch={false} replace scroll={false} />}>
          Also locked
        </Button>
      </>,
    )
    expect(screen.getByRole('link', { name: 'Locked' })).not.toHaveAttribute('tone')
    const link = screen.getByRole('link', { name: 'Also locked' })
    for (const attr of ['prefetch', 'replace', 'scroll']) expect(link).not.toHaveAttribute(attr)
    expect(
      errors.mock.calls
        .map((c) => String(c[0]))
        .filter((m) =>
          /React does not recognize|non-boolean attribute|Received `(true|false)`/.test(m),
        ),
    ).toEqual([])
  })

  it('keeps focus on a Next <Link> across the disabled toggle, both ways', () => {
    const Toggle = ({ pending }: { pending: boolean }) => (
      <Button disabled={pending} focusableWhenDisabled render={<Link href="/x" />}>
        Save
      </Button>
    )
    const { rerender } = render(<Toggle pending={false} />)
    screen.getByRole('link', { name: 'Save' }).focus()
    rerender(<Toggle pending />)
    expect(document.activeElement).toBe(screen.getByRole('link', { name: 'Save' }))
    expect(document.activeElement).toHaveAttribute('aria-disabled', 'true')
    rerender(<Toggle pending={false} />)
    expect(document.activeElement).toBe(screen.getByRole('link', { name: 'Save' }))
    expect(document.activeElement).toHaveAttribute('href', '/x')
  })

  it('focusableWhenDisabled keeps it reachable by keyboard, as it does a <button>', () => {
    render(
      <Button disabled focusableWhenDisabled render={<Link href="/x" />}>
        Why locked
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'Why locked' })
    link.focus()
    expect(document.activeElement).toBe(link)
    expect(link).toHaveAttribute('aria-disabled', 'true')
  })
})

describe('Button without a link is still a button', () => {
  it('renders a native <button type="button">', () => {
    render(<Button>Save</Button>)
    const button = screen.getByRole('button', { name: 'Save' })
    expect(button.tagName).toBe('BUTTON')
    expect(button).toHaveAttribute('type', 'button')
    expect(baseUiWarnings()).toEqual([])
  })

  it('render={<button />} stays a native button', () => {
    render(<Button render={<button type="submit" />}>Send</Button>)
    expect(screen.getByRole('button', { name: 'Send' }).tagName).toBe('BUTTON')
    expect(baseUiWarnings()).toEqual([])
  })

  it('nativeButton={false} is how a deliberate non-<button> button asks for button semantics', () => {
    const onClick = vi.fn()
    render(
      <Button nativeButton={false} onClick={onClick} render={<div />}>
        Tile
      </Button>,
    )
    const tile = screen.getByRole('button', { name: 'Tile' })
    expect(tile.tagName).toBe('DIV')
    fireEvent.keyDown(tile, { key: 'Enter' })
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(baseUiWarnings()).toEqual([])
  })

  it('nativeButton={false} wins over an href: the caller asked for a button', () => {
    render(
      <Button nativeButton={false} render={<a href="/x" />}>
        Act
      </Button>,
    )
    expect(screen.getByRole('button', { name: 'Act' })).toBeTruthy()
  })
})

// ── Every render= in src ────────────────────────────────────────────────────
//
// Rebuilt after review on 25 September 2026 found the first scanner blind to a
// render handed over in a spread, to wrappers of Button living outside
// src/components/ui (InputGroupButton), to Base UI parts that are aliases of
// another part (Drawer.Trigger is Dialog.Trigger), and able to pass with its
// Base UI half checking nothing.

const BASE_UI = 'node_modules/@base-ui/react'

const slash = (p: string) => p.split('\\').join('/')

/**
 * What a Base UI part defaults `nativeButton` to, read from the installed
 * source rather than remembered: true, false, or null for a part that is not a
 * button at all (Tooltip.Trigger, Select.Icon). A part that is only an alias of
 * another (Drawer.Trigger re-exports Dialog.Trigger) is followed to the part it
 * names. A part whose source cannot be found throws, so an upgrade that moves
 * files fails here instead of passing with nothing checked.
 */
const defaults = new Map<string, boolean | null>()
function nativeDefault(mod: string, part: string): boolean | null {
  const key = `${mod}.${part}`
  if (defaults.has(key)) return defaults.get(key)!
  const value = nativeDefaultOfFile(partFile(mod, part), 0)
  defaults.set(key, value)
  return value
}

/**
 * The file a part lives in, read from the module's own index the way Base UI
 * exports it: `Object.defineProperty(exports, "Separator", { get: () =>
 * _Separator.Separator })` with `var _Separator = require("../separator/Separator")`.
 * That is exact where guessing a path from the part's name is not: Menu.Separator
 * lives in another module.
 */
function partFile(mod: string, part: string): string {
  for (const index of ['index.parts.js', 'index.js']) {
    const f = join(BASE_UI, mod, index)
    if (!existsSync(f)) continue
    const src = readFileSync(f, 'utf8')
    const getter = new RegExp(
      `defineProperty\\(exports, "${part}", \\{[^}]*?return (_\\w+)\\.\\w+;`,
    ).exec(src)
    if (!getter) continue
    const req = new RegExp(`var ${getter[1]} = require\\("([^"]+)"\\)`).exec(src)
    if (req) return join(dirname(f), `${req[1]}.js`)
  }
  throw new Error(`cannot find the Base UI source for ${mod}.${part} in its index`)
}
function nativeDefaultOfFile(file: string, depth: number): boolean | null {
  const src = readFileSync(file, 'utf8')
  if (/nativeButton/.test(src)) return /nativeButton = false/.test(src) ? false : true
  // An alias file: `var _DialogTrigger = require("../../dialog/trigger/DialogTrigger");
  // const DrawerTrigger = exports.DrawerTrigger = _DialogTrigger.DialogTrigger;`
  const alias = /exports\.\w+ = (_\w+)\.\w+;/.exec(src)
  if (alias && depth < 4) {
    const req = new RegExp(`var ${alias[1]} = require\\("(\\.[^"]+)"\\)`).exec(src)
    if (req) {
      const target = join(dirname(file), `${req[1]}.js`)
      if (!existsSync(target)) throw new Error(`${file} aliases ${target}, which does not exist`)
      return nativeDefaultOfFile(target, depth + 1)
    }
  }
  return null
}

type Resolved =
  | { kind: 'our-button' }
  | { kind: 'base-ui'; module: string; part: string }
  | { kind: 'other' }

type Source = { file: string; text: string }

function tsxFiles(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) tsxFiles(p, out)
    else if (/\.tsx$/.test(e.name)) out.push(slash(p))
  }
  return out
}

function importsOf(sf: ts.SourceFile) {
  const map = new Map<string, { spec: string; name: string }>()
  for (const st of sf.statements) {
    if (!ts.isImportDeclaration(st) || !st.importClause) continue
    const spec = (st.moduleSpecifier as ts.StringLiteral).text
    const ic = st.importClause
    if (ic.name) map.set(ic.name.text, { spec, name: 'default' })
    const nb = ic.namedBindings
    if (nb && ts.isNamedImports(nb))
      for (const el of nb.elements)
        map.set(el.name.text, { spec, name: (el.propertyName ?? el.name).text })
    if (nb && ts.isNamespaceImport(nb)) map.set(nb.name.text, { spec, name: '*' })
  }
  return map
}

/** The .tsx a module specifier names, for '@/…' and relative imports. */
const known = new Set<string>()
function fileOf(fromFile: string, spec: string): string | null {
  const base = spec.startsWith('@/')
    ? `src/${spec.slice(2)}`
    : spec.startsWith('.')
      ? slash(join(dirname(fromFile), spec))
      : null
  if (!base) return null
  for (const c of [`${base}.tsx`, `${base}/index.tsx`]) if (known.has(c)) return c
  return null
}

const OUR_BUTTON = 'src/components/ui/button.tsx#Button'

type Parsed = {
  file: string
  sf: ts.SourceFile
  imports: Map<string, { spec: string; name: string }>
}
function parse(sources: Source[]): Parsed[] {
  for (const s of sources) known.add(s.file)
  return sources
    .filter((s) => s.text.includes('render') || s.text.includes('{...'))
    .map((s) => {
      const sf = ts.createSourceFile(
        s.file,
        s.text,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TSX,
      )
      return { file: s.file, sf, imports: importsOf(sf) }
    })
}

/** A tag, resolved through this file's imports and the wrapper map. */
function resolver(p: Parsed, wrappers: Map<string, Resolved>) {
  return (tag: string): Resolved => {
    const [root, ...rest] = tag.split('.')
    const b = p.imports.get(root)
    if (!b) return wrappers.get(`${p.file}#${root}`) ?? { kind: 'other' }
    if (b.spec.startsWith('@base-ui/react/'))
      return {
        kind: 'base-ui',
        module: b.spec.slice('@base-ui/react/'.length),
        part: rest.length ? rest.join('.') : b.name,
      }
    const f = fileOf(p.file, b.spec)
    const name = b.name === '*' ? rest[0] : b.name
    return (f && wrappers.get(`${f}#${name}`)) || { kind: 'other' }
  }
}

const buttonish = (r: Resolved) =>
  r.kind === 'our-button' || (r.kind === 'base-ui' && nativeDefault(r.module, r.part) !== null)

/** The component each top-level declaration defines, and its body. */
function components(sf: ts.SourceFile): { name: string; node: ts.Node; exportsDefault: boolean }[] {
  const out: { name: string; node: ts.Node; exportsDefault: boolean }[] = []
  const isDefault = (mods?: ts.NodeArray<ts.ModifierLike>) =>
    Boolean(mods?.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword))
  for (const st of sf.statements) {
    if (ts.isFunctionDeclaration(st) && st.name)
      out.push({ name: st.name.text, node: st, exportsDefault: isDefault(st.modifiers) })
    if (ts.isVariableStatement(st))
      for (const d of st.declarationList.declarations)
        if (ts.isIdentifier(d.name) && d.initializer)
          out.push({ name: d.name.text, node: d.initializer, exportsDefault: false })
  }
  return out
}

/**
 * Every component in src that hands its props on to a button-like target: it
 * renders that target with a spread (`<Button {...props} />`), so a `render`
 * given to the component reaches the target. Found by fixed point, so a
 * wrapper of a wrapper resolves too. The shared Button is seeded and frozen:
 * it spreads onto Base UI's Button, but a link given to it is rendered as a
 * link, which is the rule this file tests. A component that takes `render` out
 * of its props before spreading them does not forward it and is not a wrapper.
 */
/** The function a component declaration holds, through forwardRef and memo. */
function componentFn(node: ts.Node): ts.SignatureDeclaration | null {
  if (ts.isFunctionDeclaration(node) || ts.isArrowFunction(node) || ts.isFunctionExpression(node))
    return node
  if (ts.isCallExpression(node) && node.arguments[0]) return componentFn(node.arguments[0])
  return null
}

/**
 * The names under which a component holds the props it was given: its first
 * parameter, or the rest binding when it destructures that parameter. Null
 * when it takes `render` out by name, because then it does not forward it.
 */
function forwardedNames(fn: ts.SignatureDeclaration): Set<string> | null {
  const first = fn.parameters[0]
  if (!first) return new Set()
  if (ts.isIdentifier(first.name)) return new Set([first.name.text])
  if (ts.isObjectBindingPattern(first.name)) {
    const names = new Set<string>()
    for (const el of first.name.elements) {
      const prop = (el.propertyName ?? el.name).getText()
      if (!el.dotDotDotToken && prop === 'render') return null
      if (el.dotDotDotToken && ts.isIdentifier(el.name)) names.add(el.name.text)
    }
    return names
  }
  return new Set()
}

/** The spreads through which a wrapper forwards its caller's props. */
const FORWARDING = new WeakSet<ts.Node>()

/**
 * Every component in src that hands its own props on to a button-like target
 * (`function X(props) { return <Button {...props} /> }`, or the rest of a
 * destructured parameter), so a `render` given to it reaches the target. Found
 * by fixed point, so a wrapper of a wrapper resolves too. A spread of anything
 * else (an object literal, a local) does not make a wrapper: that is a call
 * site, and it is checked as one. The shared Button is seeded and frozen: it
 * spreads onto Base UI's Button, but a link given to it is rendered as a link,
 * which is the rule this file tests.
 */
function inferWrappers(parsed: Parsed[]): Map<string, Resolved> {
  const wrappers = new Map<string, Resolved>([[OUR_BUTTON, { kind: 'our-button' }]])
  for (let pass = 0; pass < 6; pass++) {
    let changed = false
    for (const p of parsed) {
      const resolve = resolver(p, wrappers)
      for (const c of components(p.sf)) {
        const key = `${p.file}#${c.name}`
        // The shared Button is visited once, so its own forwarding spread onto
        // Base UI's Button is registered, but its mapping never changes.
        const seed = key === OUR_BUTTON
        if (seed ? pass > 0 : wrappers.has(key)) continue
        const fn = componentFn(c.node)
        const names = fn ? forwardedNames(fn) : null
        if (!fn || !names || names.size === 0) continue
        let target: Resolved | null = null
        const visit = (n: ts.Node) => {
          if (ts.isJsxOpeningElement(n) || ts.isJsxSelfClosingElement(n)) {
            for (const s of n.attributes.properties.filter(ts.isJsxSpreadAttribute)) {
              if (!ts.isIdentifier(s.expression) || !names.has(s.expression.text)) continue
              const r = resolve(n.tagName.getText(p.sf))
              if (buttonish(r)) {
                target ??= r
                FORWARDING.add(s)
              }
            }
          }
          ts.forEachChild(n, visit)
        }
        visit(fn)
        if (target && !seed) {
          wrappers.set(key, target)
          if (c.exportsDefault) wrappers.set(`${p.file}#default`, target)
          changed = true
        }
      }
    }
    if (!changed) break
  }
  return wrappers
}

const hasAttr = (open: ts.JsxOpeningLikeElement, sf: ts.SourceFile, name: string) =>
  open.attributes.properties.find((p) => ts.isJsxAttribute(p) && p.name.getText(sf) === name) as
    | ts.JsxAttribute
    | undefined
const boolAttr = (
  a: ts.JsxAttribute | undefined,
  sf: ts.SourceFile,
): boolean | 'dynamic' | undefined => {
  if (!a) return undefined
  if (!a.initializer) return true
  const t = a.initializer.getText(sf).replace(/[{}\s]/g, '')
  return t === 'true' ? true : t === 'false' ? false : 'dynamic'
}

type Result = { checked: { ourButton: number; baseUi: number }; found: string[] }

/** Every call site that would make Base UI warn, as "file:line why". */
function violations(parsed: Parsed[], wrappers: Map<string, Resolved>): Result {
  const found: string[] = []
  const checked = { ourButton: 0, baseUi: 0 }
  for (const p of parsed) {
    const { sf, file } = p
    const resolve = resolver(p, wrappers)
    const at = (n: ts.Node) =>
      `${file}:${sf.getLineAndCharacterOfPosition(n.getStart(sf)).line + 1}`

    // The JSX a render expression can produce: the element itself, both arms
    // of a conditional, or every return of a same-file helper it calls. Null
    // when it cannot be read statically.
    const producible = (e: ts.Expression): ts.JsxOpeningLikeElement[] | null => {
      while (ts.isParenthesizedExpression(e)) e = e.expression
      if (ts.isJsxSelfClosingElement(e)) return [e]
      if (ts.isJsxElement(e)) return [e.openingElement]
      if (ts.isConditionalExpression(e)) {
        const a = producible(e.whenTrue)
        const b = producible(e.whenFalse)
        return a && b ? [...a, ...b] : null
      }
      if (ts.isCallExpression(e) && ts.isIdentifier(e.expression)) {
        const name = e.expression.text
        const fn = sf.statements.find(
          (s): s is ts.FunctionDeclaration => ts.isFunctionDeclaration(s) && s.name?.text === name,
        )
        if (!fn?.body) return null
        const out: ts.JsxOpeningLikeElement[] = []
        let readable = true
        const visit = (n: ts.Node) => {
          if (ts.isFunctionLike(n) && n !== fn) return
          if (ts.isReturnStatement(n) && n.expression) {
            const r = producible(n.expression)
            if (r) out.push(...r)
            else readable = false
          }
          ts.forEachChild(n, visit)
        }
        visit(fn.body)
        return readable && out.length ? out : null
      }
      return null
    }

    // The render expressions a spread carries: `render` in an object literal,
    // in either arm of a conditional, or none from an empty object. Undefined
    // when the spread cannot be read (an identifier, a call).
    const spreadRenders = (e: ts.Expression): ts.Expression[] | undefined => {
      while (ts.isParenthesizedExpression(e)) e = e.expression
      if (ts.isObjectLiteralExpression(e)) {
        const out: ts.Expression[] = []
        for (const prop of e.properties) {
          if (ts.isPropertyAssignment(prop) && prop.name.getText(sf) === 'render')
            out.push(prop.initializer)
          else if (ts.isShorthandPropertyAssignment(prop) && prop.name.text === 'render')
            out.push(prop.name)
          else if (ts.isSpreadAssignment(prop)) {
            const inner = spreadRenders(prop.expression)
            if (!inner) return undefined
            out.push(...inner)
          }
        }
        return out
      }
      if (ts.isConditionalExpression(e)) {
        const a = spreadRenders(e.whenTrue)
        const b = spreadRenders(e.whenFalse)
        return a && b ? [...a, ...b] : undefined
      }
      return undefined
    }

    const isButtonElement = (el: ts.JsxOpeningLikeElement): boolean => {
      const tag = el.tagName.getText(sf)
      if (tag === 'button') return true
      // Our Button used as the render element is a <button> unless it is
      // itself handed a link.
      const r = resolve(tag)
      return r.kind === 'our-button' && !hasAttr(el, sf, 'render')
    }

    const check = (
      node: ts.JsxOpeningLikeElement,
      target: Resolved,
      expr: ts.Expression | undefined,
    ) => {
      const els = expr ? producible(expr) : null
      const native = boolAttr(hasAttr(node, sf, 'nativeButton'), sf)
      const tag = node.tagName.getText(sf)
      if (target.kind === 'our-button') {
        checked.ourButton++
        if (!els) found.push(`${at(node)} <${tag} render=...> cannot be read statically`)
        else
          for (const el of els) {
            const link = Boolean(hasAttr(el, sf, 'href'))
            const button = el.tagName.getText(sf) === 'button'
            if (native === false && button)
              found.push(`${at(node)} <${tag} nativeButton={false}> renders a <button>`)
            if (native !== false && !link && !button)
              found.push(
                `${at(node)} <${tag}> renders <${el.tagName.getText(sf)}>, which is neither a link (no href) nor a <button>; give it an href, or nativeButton={false} if it must act as a button`,
              )
          }
      } else if (target.kind === 'base-ui') {
        const def = nativeDefault(target.module, target.part)
        if (def === null) return
        checked.baseUi++
        const expectsButton = native === undefined ? def : native
        if (expectsButton === 'dynamic') return // a computed nativeButton is the caller's to keep right
        if (!els) {
          found.push(`${at(node)} <${tag} render=...> cannot be read statically`)
          return
        }
        for (const el of els) {
          const button = isButtonElement(el)
          if (expectsButton && !button)
            found.push(
              `${at(node)} <${tag}> (Base UI ${target.module}.${target.part}) renders <${el.tagName.getText(sf)}>, not a <button>`,
            )
          if (!expectsButton && el.tagName.getText(sf) === 'button')
            found.push(
              `${at(node)} <${tag}> (Base UI ${target.module}.${target.part}, nativeButton false) renders a <button>`,
            )
        }
      }
    }

    const visit = (node: ts.Node) => {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        const target = resolve(node.tagName.getText(sf))
        if (target.kind !== 'other' && buttonish(target)) {
          const renderAttr = hasAttr(node, sf, 'render')
          if (renderAttr) {
            const init = renderAttr.initializer
            check(node, target, init && ts.isJsxExpression(init) ? init.expression : undefined)
          }
          // A wrapper's own spread forwards its caller's props, and its callers
          // are checked instead.
          for (const s of node.attributes.properties.filter(ts.isJsxSpreadAttribute)) {
            if (FORWARDING.has(s)) continue
            const renders = spreadRenders(s.expression)
            if (renders === undefined)
              found.push(
                `${at(node)} <${node.tagName.getText(sf)} {...${s.expression.getText(sf).slice(0, 40)}}> spreads props that may carry a render; pass render as an attribute`,
              )
            else for (const r of renders) check(node, target, r)
          }
        }
      }
      ts.forEachChild(node, visit)
    }
    visit(sf)
  }
  return { checked, found }
}

const srcSources = () =>
  tsxFiles('src')
    // Tests are excluded: this file renders the old, warning path on purpose.
    .filter((file) => !file.startsWith('src/__tests__/'))
    .map((file) => ({ file, text: readFileSync(file, 'utf8') }))

describe('no render= in src makes Base UI warn', () => {
  const parsed = parse(srcSources())
  const wrappers = inferWrappers(parsed)

  it('reads the Base UI defaults it relies on from the installed package', () => {
    // Pinned so a silent change in resolution, or in Base UI, is loud.
    expect(nativeDefault('button', 'Button')).toBe(true)
    expect(nativeDefault('dialog', 'Trigger')).toBe(true)
    expect(nativeDefault('dialog', 'Close')).toBe(true)
    expect(nativeDefault('menu', 'Trigger')).toBe(true)
    expect(nativeDefault('tabs', 'Tab')).toBe(true)
    expect(nativeDefault('menu', 'Item')).toBe(false)
    expect(nativeDefault('tooltip', 'Trigger')).toBe(null)
    // Aliases, followed to the part they name.
    expect(nativeDefault('drawer', 'Trigger')).toBe(true)
    expect(nativeDefault('alert-dialog', 'Trigger')).toBe(true)
  })

  it('knows the wrappers, inside src/components/ui and out of it', () => {
    expect(wrappers.get('src/components/ui/dialog.tsx#DialogTrigger')).toEqual({
      kind: 'base-ui',
      module: 'dialog',
      part: 'Trigger',
    })
    expect(wrappers.get('src/components/ui/dropdown-menu.tsx#DropdownMenuItem')).toEqual({
      kind: 'base-ui',
      module: 'menu',
      part: 'Item',
    })
    // A wrapper of the shared Button, which the first scanner missed.
    expect(wrappers.get('src/components/ui/input-group.tsx#InputGroupButton')).toEqual({
      kind: 'our-button',
    })
    expect(wrappers.get(OUR_BUTTON)).toEqual({ kind: 'our-button' })
  })

  it('every call site renders what its component expects', () => {
    const { checked, found } = violations(parsed, wrappers)
    // Floors for each half, so a scanner that stopped finding call sites cannot
    // pass by checking none: on 25 September 2026 there were 1,064 Button
    // links and 20 render= on Base UI button parts.
    expect(checked.ourButton).toBeGreaterThan(1000)
    expect(checked.baseUi).toBeGreaterThanOrEqual(15)
    expect(found).toEqual([])
  })

  it('and it does catch each way of getting it wrong', () => {
    const ui = srcSources().filter((s) => s.file.startsWith('src/components/ui/'))
    const count = (body: string, extra = '') => {
      const fixture = {
        file: 'src/fixture.tsx',
        text: `import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { InputGroupButton } from '@/components/ui/input-group'
import { Dialog } from '@base-ui/react/dialog'
import { Drawer } from '@base-ui/react/drawer'
${extra}
export function F() { return ${body} }`,
      }
      const p = parse([...ui, fixture])
      const w = inferWrappers(p)
      return violations(
        p.filter((x) => x.file === fixture.file),
        w,
      ).found.length
    }
    // Wrong: the shapes Base UI warns about.
    expect(count(`<Button render={<span />}>x</Button>`)).toBe(1)
    expect(count(`<Button nativeButton={false} render={<button />}>x</Button>`)).toBe(1)
    expect(count(`<DialogTrigger render={<span />} />`)).toBe(1)
    expect(count(`<DialogTrigger render={<Link href="/x" />} />`)).toBe(1)
    expect(count(`<Dialog.Close render={<div />} />`)).toBe(1)
    expect(count(`<Drawer.Trigger render={<span />} />`)).toBe(1)
    expect(count(`<DialogTrigger render={flag ? <span /> : <button />} />`)).toBe(1)
    expect(count(`<DialogTrigger render={<Button render={<Link href="/x" />} />} />`)).toBe(1)
    expect(count(`<DropdownMenuItem render={<button />} />`)).toBe(1)
    // ...handed over in a spread,
    expect(count(`<Button {...{ render: <span /> }}>x</Button>`)).toBe(1)
    expect(count(`<Button {...(flag ? { render: <span /> } : {})}>x</Button>`)).toBe(1)
    expect(count(`<Button {...someProps}>x</Button>`)).toBe(1)
    // ...or through a wrapper, in src/components/ui or anywhere else.
    expect(count(`<InputGroupButton render={<span />}>x</InputGroupButton>`)).toBe(1)
    expect(
      count(
        `<Loading render={<span />}>x</Loading>`,
        `function Loading(props: React.ComponentProps<typeof Button>) { return <Button disabled {...props} /> }`,
      ),
    ).toBe(1)
    // Right.
    expect(count(`<Button render={<Link href="/x" />}>x</Button>`)).toBe(0)
    expect(count(`<Button render={<a href="/x" />}>x</Button>`)).toBe(0)
    expect(count(`<Button nativeButton={false} render={<div />}>x</Button>`)).toBe(0)
    expect(count(`<Button {...{ render: <Link href="/x" /> }}>x</Button>`)).toBe(0)
    expect(count(`<DialogTrigger render={<Button variant="outline" />} />`)).toBe(0)
    expect(count(`<DialogTrigger render={<button type="button" />} />`)).toBe(0)
    expect(count(`<DialogTrigger nativeButton={false} render={<span />} />`)).toBe(0)
    expect(count(`<DropdownMenuItem render={<Link href="/x" />} />`)).toBe(0)
    expect(
      count(
        `<Loading render={<Link href="/x" />}>x</Loading>`,
        `function Loading(props: React.ComponentProps<typeof Button>) { return <Button disabled {...props} /> }`,
      ),
    ).toBe(0)
  })
})
