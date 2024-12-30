export default class Left {
    private static left: HTMLElement = document.getElementById("left") as HTMLElement;

    public static append(element: HTMLElement): void {
        this.left.appendChild(element);
    }

    public static clear(): void {
        this.left.querySelectorAll("*").forEach(element => element.remove());
    }

    public static addEventListener(type: string, listener: EventListenerOrEventListenerObject): void {
        this.left.addEventListener(type, listener);
    }
}