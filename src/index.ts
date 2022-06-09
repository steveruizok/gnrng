export type NextRandom = () => number

/**
 * Seeded random number generator. The result will always be betweeen -1 and 1.
 * Adapted from the more full-featured [seedrandom](https://github.com/davidbau/seedrandom), using [xorshift](https://en.wikipedia.org/wiki/Xorshift).
 *
 * @param seed - The seed to use for the random number.
 *
 * @example
 * const getRandom1 = rng("abc")
 * const a = getRandom1() // Random number between -1 and 1
 * const b = getRandom1() // Random number between -1 and 1
 *
 * const getRandom2 = rng("abc") // same seed
 * getRandom2() === a // true
 * getRandom2() === b // true
 *
 * const getRandom3 = rng("xyz") // different seed
 * getRandom3() === a // false
 * getRandom3() === b // false
 *
 */
export function rng(seed: string): NextRandom {
  let x = 0
  let y = 0
  let z = 0
  let w = 0

  function next() {
    const t = x ^ (x << 11)
    x = y
    y = z
    z = w
    w ^= ((w >>> 19) ^ t ^ (t >>> 8)) >>> 0
    return w / 0x100000000
  }

  for (let k = 0; k < seed.length + 64; k++) {
    x ^= seed.charCodeAt(k) | 0
    next()
  }

  return next
}
