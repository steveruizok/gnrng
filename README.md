# gnrng

A minimal seeded random number generator that generates numbers between `-1` and `1`. Adapted from the more full-featured [seedrandom](https://github.com/davidbau/seedrandom) (and using [xorshift](https://en.wikipedia.org/wiki/Xorshift)), though chances are this is all you need.

Pronounced "grrrngg".

## Installation

```bash
npm i gnrng
```

_or_

```bash
yarn add gnrng
```

## Usage

Call `rng` with a string as the generator's seed and receive a new function in return. Call this function to produce a random number between `-1` and `1`. Calling `rng` again with the same seed will produce the same random numbers.

```ts
import { rng } from "gnrng"

const getRandom1 = rng("abc")
const a = getRandom1() // Random number between -1 and 1
const b = getRandom1() // Random number between -1 and 1

const getRandom2 = rng("abc") // same seed
getRandom2() === a // true
getRandom2() === b // true

const getRandom3 = rng("xyz") // different seed
getRandom3() === a // false
getRandom3() === b // false
```
