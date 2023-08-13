export function setLocalStorageWithExpiryDate(
  key: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  ttl: number,
) {
  const now = new Date()
  const item = {
    value,
    expiry: now.getTime() + ttl,
  }
  localStorage.setItem(key, JSON.stringify(item))
}

export function getLocalStorageWithExpiryDate(key: string) {
  const itemStr = localStorage.getItem(key)
  if (!itemStr) {
    return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key)
    return null
  }
  return item.value
}
