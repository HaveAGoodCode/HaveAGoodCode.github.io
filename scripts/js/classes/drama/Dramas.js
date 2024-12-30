import assert from "../assert/assert.js";
import Message from "../message/Message.js";
import Setting from "../setting/Setting.js";
export var DramaType;
(function (DramaType) {
    DramaType["Ball"] = "Ball";
    DramaType["Function"] = "Function";
    DramaType["Image"] = "Image";
    DramaType["Code"] = "Code";
    DramaType["Answer"] = "Answer";
    DramaType["NEXT_PART"] = "NextPart";
})(DramaType || (DramaType = {}));
;
class Drama {
    static refresh(message) {
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
    static clickOnceContains(type) {
        return Drama.clickType.includes(type.type);
    }
    static findMessageID(type, obj, om) {
        if (Message.messages.length === 0) {
            throw new Error("Message.messages is empty");
        }
        for (let i = 0; i < Message.messages.length; i++) {
            const currentMessage = Message.messages[i];
            if ((type !== undefined && currentMessage.type !== type) ||
                (typeof obj === 'string' && typeof currentMessage.obj === 'string' && !currentMessage.obj.includes(obj)) ||
                (typeof obj === 'function' && typeof currentMessage.obj === 'function' && obj.name !== currentMessage.obj.name) ||
                (obj !== undefined && typeof obj !== 'string' && typeof obj !== 'function' && currentMessage.obj !== obj) ||
                (om !== undefined && currentMessage.originalMessage !== om)) {
                continue;
            }
            return i;
        }
        throw new Error("Message not found");
    }
}
Drama.replaceTypes = new Map([
    [
        DramaType.Ball,
        new Map([
            [() => Setting.drama_time, () => Message.getHelloMsg()]
        ])
    ]
]);
Drama.clickType = [DramaType.Code, DramaType.Ball];
export default Drama;
