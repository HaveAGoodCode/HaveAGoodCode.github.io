var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Hello {
    static init() {
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
    static handleSteps(textElement) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const [text, element] of this.mae) {
                let currentElement = element.parentElement;
                while (currentElement) {
                    if (window.getComputedStyle(currentElement).zIndex !== "auto") {
                        currentElement.style.zIndex = "auto";
                    }
                    currentElement = currentElement.parentElement;
                }
                // 更新文字
                textElement.textContent = text;
                // 等待下一步
                yield this.waitForNext();
                if (this.close) {
                    break;
                }
            }
        });
    }
    static click() {
        return __awaiter(this, void 0, void 0, function* () {
            // Set next to true and resolve the Promise to continue.
            this.next = true;
        });
    }
    static waitForNext() {
        return __awaiter(this, void 0, void 0, function* () {
            // Return a promise that resolves when next is true.
            return new Promise((resolve) => {
                const interval = setInterval(() => {
                    if (this.next) {
                        clearInterval(interval); // Stop checking once next is true
                        this.next = false; // Reset the next flag for the next step
                        resolve(); // Resolve the promise to continue the process
                    }
                }, 100); // Check every 100ms
            });
        });
    }
}
Hello.mae = [["eee", document.getElementById("left")]];
Hello.next = false;
Hello.close = false;
Hello.f5Show = true;
export default Hello;
