class AssertionError extends Error {
    constructor(message) {
        super(message || "Assertion failed!");
        this.name = "AssertionError";
    }
}
export default function assert(rule, message) {
    if (!rule) {
        throw new AssertionError(message);
    }
}
