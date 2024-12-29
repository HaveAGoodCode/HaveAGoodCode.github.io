export default class KeyAnimation {
    private static continue: boolean = true;

    public static get canContinue(): boolean {
        return KeyAnimation.continue;
    }

    private static toggleContinue(): void {
        KeyAnimation.continue = !KeyAnimation.continue;
    }

    public static setObjAnimation(string: string, obj: HTMLElement, runnable?: (() => Promise<any>)): void {
        KeyAnimation.toggleContinue();
        KeyAnimation.setupObjAnimationStyles(obj);

        KeyAnimation.typing(string, obj, 70, () => {
            KeyAnimation.finalizeAnimation(obj, runnable);
        });
    }

    private static setupObjAnimationStyles(obj: HTMLElement): void {
        obj.style.borderRightColor = document.documentElement.style.getPropertyValue('--caret-color');
        obj.style.animation = `caret 0.8s steps(1) infinite`;
    }

    private static finalizeAnimation(obj: HTMLElement, runnable?: (() => Promise<any>) | null): void {
        setTimeout(() => {
            obj.style.borderRightColor = 'transparent';
            KeyAnimation.toggleContinue();

            if (runnable !== undefined && runnable !== null) {
                runnable();
            }
        }, 500);
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

    public static setObjAnimation2(obj: Function, callback?: (() => Promise<any>)): void {
        KeyAnimation.toggleContinue();
        
        obj();
        
        KeyAnimation.finalizeObjAnimation2(callback);
    }

    private static finalizeObjAnimation2(callback: (() => Promise<any>) | undefined): void {
        setTimeout(() => {
            KeyAnimation.toggleContinue();
            callback?.();
        }, 100);
    }
}
