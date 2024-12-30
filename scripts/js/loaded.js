var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import Message, { createNewTextLine, processMessage } from './classes/message/Message.js';
import MessageID from './classes/message/MessageID.js';
import KeyAnimation from './classes/animation/KeyAnimation.js';
import Question from './classes/textbook/Question.js';
import DirectoryManager from './classes/directory/Directory.js';
import { Part } from './Drama.js';
import Drama, { DramaType } from './classes/drama/Dramas.js';
import Hello from './Hello.js';
(function () {
    var _a;
    const _ = (_a = class {
            static click() {
                return __awaiter(this, void 0, void 0, function* () {
                    if (!KeyAnimation.canContinue) {
                        return;
                    }
                    yield processMessage();
                });
            }
            static getDrama() {
                return __awaiter(this, void 0, void 0, function* () {
                    // const dramaRes = await fetch("https://raw.githubusercontent.com/HaveAGoodCode/HaveAGoodCode.github.io/refs/heads/main/dramas/drama.drama");
                    // const drama = await dramaRes.text();
                    // const lines = drama.split('\n');
                    const values = Object.values(Part);
                    const allLines = [];
                    values.forEach(value => {
                        const lines = value.split("\n");
                        lines.forEach(line => allLines.push(line));
                        allLines.push("@" + DramaType.Function + ":q4");
                        allLines.push("@" + DramaType.Function + ":q6");
                    });
                    const lines = allLines.map(s => s.trim());
                    for (let index = 0; index < lines.length; index++) {
                        Message.messages[index] = Message.createObjWithString(lines[index]);
                    }
                });
            }
            static restoreState() {
                return __awaiter(this, void 0, void 0, function* () {
                    const currentIndex = MessageID.getID();
                    if (currentIndex === 0) {
                        // Maybe first message isn't clickOnce message.
                        while (!Drama.clickOnceContains(Message.messages[MessageID.getID()])) {
                            yield processMessage();
                        }
                        // After the while loop,next message is clickOnce message.
                        // We want to show the message.
                        // So, we need process it.
                        yield processMessage();
                        return;
                    }
                    let startIndex = -1;
                    for (let i = currentIndex; i >= 0; i--) {
                        if (Message.messages[i].type === DramaType.Ball) {
                            startIndex = i;
                            break;
                        }
                    }
                    if (startIndex === -1) {
                        throw new Error("No message with type DramaType.Ball found");
                    }
                    KeyAnimation.setObjAnimation(Message.messages[startIndex].obj, createNewTextLine());
                    // Because messages[startIndex] is processed (DramaType.Ball), so need add 1.
                    // When startIndex === currentIndex, for loop will not run,
                    // because i (startIndex + 1) > currentIndex.
                    // By the way, because the for loop limit is currentIndex,
                    // and MessageID.getID() === currentIndex,
                    // so we not need to call MessageID.addOne() method.
                    for (let i = startIndex + 1; i <= currentIndex; i++) {
                        const currentMessage = Message.messages[i];
                        if (currentMessage.type === DramaType.Code) {
                            yield currentMessage.obj();
                        }
                        else if (currentMessage.type === DramaType.Function) {
                            yield currentMessage.obj();
                        }
                        else {
                            throw new Error("Invalid message type");
                        }
                    }
                    MessageID.addOne();
                    // Prepare for next click.
                });
            }
            static initAll() {
                return __awaiter(this, void 0, void 0, function* () {
                    yield this.getDrama();
                    yield Message.initialize();
                    this.restoreState();
                    this.eventHook();
                    DirectoryManager.initializeDirectory();
                    Hello.init();
                });
            }
            static eventHook() {
                document.body.addEventListener('click', (ev) => {
                    if (Question.timeStop) {
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                }, true);
                document.getElementById('left').addEventListener('click', (event) => __awaiter(this, void 0, void 0, function* () {
                    if (event.target.tagName === 'BUTTON') {
                        return;
                    }
                    yield this.click();
                }));
                const checkOrientation = function () {
                    const bo = document.getElementById("alert_box");
                    if (window.matchMedia("(orientation: portrait)")) {
                        if (bo !== null) {
                            bo.remove();
                        }
                    }
                    else {
                        if (bo === null) {
                            const a = document.createElement("div");
                            a.id = "alert_box";
                            const b = document.createElement("p");
                            b.textContent = "請轉到橫向畫面。";
                            a.appendChild(b);
                            document.body.appendChild(a);
                        }
                    }
                };
                const supportsOrientationChange = "onorientationchange" in window, orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
                window.addEventListener(orientationEvent, checkOrientation, false);
                checkOrientation();
            }
        },
        __setFunctionName(_a, "_"),
        (() => {
            _a.initAll();
        })(),
        _a);
})();
