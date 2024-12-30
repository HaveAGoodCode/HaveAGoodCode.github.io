export default class Orientation {
    public static init(): void {
        const supportsOrientationChange = "onorientationchange" in window,
            orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
        window.addEventListener(orientationEvent, this.checkOrientation, false);

        this.checkOrientation();
    }

    public static checkOrientation(): void {
        const bo: HTMLElement | null = document.getElementById("alert_box");

        if (Math.abs(window.screen.orientation.angle) == 90) {
            if (bo !== null) {
                bo.remove();
            }
        } else {
            if (bo === null) {
                const a: HTMLElement = document.createElement("div");
                a.id = "alert_box";
                const b: HTMLElement = document.createElement("p");
                b.textContent = "請轉到橫向畫面。";
                a.appendChild(b);
                document.body.appendChild(a);
            }
        }
    }
}