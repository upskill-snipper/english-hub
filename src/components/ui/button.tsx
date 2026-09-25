'use client'

import * as React from 'react'
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { useRender } from '@base-ui/react/use-render'

import { cn } from '@/lib/utils'
import { buttonVariants, type ButtonVariantsProps } from '@/components/ui/button-variants'

type ButtonProps = ButtonPrimitive.Props & ButtonVariantsProps

/**
 * A `render` element that navigates: a Next <Link>, an <a>, or anything else
 * carrying an `href`. The href is the test because it is what makes an element
 * a link, whatever component draws it.
 */
function navigates(
  render: ButtonProps['render'],
): render is React.ReactElement<{ href?: unknown }> {
  return React.isValidElement(render) && (render.props as { href?: unknown }).href != null
}

/**
 * The site's button, and the site's link that looks like one.
 *
 * `<Button>` renders a native <button> through Base UI. `<Button render={<Link
 * href={...} />}>`, the form 1,064 call sites use, renders that link styled as
 * a button and NOTHING ELSE: no button semantics, because a link that navigates
 * must be announced as a link.
 *
 * WHAT BROKE. Until 25 September 2026 every one of those call sites went
 * through Base UI's Button, which expects to render a <button>. On an <a> it
 * added type="button" and tabindex="0", and in development logged "A component
 * that acts as a button expected a native <button>" once per link, over a
 * thousand times across the site. The fix the warning itself suggests,
 * `nativeButton={false}`, is the wrong one here: it adds role="button", so
 * every navigation link would be announced as a button, and Space, which
 * activates a button, would do nothing on it. Base UI's own documentation says
 * the Button "should not be used for links" and that a link which should look
 * like a button is the <a>, styled. So a render element with an href is now
 * rendered by `useRender`, the same element-merging Base UI's Button used,
 * without the button behaviour.
 *
 * STILL A BUTTON: no `render`, a `render={<button />}`, a render function, and
 * `nativeButton={false}`, which is how a deliberate non-<button> button (a
 * <div> that must act as one) asks for role="button" and keyboard handling.
 * src/__tests__/button-links-are-links.test.tsx pins all of this, and fails if
 * any `render=` in src hands a button-only Base UI part something else.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }))
    if (props.nativeButton !== false && navigates(props.render)) {
      return <ButtonStyledLink ref={ref} className={classes} {...props} render={props.render} />
    }
    return <ButtonPrimitive ref={ref} data-slot="button" className={classes} {...props} />
  },
)
Button.displayName = 'Button'

/**
 * The link half of Button. Button-only attributes are dropped: `type` and the
 * form attributes mean nothing on an <a> (two Cancel links passed
 * type="button" so as not to submit their forms, which a link never does).
 *
 * A DISABLED LINK is rendered as <a role="link" aria-disabled="true"> with no
 * href (see inertCopy): announced as an unavailable link, unable to navigate,
 * and out of the tab order unless focusableWhenDisabled is set. It blocks the
 * same five handlers Base UI's disabled button blocks (click, key down, key up,
 * mouse down, pointer down). Dropping `disabled` silently would leave a link
 * that looks disabled and still goes somewhere. No call site disables a link
 * today; this is the behaviour for the first one that does, and it was settled
 * by review on 25 September 2026, which found the first two versions lost the
 * link's name, fired its key and pointer handlers, overrode tabIndex={-1},
 * leaked Next <Link> props onto the DOM and dropped focus on a toggle.
 */
