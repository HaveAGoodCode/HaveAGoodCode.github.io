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
import Setting from './classes/setting/Setting.js';
import Message, { ballSays, processMessage } from './classes/message/Message.js';
import { DramaType } from './classes/enum/Types.js';
import { messages } from './classes/constants/Constants.js';
import MessageID from './classes/message/MessageID.js';
import KeyAnimation from './classes/animation/KeyAnimation.js';
import LocalStorageApi, { StorageType } from './classes/localStorage/LocalStorageApi.js';
import Question from './classes/textbook/Question.js';
import DirectoryManager from './classes/directory/Directory.js';
import { Part } from './Drama.js';
(function () {
    var _a;
    const _ = (_a = class {
            static click(init) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (!KeyAnimation.canCountinue) {
                        return;
                    }
                    messages.forEach((chat, index) => {
                        if (chat.type === DramaType.Ball && chat.originalMessage !== null && chat.originalMessage.includes(Setting.drama_time)) {
                            messages[index].obj = chat.originalMessage.replace(Setting.drama_time, Message.getHelloMsg());
                        }
                    });
                    if (!init) {
                        const illustrate = document.getElementById(Setting.illustrateID);
                        if (illustrate !== null) {
                            illustrate.remove();
                        }
                    }
                    yield processMessage();
                    window.localStorage.setItem('messageCount', MessageID.getID().toString());
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
                    });
                    const lines = allLines.map(s => s.trim());
                    for (let index = 0; index < lines.length; index++) {
                        messages[index] = Message.createObjWithString(lines[index]);
                    }
                });
            }
            static restoreState() {
                return __awaiter(this, void 0, void 0, function* () {
                    const currentIndex = MessageID.getID();
                    if (currentIndex === 0) {
                        if (messages[currentIndex].type === DramaType.Ball || messages[currentIndex].type === DramaType.Code) {
                            yield processMessage();
                            MessageID.addOne();
                        }
                        else {
                            while (true) {
                                yield processMessage();
                                if (messages[MessageID.getID()].type === DramaType.Ball || messages[MessageID.getID()].type === DramaType.Code) {
                                    yield processMessage();
                                    break;
                                }
                            }
                        }
                        return;
                    }
                    const message = messages[currentIndex];
                    let startIndex = -1;
                    for (let i = currentIndex; i >= 0; i--) {
                        if (messages[i].type === DramaType.Ball || messages[i].type === DramaType.Code) {
                            startIndex = i;
                            break;
                        }
                    }
                    if (startIndex === -1) {
                        throw new Error("No message with type DramaType.Ball found");
                    }
                    MessageID.addOne();
                    for (let i = startIndex; i < currentIndex; i++) {
                        const currentMessage = messages[i];
                        if (currentMessage.type === DramaType.Function) {
                            yield currentMessage.obj();
                        }
                    }
                    if (message.type === DramaType.Ball) {
                        KeyAnimation.setObjAnimation(message.obj, ballSays);
                    }
                    else if (message.type === DramaType.Code) {
                        KeyAnimation.setObjAnimation2(message.obj, () => __awaiter(this, void 0, void 0, function* () { }));
                    }
                    else {
                        const nextMessage = messages[MessageID.getID()];
                        const animationCallback = nextMessage.type !== DramaType.Ball && nextMessage.type !== DramaType.Code
                            ? () => __awaiter(this, void 0, void 0, function* () {
                                yield processMessage();
                            })
                            : () => __awaiter(this, void 0, void 0, function* () { });
                        const finalCallBack = () => __awaiter(this, void 0, void 0, function* () {
                            yield message.obj();
                            yield animationCallback();
                        });
                        KeyAnimation.setObjAnimation(messages[startIndex].obj, ballSays, finalCallBack);
                    }
                });
            }
            static initAll() {
                return __awaiter(this, void 0, void 0, function* () {
                    yield this.getDrama();
                    this.eventHook();
                    this.spotifyInit();
                    DirectoryManager.main();
                    setTimeout(() => {
                        const obj = document.getElementById(Setting.illustrateID);
                        // The element may have been deleted before execution
                        if (obj) {
                            obj.style.animation = 'fade 2s linear 0s';
                            obj.style.display = 'block';
                        }
                    }, 6000);
                });
            }
            static eventHook() {
                document.body.addEventListener('click', (ev) => {
                    if (Question.timeStop) {
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                }, true);
                document.getElementById(Setting.ballFrameID).addEventListener('click', () => __awaiter(this, void 0, void 0, function* () { return yield this.click(false); }));
                window.addEventListener('wheel', function (event) {
                    if (event.ctrlKey === true || event.metaKey === true) {
                        event.preventDefault();
                    }
                }, { passive: true });
            }
            static spotifyInit() {
                window.onSpotifyIframeApiReady = (IFrameAPI) => __awaiter(this, void 0, void 0, function* () {
                    const element = document.getElementById('spotify-iframe');
                    const options = { uri: 'spotify:track:5vNRhkKd0yEAg8suGBpjeY' };
                    const callback = (EmbedController) => {
                        const a = LocalStorageApi.read(StorageType.MUSIC_TIME);
                        if (a !== null) {
                            EmbedController.loadUri(options.uri, false, a);
                        }
                        EmbedController.addListener('playback_update', e => {
                            LocalStorageApi.write(StorageType.MUSIC_TIME, parseInt(e.data.position, 10) / 1000);
                        });
                        EmbedController.play();
                    };
                    IFrameAPI.createController(element, options, callback);
                    yield this.restoreState();
                });
            }
        },
        __setFunctionName(_a, "_"),
        (() => {
            _a.initAll();
        })(),
        _a);
})();
