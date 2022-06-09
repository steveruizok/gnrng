# gnrng

A minimal seeded random number generator that generates numbers between `0` and `1`. Adapted from the more full-featured [seedrandom](https://github.com/davidbau/seedrandom) (and using [xorshift](https://en.wikipedia.org/wiki/Xorshift)), though chances are this is all you need.

Pronounced "grrrngg".

## Installation

```bash
npm i gnrgn

yarn add gnrng
```

## Usage

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