const ButtonStyledLink = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { className: string; render: React.ReactElement<{ href?: unknown }> }
>(function ButtonStyledLink(
  {
    render,
    className,
    disabled = false,
    type: _type,
    nativeButton: _nativeButton,
    focusableWhenDisabled = false,
    form: _form,
    formAction: _formAction,
    formEncType: _formEncType,
    formMethod: _formMethod,
    formNoValidate: _formNoValidate,
    formTarget: _formTarget,
    value: _value,
    style,
    tabIndex,
    onClick,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onPointerDown,
    ...props
  },
  ref,
) {
  const state = { disabled }
  // Base UI lets `style` be a function of state; the <button> path resolves it
  // inside Base UI, so this path must too, or a function reaches the DOM.
  const resolvedStyle = typeof style === 'function' ? style(state) : style
  const keepFocus = useFocusAcrossRemount()

  const handlers = disabled
    ? {
        onClick: (event: React.MouseEvent) => event.preventDefault(),
        // As Base UI's focusable disabled button does: Tab still moves on,
        // nothing else acts.
        onKeyDown: (event: React.KeyboardEvent) => {
          if (focusableWhenDisabled && event.key !== 'Tab') event.preventDefault()
        },
      }
    : { onClick, onKeyDown, onKeyUp, onMouseDown, onPointerDown }

  return useRender({
    render: disabled
      ? inertCopy(render, focusableWhenDisabled ? (tabIndex ?? 0) : undefined)
      : render,
    ref: [ref as React.Ref<HTMLElement>, keepFocus],
    state,
    props: {
      'data-slot': 'button',
      ...props,
      ...(disabled || tabIndex === undefined ? {} : { tabIndex }),
      style: resolvedStyle,
      className: disabled
        ? cn(className, 'opacity-50', !focusableWhenDisabled && 'pointer-events-none')
        : className,
      ...handlers,
    },
  })
})

/**
 * The disabled form of a link: an <a> that keeps only what names and
 * identifies it, from the rendered element, and nothing that acts.
 *
 * An allowlist rather than a list of what to remove, because the rendered
 * element can be a Next <Link>, whose own props (prefetch, replace, scroll,
 * unstable_dynamicOnHover, and whatever the next version adds) would otherwise
 * land on a DOM <a> as unknown attributes, and whose handlers would still run.
 * What survives: children, so a link whose text sits inside the render element
 * (the form src/app/press/page.tsx uses) keeps its name; aria-* and data-*,
 * so aria-label and aria-labelledby merge exactly as when enabled; and id,
 * title, lang, dir, className and style.
 *
 * `focusTabIndex` is set only for focusableWhenDisabled, and the element's own
 * tabIndex wins over it, as it does when enabled. A Next <Link> cannot be
 * rendered without its href, which is why this is always a plain <a>.
 */
const KEPT = new Set(['children', 'className', 'style', 'id', 'title', 'lang', 'dir'])
function inertCopy(render: React.ReactElement, focusTabIndex: number | undefined) {
  const own = render.props as Record<string, unknown>
  const kept: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(own)) {
    if (KEPT.has(key) || key.startsWith('aria-') || key.startsWith('data-')) kept[key] = value
  }
  const tabIndex =
    focusTabIndex === undefined
      ? undefined
      : ((own.tabIndex as number | undefined) ?? focusTabIndex)
  return <a {...kept} role="link" aria-disabled="true" tabIndex={tabIndex} />
}

/**
 * Keeps focus on the link when disabling or enabling it swaps the element.
 * Enabled, a Next <Link> renders its own <a>; disabled, inertCopy renders a
 * different one, so React replaces the node and focus would fall to <body>:
 * the loading-state toggle focusableWhenDisabled exists for. The ref sees the
 * old node detach while it still holds focus, and gives focus to the new one.
 */
function useFocusAcrossRemount() {
  const node = React.useRef<HTMLElement | null>(null)
  const hadFocus = React.useRef(false)
  return React.useCallback((el: HTMLElement | null) => {
    if (el) {
      node.current = el
      if (hadFocus.current) {
        hadFocus.current = false
        el.focus()
      }
      return
    }
    const was = node.current
    hadFocus.current = was !== null && was.ownerDocument.activeElement === was
    node.current = null
  }, [])
}

export { Button, buttonVariants }
