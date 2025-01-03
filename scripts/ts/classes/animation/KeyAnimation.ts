export default class KeyAnimation {
    public static continue: boolean = true;
    public static autoPlay: boolean = true;

    public static async setObjAnimation(string: string, obj: HTMLElement, runnable?: (() => Promise<any>)): Promise<void> {
        KeyAnimation.continue = false;
        KeyAnimation.setupObjAnimationStyles(obj);

        await KeyAnimation.typingAsync(string, obj, 30);
        await KeyAnimation.finalizeAnimation(obj, runnable);
    }

    private static async typingAsync(string: string, element: HTMLElement, typingInterval: number): Promise<void> {
        return new Promise((resolve) => {
            let currentIndex = 0;

            const typeNextChar = () => {
                if (currentIndex >= string.length) {
                    resolve();
                    return;
                }

                const currentChar = string[currentIndex];
                element.textContent += currentChar;
                currentIndex++;

                const delay = currentChar === " " ? 0 : typingInterval;
                setTimeout(typeNextChar, delay);
            };

            element.textContent = "";
            setTimeout(typeNextChar, typingInterval);
        });
    }

    private static setupObjAnimationStyles(obj: HTMLElement): void {
        obj.style.borderRightColor = "var('--caret-color')";
        obj.style.animation = `caret 0.8s steps(1) infinite`;
    }

    private static async finalizeAnimation(obj: HTMLElement, runnable?: (() => Promise<any>) | null): Promise<void> {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                obj.style.borderRightColor = 'transparent';
                KeyAnimation.continue = true;

                if (runnable !== undefined && runnable !== null) {
                    runnable().then(resolve);
                } else {
                    resolve();
                }
            }, 500);
        });
    }

    private static typing(string: string, element: HTMLElement, typingInterval: number, endRun: () => void, currentIndex: number = 0, isInitialCall: boolean = true): void {
        if (isInitialCall) {
            KeyAnimation.initializeTyping(element, string, typingInterval, endRun);
            return;
        }

        if (currentIndex >= string.length) {
            endRun();
            return;
        }

        KeyAnimation.processTyping(string, element, typingInterval, endRun, currentIndex);
    }

    private static initializeTyping(element: HTMLElement, string: string, typingInterval: number, endRun: () => void): void {
        element.textContent = "";
        setTimeout(() => {
            KeyAnimation.typing(string, element, typingInterval, endRun, 0, false);
        }, typingInterval);
    }

    private static processTyping(string: string, element: HTMLElement, typingInterval: number, endRun: () => void, currentIndex: number): void {
        const currentChar = string[currentIndex];
        element.textContent += currentChar;
        const delay = currentChar === " " ? 0 : typingInterval;

        setTimeout(() => {
            KeyAnimation.typing(string, element, typingInterval, endRun, currentIndex + 1, false);
        }, delay);
    }
}
