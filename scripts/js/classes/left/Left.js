export default class Left {
    static clear() {
        Array.from(document.querySelectorAll("#left *")).forEach(element => element.remove());
    }
}
