class AssertionError extends Error{constructor(r){super(r||"Assertion failed!"),this.name="AssertionError"}}export default function assert(r,s){if(!r)throw new AssertionError(s)}