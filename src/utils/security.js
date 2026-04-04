const allowedProtocols = ['http:', 'https:', 'mailto:']

export function safeExternalUrl(url) {
  try {
    const parsed = new URL(url, window.location.origin)
    if (!allowedProtocols.includes(parsed.protocol)) {
      return '#'
    }
    return parsed.href
  } catch {
    return '#'
  }
}
