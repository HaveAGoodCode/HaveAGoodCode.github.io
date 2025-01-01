import Setting from "../setting/Setting.js";
import KeyAnimation from "../animation/KeyAnimation.js";
import MessageID from "../message/MessageID.js";
import CodeFrame from "../code_frame/code.js";
import Codes from "../../Codes.js";
import Question from "../textbook/Question.js";
import Drama, { DramaType } from "../drama/Dramas.js";
import LocalStorageApi, {
    StorageType,
} from "../localStorage/LocalStorageApi.js";

export default class Message {
    public static messages: Message[] = [];
    private static goodMessage: string;

    public static async initialize() {
        try {
            const messageRes = await fetch(Setting.fineSentenceAPI);
            Message.goodMessage = await messageRes.text();
        } catch (e) {
            console.error(e);
        }
    }

    public type: DramaType;
    public obj: any;
    public originalMessage: string | null;

    private constructor(
        type: DramaType,
        obj: any,
        originalMessage: string | null = null
    ) {
        if (type === DramaType.Ball && originalMessage === null) {
            throw new Error("OriginalMessage cannot be null when type is Ball!");
        }
        this.originalMessage = originalMessage;
        this.type = type;
        this.obj = obj;
    }

    public static createObjWithString(string: string): Message {
        for (let type of Object.values(DramaType)) {
            const prefix = "@" + type + ":";
            if (string.startsWith(prefix)) {
                return Message.processType(type, string.replace(prefix, ""));
            }
        }
        throw new Error(`Unknown type : ${string}`);
    }

    public static processType(type: DramaType, string: string): Message {
        switch (type) {
            case DramaType.Ball: {
                const message: string = string.replace(Setting.drama_fineSentence, Message.goodMessage);
                return new Message(type, message, message);
            }

            case DramaType.Function: {
                const name = string.replace(/[();]/g, "");
                const functionClassList: Record<string, any> = { Question };

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
                return new Message(DramaType.Function, () =>
                    (document.getElementById("left") as HTMLElement).appendChild(obj));
            }

            case DramaType.Code: {
                const obj = CodeFrame.createCodeFrame(Codes[string]);
                return new Message(DramaType.Code, () =>
                    (document.getElementById("left") as HTMLElement).appendChild(obj));
            }

            case DramaType.Answer: {
                return new Message(DramaType.Function, () => Question.answer = string);
            }

            default: {
                throw new Error(`Unknown type : ${type}, string : ${string}`);
            }
        }
    }

    public static getHelloMsg(): string {
        const hour = new Date().getHours();
        if (hour >= 4 && hour < 12) {
            return Setting.goodMorning;
        } else if (hour >= 12 && hour < 18) {
            return Setting.goodAfterNoon;
        } else {
            return Setting.goodNight;
        }
    }
}

export function createNewTextLine(): HTMLElement {
    const div: HTMLElement = document.createElement("div");
    div.id = "question-title";
    div.style.width = "auto";
    (document.getElementById("left") as HTMLElement).appendChild(div);
    return div;
}

export async function processMessage(): Promise<void> {
    LocalStorageApi.write<number>(StorageType.MESSAGE_COUNT, MessageID.getID());

    const message = Drama.refresh(Message.messages[MessageID.getID()]);
    const processNextMessage = Drama.clickOnceContains(MessageID.addOneAndGet())
        ? undefined
        : async () => await processMessage();

    // If next Message isn't need click Once, then auto process next message.
    if (message.type === DramaType.Ball) {
        await KeyAnimation.setObjAnimation(message.obj, createNewTextLine(), processNextMessage);

    } else if (message.type === DramaType.Code) {
        KeyAnimation.setObjAnimation2(message.obj, processNextMessage);

    } else if (message.type === DramaType.Function) {
        await message.obj();
        await processNextMessage?.();

    } else {
        throw new Error(`Unknown type : ${message.type}`);
    }
}