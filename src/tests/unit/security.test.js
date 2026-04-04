import { describe, expect, it } from 'vitest'
import { safeExternalUrl } from '../../utils/security'

describe('safeExternalUrl', () => {
  it('allows safe protocols', () => {
    expect(safeExternalUrl('https://example.com')).toContain('https://example.com')
    expect(safeExternalUrl('mailto:test@example.com')).toContain('mailto:test@example.com')
  })

  it('blocks dangerous protocols', () => {
    expect(safeExternalUrl('javascript:alert(1)')).toBe('#')
    expect(safeExternalUrl('data:text/html;base64,abc')).toBe('#')
  })
})
