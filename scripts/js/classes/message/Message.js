var __awaiter=this&&this.__awaiter||function(e,o,i,g){return new(i=i||Promise)(function(s,t){function a(e){try{r(g.next(e))}catch(e){t(e)}}function n(e){try{r(g.throw(e))}catch(e){t(e)}}function r(e){var t;e.done?s(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(a,n)}r((g=g.apply(e,o||[])).next())})};import{DramaType,classList}from"../enum/Types.js";import Setting from"../setting/Setting.js";import{goodMessage}from"../constants/Constants.js";import KeyAnimation from"../animation/KeyAnimation.js";import MessageID from"../message/MessageID.js";import{messages}from"../constants/Constants.js";import assert from"../assert/assert.js";export default class Message{constructor(e,t,s=null){if(e===DramaType.Ball&&null===s)throw new Error("OriginalMessage cannot be null when type is Ball!");this.originalMessage=s,this.type=e,this.obj=t}static createObjWithString(e){for(var t of Object.values(DramaType)){var s="@"+t+":";if(e.startsWith(s))return Message.processType(t,e.replace(s,""))}throw new Error("Unknow type : "+e)}static processType(e,t){switch(e){case DramaType.Ball:var s=t.replace(Setting.drama_fineSentence,goodMessage);return new Message(e,s,s);case DramaType.Function:var a,n=t.replace(/[();]/g,""),r=null;for(a in classList){var o=classList[a];if(o&&"function"==typeof(r=o[n]))break}if("function"!=typeof r)throw new Error(`Unknow function : ${r}, name : `+n);return new Message(e,r);case DramaType.Image:s=document.createElement("img");return s.src=Setting.imageSrcFolder+t,s.classList.add(Setting.stableSizeTag),new Message(e,s);default:throw new Error(`Unknow type : ${e}, string : `+t)}}static getHelloMsg(){var e=(new Date).getHours();return 4<=e&&e<12?Setting.goodMorning:12<=e&&e<18?Setting.goodAfterNoon:Setting.goodNight}}function processMessage(s){return __awaiter(this,void 0,void 0,function*(){var e=messages[MessageID.getID()];switch(e.type){case DramaType.Ball:assert(s instanceof HTMLElement),MessageID.addOne();var t=messages[MessageID.getID()].type!==DramaType.Ball?()=>__awaiter(this,void 0,void 0,function*(){return yield processMessage()}):null;return void KeyAnimation.setObjAnimation(e.obj,s,t);case DramaType.Function:yield e.obj();break;case DramaType.Image:t=document.getElementById(Setting.lessonMediaID);assert(null!==t),t.appendChild(e.obj);break;default:throw new Error("Unknow type : "+e.type)}MessageID.addOne(),messages[MessageID.getID()].type!==DramaType.Ball&&(yield processMessage())})}export{processMessage};