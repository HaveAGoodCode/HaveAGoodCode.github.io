var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Setting from "../setting/Setting.js";
import KeyAnimation from "../animation/KeyAnimation.js";
import MessageID from "../message/MessageID.js";
import CodeFrame from "../code_frame/code.js";
import Codes from "../../Codes.js";
import Question from "../textbook/Question.js";
import Drama, { DramaType } from "../drama/Dramas.js";
import LocalStorageApi, { StorageType, } from "../localStorage/LocalStorageApi.js";
class Message {
    static initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const messageRes = yield fetch(Setting.fineSentenceAPI);
                Message.goodMessage = yield messageRes.text();
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    constructor(type, obj, originalMessage = null) {
        if (type === DramaType.Ball && originalMessage === null) {
            throw new Error("OriginalMessage cannot be null when type is Ball!");
        }
        this.originalMessage = originalMessage;
        this.type = type;
        this.obj = obj;
    }
    static createObjWithString(string) {
        for (let type of Object.values(DramaType)) {
            const prefix = "@" + type + ":";
            if (string.startsWith(prefix)) {
                return Message.processType(type, string.replace(prefix, ""));
            }
        }
        throw new Error(`Unknown type : ${string}`);
    }
    static processType(type, string) {
        switch (type) {
            case DramaType.Ball: {
                const message = string.replace(Setting.drama_fineSentence, Message.goodMessage);
                return new Message(type, message, message);
            }
            case DramaType.Function: {
                const name = string.replace(/[();]/g, "");
                const functionClassList = { Question };
                let method = null;
                for (let className in functionClassList) {
                    const classObj = functionClassList[className];
                    if (classObj) {
                        method = classObj[name];
                        if (typeof method === 'function') {
                            break;
                        }
                    }
                }
                if (typeof method !== 'function') {
                    throw new Error(`Unknown function: ${name}`);
                }
                return new Message(type, method);
            }
            case DramaType.Image: {
                const obj = document.createElement("img");
                obj.src = Setting.imageSrcFolder + string;
                return new Message(DramaType.Function, () => document.getElementById("left").appendChild(obj));
            }
            case DramaType.Code: {
                const obj = CodeFrame.createCodeFrame(Codes[string]);
                return new Message(DramaType.Code, () => document.getElementById("left").appendChild(obj));
            }
            case DramaType.Answer: {
                return new Message(DramaType.Function, () => Question.answer = string);
            }
            default: {
                throw new Error(`Unknown type : ${type}, string : ${string}`);
            }
        }
    }
    static getHelloMsg() {
        const hour = new Date().getHours();
        if (hour >= 4 && hour < 12) {
            return Setting.goodMorning;
        }
        else if (hour >= 12 && hour < 18) {
            return Setting.goodAfterNoon;
        }
        else {
            return Setting.goodNight;
        }
    }
}
Message.messages = [];
export default Message;
export function createNewTextLine() {
    const div = document.createElement("div");
    div.id = "question-title";
    div.style.width = "auto";
    document.getElementById("left").appendChild(div);
    return div;
}
export function processMessage() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Message.initialize();
        LocalStorageApi.write(StorageType.MESSAGE_COUNT, MessageID.getID());
        const message = Drama.refresh(Message.messages[MessageID.getID()]);
        const processNextMessage = Drama.clickOnceContains(MessageID.addOneAndGet())
            ? undefined
            : () => __awaiter(this, void 0, void 0, function* () { return yield processMessage(); });
        // If next Message isn't need click Once, then auto process next message.
        if (message.type === DramaType.Ball) {
            KeyAnimation.setObjAnimation(message.obj, createNewTextLine(), processNextMessage);
        }
        else if (message.type === DramaType.Code) {
            KeyAnimation.setObjAnimation2(message.obj, processNextMessage);
        }
        else if (message.type === DramaType.Function) {
            yield message.obj();
            yield (processNextMessage === null || processNextMessage === void 0 ? void 0 : processNextMessage());
        }
        else {
            throw new Error(`Unknown type : ${message.type}`);
        }
    });
}
