import assert from "../assert/assert.js";

export default class Doc {
    static getElementById(elementId: string): HTMLElement {
        const obj = document.getElementById(elementId);
        assert(obj !== null);
        return obj;
    }
}