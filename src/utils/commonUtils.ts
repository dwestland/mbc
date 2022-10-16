export function slugify(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export function getSixDigitRandom() {
  return Math.random().toString().substring(2, 8)
}

export function requireEnvVariable(key: string) {
  const value = process.env[key]
  if (value) {
    return value
  }
  throw new Error(`Environment variable ${key} was not defined!`)
}
