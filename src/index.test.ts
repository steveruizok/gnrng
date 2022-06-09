import { rng as rng } from "./"

describe("Nodejs API Test", function () {
  it("should pass basic tests.", function () {
    const getRandom1 = rng("abc")
    const a = getRandom1() // Random number between -1 and 1
    const b = getRandom1() // Random number between -1 and 1

    const getRandom2 = rng("abc") // same seed
    getRandom2() === a // true
    getRandom2() === b // true

    const getRandom3 = rng("xyz") // different seed
    getRandom3() === a // false
    getRandom3() === b // false
  })
})
