import Message from './Message.js';
export default class MessageID {
    static addOne() {
        MessageID.id = MessageID.getPreAdd(1);
    }
    static addOneAndGet() {
        MessageID.id = MessageID.getPreAdd(1);
        return Message.messages[MessageID.getID()];
    }
    static getPreAdd(num) {
        return (MessageID.id + num) % Message.messages.length;
    }
    static getID() {
        return MessageID.id;
    }
}
