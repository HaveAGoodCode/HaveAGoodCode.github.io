var __awaiter=this&&this.__awaiter||function(e,o,n,c){return new(n=n||Promise)(function(a,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function r(e){try{s(c.throw(e))}catch(e){t(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,r)}s((c=c.apply(e,o||[])).next())})},__setFunctionName=this&&this.__setFunctionName||function(e,t,a){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:a?"".concat(a," ",t):t})};import Message from"./classes/message/Message.js";import MessageID from"./classes/message/MessageID.js";import KeyAnimation from"./classes/animation/KeyAnimation.js";import DirectoryManager from"./classes/directory/Directory.js";import{Part}from"./Drama.js";import Drama,{DramaType}from"./classes/drama/Dramas.js";import Hello from"./Hello.js";import Left from"./classes/left/Left.js";import Orientation from"./Orientation.js";import DarkMode from"./DarkMode.js";import ButtonChange from"./ButtonChange.js";(()=>{var e;__setFunctionName(e=class{static getDrama(){return __awaiter(this,void 0,void 0,function*(){var e=Object.values(Part);let a=[];e.forEach((e,t)=>{e.split("\n").forEach(e=>a.push(e)),0!==t&&1!==t&&a.push("@"+DramaType.Function+":q4")});var t=a.map(e=>e.trim());for(let e=0;e<t.length;e++)Message.messages[e]=Message.createObjWithString(t[e])})}static restoreState(){return __awaiter(this,void 0,void 0,function*(){var t=MessageID.getID();if(0===t)Drama.processToNextClickOnce();else{var a=Drama.getLastMessageIndex(t,e=>e.type===DramaType.Ball);KeyAnimation.setObjAnimation(Message.messages[a].obj,Drama.createNewTextLine());for(let e=a+1;e<=t;e++){var i=Drama.getMessageByID(e);if(i.type===DramaType.Ball)throw new Error("Invalid message type");yield Drama.processMessage(i)}MessageID.addOne()}})}static initAll(){return __awaiter(this,void 0,void 0,function*(){yield this.getDrama(),yield Message.initialize(),this.restoreState(),this.eventHook(),Orientation.init(),DirectoryManager.initializeDirectory(),Hello.init(),DarkMode.init(),Message.initialize()})}static eventHook(){Left.addEventListener("click",()=>__awaiter(this,void 0,void 0,function*(){return yield Drama.click()}));let t=document.getElementById("autoPlay");ButtonChange.registerButton(t,void 0,()=>{KeyAnimation.autoPlay=!KeyAnimation.autoPlay;var e=t.firstChild;e.classList.contains("fa-circle-play")?e.classList.replace("fa-circle-play","fa-circle-stop"):e.classList.replace("fa-circle-stop","fa-circle-play")})}},"_"),e.initAll()})();