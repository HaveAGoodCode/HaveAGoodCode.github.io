class KeyAnimation {
    static get canContinue() {
        return KeyAnimation.continue;
    }
    static toggleContinue() {
        KeyAnimation.continue = !KeyAnimation.continue;
    }
    static setObjAnimation(string, obj, runnable) {
        KeyAnimation.toggleContinue();
        KeyAnimation.setupObjAnimationStyles(obj);
        KeyAnimation.typing(string, obj, 30, () => {
            KeyAnimation.finalizeAnimation(obj, runnable);
        });
    }
    static setupObjAnimationStyles(obj) {
        obj.style.borderRightColor = document.documentElement.style.getPropertyValue('--caret-color');
        obj.style.animation = `caret 0.8s steps(1) infinite`;
    }
    static finalizeAnimation(obj, runnable) {
        setTimeout(() => {
            obj.style.borderRightColor = 'transparent';
            KeyAnimation.toggleContinue();
            if (runnable !== undefined && runnable !== null) {
                runnable();
            }
        }, 500);
    }
    static typing(string, element, typingInterval, endRun, currentIndex = 0, isInitialCall = true) {
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
    static initializeTyping(element, string, typingInterval, endRun) {
        element.textContent = "";
        setTimeout(() => {
            KeyAnimation.typing(string, element, typingInterval, endRun, 0, false);
        }, typingInterval);
    }
    static processTyping(string, element, typingInterval, endRun, currentIndex) {
        const currentChar = string[currentIndex];
        element.textContent += currentChar;
        const delay = currentChar === " " ? 0 : typingInterval;
        setTimeout(() => {
            KeyAnimation.typing(string, element, typingInterval, endRun, currentIndex + 1, false);
        }, delay);
    }
    static setObjAnimation2(obj, callback) {
        KeyAnimation.toggleContinue();
        obj();
        KeyAnimation.finalizeObjAnimation2(callback);
    }
    static finalizeObjAnimation2(callback) {
        setTimeout(() => {
            KeyAnimation.toggleContinue();
            callback === null || callback === void 0 ? void 0 : callback();
        }, 100);
    }
}
KeyAnimation.continue = true;
export default KeyAnimation;
