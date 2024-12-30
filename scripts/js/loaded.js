var __awaiter=this&&this.__awaiter||function(e,r,o,c){return new(o=o||Promise)(function(i,t){function a(e){try{n(c.next(e))}catch(e){t(e)}}function s(e){try{n(c.throw(e))}catch(e){t(e)}}function n(e){var t;e.done?i(e.value):((t=e.value)instanceof o?t:new o(function(e){e(t)})).then(a,s)}n((c=c.apply(e,r||[])).next())})},__setFunctionName=this&&this.__setFunctionName||function(e,t,i){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:i?"".concat(i," ",t):t})};import Message,{createNewTextLine,processMessage}from"./classes/message/Message.js";import MessageID from"./classes/message/MessageID.js";import KeyAnimation from"./classes/animation/KeyAnimation.js";import Question from"./classes/textbook/Question.js";import DirectoryManager from"./classes/directory/Directory.js";import{Part}from"./Drama.js";import Drama,{DramaType}from"./classes/drama/Dramas.js";import Hello from"./Hello.js";import Left from"./classes/left/Left.js";import Orientation from"./Orientation.js";(()=>{var e;__setFunctionName(e=class{static click(){return __awaiter(this,void 0,void 0,function*(){KeyAnimation.canContinue&&(yield processMessage())})}static getDrama(){return __awaiter(this,void 0,void 0,function*(){var e=Object.values(Part);let i=[];e.forEach((e,t)=>{e.split("\n").forEach(e=>i.push(e)),0===t||1===t?i.push("@"+DramaType.Function+":q4r"):i.push("@"+DramaType.Function+":q4")});var t=i.map(e=>e.trim());for(let e=0;e<t.length;e++)Message.messages[e]=Message.createObjWithString(t[e])})}static restoreState(){return __awaiter(this,void 0,void 0,function*(){var i=MessageID.getID();if(0===i){for(;!Drama.clickOnceContains(Message.messages[MessageID.getID()]);)yield processMessage();yield processMessage()}else{let t=-1;for(let e=i;0<=e;e--)if(Message.messages[e].type===DramaType.Ball){t=e;break}if(-1===t)throw new Error("No message with type DramaType.Ball found");KeyAnimation.setObjAnimation(Message.messages[t].obj,createNewTextLine());for(let e=t+1;e<=i;e++){var a=Message.messages[e];if(a.type!==DramaType.Code&&a.type!==DramaType.Function)throw new Error("Invalid message type");yield a.obj()}MessageID.addOne()}})}static initAll(){return __awaiter(this,void 0,void 0,function*(){yield this.getDrama(),yield Message.initialize(),this.restoreState(),this.eventHook(),Orientation.init(),DirectoryManager.initializeDirectory(),Hello.init()})}static eventHook(){document.body.addEventListener("click",e=>{Question.timeStop&&(e.preventDefault(),e.stopPropagation(),e.target instanceof HTMLButtonElement&&"content_copy"===e.target.id&&null!==e.target.firstChild&&e.target.firstChild instanceof HTMLElement&&"content_copy_icon"===e.target.firstChild.id&&null!==e.target.firstChild.onclick?e.target.firstChild.onclick():(e.target instanceof HTMLElement&&"content_copy_icon"===e.target.id&&null!==e.target.onclick||e.target instanceof HTMLButtonElement&&e.target.classList.contains("button-6")&&null!==e.target.onclick)&&e.target.onclick())},!0),Left.addEventListener("click",()=>__awaiter(this,void 0,void 0,function*(){return yield this.click()}))}},"_"),e.initAll()})();