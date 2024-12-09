import { messages } from '../constants/Constants.js';
class MessageID {
    static addOne() {
        MessageID.id = MessageID.getPreAdd(1);
    }
    static getPreAdd(num) {
        return (MessageID.id + num) % messages.length;
    }
    static getID() {
        return MessageID.id;
    }
}
(() => {
    const v = Number(window.localStorage.getItem('messageCount'));
    MessageID.id = Number.isNaN(v) ? 0 : v;
})();
export default MessageID;
