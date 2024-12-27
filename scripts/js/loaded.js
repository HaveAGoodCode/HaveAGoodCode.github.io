var __awaiter=this&&this.__awaiter||function(e,o,r,c){return new(r=r||Promise)(function(a,t){function i(e){try{n(c.next(e))}catch(e){t(e)}}function s(e){try{n(c.throw(e))}catch(e){t(e)}}function n(e){var t;e.done?a(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(i,s)}n((c=c.apply(e,o||[])).next())})},__setFunctionName=this&&this.__setFunctionName||function(e,t,a){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:a?"".concat(a," ",t):t})};import Message,{createNewTextLine,processMessage}from"./classes/message/Message.js";import MessageID from"./classes/message/MessageID.js";import KeyAnimation from"./classes/animation/KeyAnimation.js";import Question from"./classes/textbook/Question.js";import DirectoryManager from"./classes/directory/Directory.js";import{Part}from"./Drama.js";import Drama,{DramaType}from"./classes/drama/Dramas.js";(()=>{var e;__setFunctionName(e=class{static click(){return __awaiter(this,void 0,void 0,function*(){KeyAnimation.canContinue&&(yield processMessage())})}static getDrama(){return __awaiter(this,void 0,void 0,function*(){var e=Object.values(Part);let t=[];e.forEach(e=>{e.split("\n").forEach(e=>t.push(e)),t.push("@"+DramaType.Function+":q4"),t.push("@"+DramaType.Function+":q6")});var a=t.map(e=>e.trim());for(let e=0;e<a.length;e++)Message.messages[e]=Message.createObjWithString(a[e])})}static restoreState(){return __awaiter(this,void 0,void 0,function*(){var a=MessageID.getID();if(0===a){for(;!Drama.clickOnceContains(Message.messages[MessageID.getID()]);)yield processMessage();yield processMessage()}else{let t=-1;for(let e=a;0<=e;e--)if(Message.messages[e].type===DramaType.Ball){t=e;break}if(-1===t)throw new Error("No message with type DramaType.Ball found");KeyAnimation.setObjAnimation(Message.messages[t].obj,createNewTextLine());for(let e=t+1;e<=a;e++){var i=Message.messages[e];if(i.type!==DramaType.Code&&i.type!==DramaType.Function)throw new Error("Invalid message type");yield i.obj()}MessageID.addOne()}})}static initAll(){return __awaiter(this,void 0,void 0,function*(){yield this.getDrama(),yield Message.initialize(),this.restoreState(),this.eventHook(),DirectoryManager.initializeDirectory()})}static eventHook(){document.body.addEventListener("click",e=>{Question.timeStop&&(e.preventDefault(),e.stopPropagation())},!0),document.getElementById("left").addEventListener("click",()=>__awaiter(this,void 0,void 0,function*(){return yield this.click()}));function e(){var e,t=document.getElementById("alert_box");window.matchMedia("(orientation: portrait)")?null!==t&&t.remove():null===t&&((t=document.createElement("div")).id="alert_box",(e=document.createElement("p")).textContent="請轉到橫向畫面。",t.appendChild(e),document.body.appendChild(t))}var t="onorientationchange"in window;window.addEventListener(t?"orientationchange":"resize",e,!1),e()}},"_"),e.initAll()})();