/** @module ensure-start */

import {isEqual, take} from "lodash"

/**
 * Ensures that a string or an array starts with specified value
 * @example
 * import ensureStart from "ensure-start"
 * ensureStart("cd", "ab")
 * // "abcd"
 * @example
 * import ensureStart from "ensure-start"
 * ensureStart(["ab"], ["c", "d"])
 * // ["c", "d", "ab"]
 * @function
 * @param {string|array} value String or array that should start with specified value
 * @param {string|array} ensuredStart The wanted start value
 * @returns {*} Cleaned value
 */
export default (value, ensuredStart) => {
  if (typeof value === "string") {
    if (value.startsWith(ensuredStart)) {
      return value
    }
    return `${ensuredStart}${value}`
  }
  if (Array.isArray(value, ensuredStart)) {
    if (!Array.isArray(ensuredStart)) {
      ensuredStart = [ensuredStart]
    }
    if (isEqual(take(value, ensuredStart.length), ensuredStart)) {
      return value
    }
    return [...ensuredStart, ...value]
  }
  return value
}