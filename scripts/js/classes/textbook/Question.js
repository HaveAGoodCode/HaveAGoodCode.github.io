var __awaiter=this&&this.__awaiter||function(t,i,r,l){return new(r=r||Promise)(function(a,e){function n(t){try{o(l.next(t))}catch(t){e(t)}}function s(t){try{o(l.throw(t))}catch(t){e(t)}}function o(t){var e;t.done?a(t.value):((e=t.value)instanceof r?e:new r(function(t){t(e)})).then(n,s)}o((l=l.apply(t,i||[])).next())})};import{DramaType}from"../drama/Dramas.js";import Left from"../left/Left.js";import Message,{processMessage}from"../message/Message.js";import MessageID from"../message/MessageID.js";let answer=[];class Question{static buttonF(t,e){var a=document.createElement("button");return a.classList.add("button-6"),a.textContent=t,e?(a.classList.add("correct"),a.onclick=()=>{setTimeout(()=>{Question.q5()},500)}):a.classList.add("shake-red"),a}static q1(){Left.append(Question.buttonF("false",!0)),Left.append(Question.buttonF("true",!1))}static q4(){Array.from(document.querySelectorAll("*:not(html):not(body):not(head):not(#base):not(#left *):not(#left)")).forEach(t=>{Question.elementStateMap.set(t,{filter:t.style.filter||null,animationPlayState:t.style.animationPlayState||null}),t.style.filter="blur(2px) grayscale(100%)",t.style.animationPlayState="paused"}),Question.timeStop=!0,Left.append(Question.question_answer)}static q5(){return __awaiter(this,void 0,void 0,function*(){for(Array.from(document.querySelectorAll("*:not(html):not(body):not(head):not(#base):not(#left *):not(#left)")).forEach(t=>{var e=Question.elementStateMap.get(t);e&&(null!==e.filter?t.style.filter=e.filter:t.style.filter="",null!==e.animationPlayState?t.style.animationPlayState=e.animationPlayState:t.style.animationPlayState="")}),this.elementStateMap.clear(),Left.clear(),Question.timeStop=!1,Question.question_answer.value="";Message.messages[MessageID.getID()].type!==DramaType.Ball;)yield processMessage();yield processMessage()})}}Question.elementStateMap=new Map,Question.timeStop=!1,(()=>{var t=document.createElement("input");t.id="question-answer",t.oninput=function(){setTimeout(()=>{this.value===Question.answer&&Question.q5()},300)},Question.question_answer=t})();export default Question;export{answer};