import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(__dirname, "..", process.env.MAIN) : path.join(__dirname, "..", "src"))
const {default: ensureStart} = require(indexModule)

it("should run for string", () => {
  const result = ensureStart("cd", "ab")
  expect(result).toEqual("abcd")
})

it("should run for arrays", () => {
  const result = ensureStart(["c", "d"], ["a", "b"])
  expect(result).toEqual(["a", "b", "c", "d"])
})