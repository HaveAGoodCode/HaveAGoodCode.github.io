export default class Hello {
    private static readonly mae: [string, HTMLElement][] = [["eee", (document.getElementById("left") as HTMLElement)]];
    private static next: boolean = false;
    private static close: boolean = false;
    public static f5Show: boolean = true;

    public static init(): void {
        return;
        const mask = document.createElement("div");
        mask.id = "mask";
        mask.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        mask.style.minWidth = "100%";
        mask.style.minHeight = "100%";
        mask.style.position = "absolute";
        mask.style.top = "0";
        mask.style.left = "0";
        mask.style.zIndex = "1000";
        document.body.appendChild(mask);

        const textElement = document.createElement("span");
        textElement.style.position = "absolute";
        textElement.style.bottom = "5vh";
        textElement.style.left = "50%";
        textElement.style.transform = "translateX(-50%) translateY(-50%)";
        textElement.style.zIndex = "99999";
        textElement.style.backgroundColor = "white";
        document.body.appendChild(textElement);

        const nextButton = document.createElement("button");
        nextButton.id = "next";
        nextButton.onclick = () => this.click();
        nextButton.textContent = "Next";
        nextButton.style.zIndex = "99999";
        nextButton.style.position = "absolute";
        nextButton.style.left = "7%";
        nextButton.style.top = "1%";
        document.body.appendChild(nextButton);

        const closeButton = document.createElement("button");
        closeButton.id = "close";
        closeButton.onclick = () => this.close = true;
        closeButton.textContent = "Close";
        closeButton.style.zIndex = "99999";
        closeButton.style.position = "absolute";
        document.body.appendChild(closeButton);

        // Iterate over the steps and update the text element and element zIndex.
        this.handleSteps(textElement);
    }

    public static async handleSteps(textElement: HTMLElement): Promise<void> {
        for (const [text, element] of this.mae) {
            let currentElement: HTMLElement | null = element.parentElement;
            while (currentElement) {
                if (window.getComputedStyle(currentElement).zIndex !== "auto") {
                    currentElement.style.zIndex = "auto";
                }
                currentElement = currentElement.parentElement;
            }


            // 更新文字
            textElement.textContent = text;

            // 等待下一步
            await this.waitForNext();

            if (this.close) {
                break;
            }
        }
    }


    public static async click(): Promise<void> {
        // Set next to true and resolve the Promise to continue.
        this.next = true;
    }

    private static async waitForNext(): Promise<void> {
        // Return a promise that resolves when next is true.
        return new Promise<void>((resolve) => {
            const interval = setInterval(() => {
                if (this.next) {
                    clearInterval(interval);  // Stop checking once next is true
                    this.next = false;  // Reset the next flag for the next step
                    resolve();  // Resolve the promise to continue the process
                }
            }, 100);  // Check every 100ms
        });
    }
}
