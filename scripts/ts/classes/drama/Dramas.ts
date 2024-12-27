import assert from "../assert/assert.js";
import Message from "../message/Message.js";
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
}