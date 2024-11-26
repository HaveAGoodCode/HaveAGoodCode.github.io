var __awaiter=this&&this.__awaiter||function(e,o,r,l){return new(r=r||Promise)(function(a,t){function s(e){try{n(l.next(e))}catch(e){t(e)}}function i(e){try{n(l.throw(e))}catch(e){t(e)}}function n(e){var t;e.done?a(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,i)}n((l=l.apply(e,o||[])).next())})};import Setting from"./classes/setting/Setting.js";import Message,{ballSays,processMessage}from"./classes/message/Message.js";import{DramaType,AnimationState}from"./classes/enum/Types.js";import{animationStates,messages}from"./classes/constants/Constants.js";import MessageID from"./classes/message/MessageID.js";import KeyAnimation from"./classes/animation/KeyAnimation.js";import Doc from"./classes/doct/doct.js";(()=>{let a=`
        @Ball:歡迎來到Java的世界！
        @Ball:Dev Java
        @Function:q1();
        @Ball:Question And Dev Java
        @Function:q2();
        @Ball:「基本類型」就是「國文與英文」、「數學」
        @Function:q3();
        `;!function(){__awaiter(this,void 0,void 0,function*(){yield function(){return __awaiter(this,void 0,void 0,function*(){for(var e=a.trim().split("\n"),t=0;t<e.length;t++)messages[t]=Message.createObjWithString(e[t].replace(/^\s+/,""))})}(),yield function(){return __awaiter(this,void 0,void 0,function*(){var a=MessageID.getID();if(0===a)yield processMessage();else{var s,i=a-1;if(i<0||i>=messages.length)throw new Error("Invalid currentMessageID");let e=messages[a],t=-1;for(let e=i;0<=e;e--)if(messages[e].type===DramaType.Ball){t=e;break}if(-1===t)throw new Error("No message with type DramaType.Ball found");if(e.type===DramaType.Ball){for(let e=t;e<a;e++)(s=messages[e]).type===DramaType.Function&&(yield s.obj());KeyAnimation.setObjAnimation(e.obj,ballSays)}else{for(let e=t;e<a;e++)(s=messages[e]).type===DramaType.Function&&(yield s.obj());KeyAnimation.setObjAnimation(messages[t].obj,ballSays,yield e.obj())}MessageID.addOne()}})}(),function(){Doc.getElementById(Setting.ballFrameID).addEventListener("click",()=>__awaiter(this,void 0,void 0,function*(){return yield function(t){return __awaiter(this,void 0,void 0,function*(){var e;animationStates[0]===AnimationState.IDLE&&(messages.forEach((e,t)=>{e.type===DramaType.Ball&&null!==e.originalMessage&&e.originalMessage.includes(Setting.drama_time)&&(messages[t].obj=e.originalMessage.replace(Setting.drama_time,Message.getHelloMsg()))}),t||null!==(e=document.getElementById(Setting.illustrateID))&&e.remove(),yield processMessage(),window.localStorage.setItem("messageCount",MessageID.getID().toString()))})}(!1)}))}(),setTimeout(()=>{var e=document.getElementById(Setting.illustrateID);e&&(e.style.animation="fade 2s linear 0s",e.style.display="block")},6e3)})}()})();