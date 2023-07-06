/**
 * Docs for `bar` module
 * @packageDocumentation
 */

/**
 * Docs for `bar` function.
 */
export function bar(): BarInt {
  console.log("Bar");
  return { bar: true };
}

export interface BarInt {
  bar: true;
}

/**
 * Docs for `bar2` function.
 */
export function bar2(): BarInt {
  console.log("Bar2");
  return { bar: true };
}
