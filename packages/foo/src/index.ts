/**
 * Docs for `foo` module
 * @packageDocumentation
 */

import { bar } from "@typedoc/bar";

/**
 * Docs for `foo` function, which returns a {@link @typedoc/bar!BarInt}
 */
export function foo() {
  return bar();
}

// works
/**
 * @see {@link @typedoc/bar!bar2}
 */
export function foo2() {
  return 42;
}

// doesn't work
/**
 * @inheritDoc @typedoc/bar!bar2
 */
export function foo3() {
  return 42;
}
