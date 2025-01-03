import KeyAnimation from "../animation/KeyAnimation.js";
import assert from "../assert/assert.js";
import LocalStorageApi, { StorageType } from "../localStorage/LocalStorageApi.js";
import Message, { processMessage } from "../message/Message.js";
import MessageID from "../message/MessageID.js";
import Setting from "../setting/Setting.js";

export enum DramaType {
    Ball = 'Ball',
    Function = 'Function',
    Image = 'Image',
    Code = 'Code',
    Answer = 'Answer',
    NEXT_PART = 'NextPart'
};

export default class Drama {
    private static readonly replaceTypes: Map<DramaType, Map<() => string, () => string>> = new Map([
        [
            DramaType.Ball,
            new Map([
                [() => Setting.drama_time, () => Message.getHelloMsg()]
            ])
        ]
    ]);

    private static readonly clickType: DramaType[] = [DramaType.Code, DramaType.Ball];

    public static async click(): Promise<void> {
        if (!KeyAnimation.continue) {
            return;
        }

        await processMessage();

        if (KeyAnimation.autoPlay) {
            await this.click();
        }
    }

    public static refresh(message: Message): Message {
        for (let [targetType, replaceMap] of Drama.replaceTypes) {

            if (message.type === targetType) {

                assert(message.originalMessage !== null);

                let updatedMessage = message.originalMessage;
                for (const [replaceString, replaceTarget] of replaceMap) {
                    updatedMessage = updatedMessage.replace(replaceString(), replaceTarget());
                }
                message.obj = updatedMessage;

                break;
            }
        }
        return message;
    }

    public static clickOnceContains(type: Message): boolean {
        return Drama.clickType.includes(type.type);
    }

    public static processToNextClickOnce(): void {
        this.processWithFilter((msg) => !Drama.clickOnceContains(msg));
    }

    public static async processWithFilter(filter: ((msg: Message) => boolean)): Promise<void> {
        // Maybe first message isn't clickOnce message.
        while (filter(Drama.getCurrentMessage())) {
            LocalStorageApi.write<number>(StorageType.MESSAGE_COUNT, MessageID.getID());

            await Drama.processMessage(Drama.getCurrentMessage());
            MessageID.addOne();
        }
        // After the while loop, next message is clickOnce message.
        // We want to show the message.
        // So, we need process it.
    }

    public static getLastMessageIndex(start: number, filter: ((msg: Message) => boolean)): number {
        for (let i = start; i >= 0; i--) {
            if (filter(Drama.getMessageByID(i))) {
                return i;
            }
        }
        throw new Error("No message found.");
    }

    public static createNewTextLine(): HTMLElement {
        const div: HTMLElement = document.createElement("div");
        div.id = "question-title";
        div.style.width = "auto";
        (document.getElementById("left") as HTMLElement).appendChild(div);
        return div;
    }

    public static findMessageID(type?: DramaType, obj?: any, om?: string): number {
        if (Message.messages.length === 0) {
            throw new Error("Message.messages is empty");
        }

        for (let i = 0; i < Message.messages.length; i++) {
            const currentMessage = Drama.getMessageByID(i);

            if (
                (type !== undefined && currentMessage.type !== type) ||
                (typeof obj === 'string' && typeof currentMessage.obj === 'string' && !currentMessage.obj.includes(obj)) ||
                (typeof obj === 'function' && typeof currentMessage.obj === 'function' && obj.name !== currentMessage.obj.name) ||
                (obj !== undefined && typeof obj !== 'string' && typeof obj !== 'function' && currentMessage.obj !== obj) ||
                (om !== undefined && currentMessage.originalMessage !== om)
            ) {
                continue;
            }

            return i;
        }

        throw new Error("Message not found");
    }

    public static async processMessage(msg: Message): Promise<void> {
        // If next Message isn't need click Once, then auto process next message.
        if (msg.type === DramaType.Ball) {
            await KeyAnimation.setObjAnimation(msg.obj, Drama.createNewTextLine());
        } else if (msg.type === DramaType.Code || msg.type === DramaType.Function) {
            await msg.obj();
        } else {
            throw new Error(`Unknown type : ${msg.type}`);
        }
    }

    public static getMessageByID(id: number): Message {
        return Message.messages[id];
    }

    public static getCurrentMessage(): Message {
        return Drama.getMessageByID(MessageID.getID());
    }
}