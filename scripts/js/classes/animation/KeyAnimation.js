import DebugTool from '../debug/DebugTool.js';
class KeyAnimation {
    static get canCountinue() {
        return KeyAnimation.countinue;
    }
    static toggleCountinue() {
        KeyAnimation.countinue = !KeyAnimation.countinue;
    }
    static setObjAnimation(string, obj, runnable) {
        const width = KeyAnimation.calcWidth(string);
        KeyAnimation.toggleCountinue();
        obj.innerHTML = string;
        obj.style.width = `${width}ch`;
        obj.style.borderRightColor = 'rgb(0, 0, 0)';
        obj.style.animation = `typing ${width / 10}s steps(${string.length}), caret 0.8s steps(1) infinite`;
        setTimeout(() => {
            KeyAnimation.clearObjAnimation(obj);
            KeyAnimation.toggleCountinue();
            const div = document.createElement("div");
            div.id = "question-title";
            div.innerText = string;
            document.getElementById("left").appendChild(div);
            if (runnable) {
                runnable();
            }
        }, ((width / 10) * 1000) + 500);
    }
    static setObjAnimation2(obj, callback) {
        KeyAnimation.toggleCountinue();
        obj();
        setTimeout(() => {
            KeyAnimation.toggleCountinue();
            callback === null || callback === void 0 ? void 0 : callback();
        }, 100);
    }
    static clearObjAnimation(obj) {
        obj.style.borderRightColor = 'transparent';
        obj.style.animation = ``;
    }
    static deTypingAnimation(width, obj) {
        obj.style.animation = `deTyping ${width / 10}s steps(${obj.innerHTML.length}), caret 0.8s steps(1) infinite`;
        setTimeout(() => {
            KeyAnimation.clearObjAnimation(obj);
        }, ((width / 10) * 1000));
    }
    static calcWidth(string) {
        const chineseCharRegex = /[\u4E00-\u9FFF]/;
        const doubleWidthCharRegex = /[\u3000-\u303F\uFF00-\uFFFF]/;
        const debugArray = [];
        let width = 0;
        for (let char of string) {
            const charWidth = chineseCharRegex.test(char) || doubleWidthCharRegex.test(char) ? 2 : 1;
            width += charWidth;
            DebugTool.ifDebug(() => debugArray.push({ char, width: charWidth }));
        }
        DebugTool.ifDebug(() => console.debug("%cFunction %ccalcWidth", "color: #CCEEFF;", "color: #FFC8B4; font-weight: bold;", debugArray));
        return width;
    }
}
KeyAnimation.countinue = true;
export default KeyAnimation;
