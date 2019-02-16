import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(__dirname, "..", process.env.MAIN) : path.join(__dirname, "..", "src"))
const {default: ensureStart} = require(indexModule)

it("should run run for string", () => {
  const result = ensureStart("abcd", "cd")
  expect(result).toEqual("ab")
})

it("should run run for arrays", () => {
  const result = ensureStart(["a", "b", "c", "d"], ["c", "d"])
  expect(result).toEqual(["a", "b"])
})