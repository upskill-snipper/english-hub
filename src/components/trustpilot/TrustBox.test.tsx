/**
 * TrustBox variant rendering + env fallback.
 */

import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { TrustBox } from './TrustBox'

afterEach(cleanup)

describe('TrustBox', () => {
  beforeEach(() => {
    delete process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID
  })

  it('renders plain fallback link when NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID is empty', () => {
    render(<TrustBox variant="horizontal" />)
    const fallback = screen.getByTestId('trustbox-fallback')
    expect(fallback).toHaveAttribute('href', 'https://uk.trustpilot.com/review/theenglishhub.app')
    expect(screen.queryByTestId('trustbox-widget')).toBeNull()
  })

  it('renders widget div with correct data attrs when BU ID is present', () => {
    process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID = '69e9a869c2bb1d03a6752578'
    render(<TrustBox variant="micro-star" />)
    const widget = screen.getByTestId('trustbox-widget')
    expect(widget).toHaveClass('trustpilot-widget')
    expect(widget.getAttribute('data-businessunit-id')).toBe('69e9a869c2bb1d03a6752578')
    expect(widget.getAttribute('data-template-id')).toBe('5419b732fbfb950b10de65e5')
  })
})
