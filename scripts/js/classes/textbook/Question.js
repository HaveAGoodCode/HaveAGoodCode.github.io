import Doc from"../doct/doct.js";import Table from"./Table.js";let answer=[];class Question{static q1(){Doc.getElementById("right").style.width="100%",answer[0]="2"}static q2(){Doc.getElementById("right").style.width="60%",answer[0]="2"}static q3(){Doc.getElementById("question").remove(),Doc.getElementById("editor-iframe").remove(),Table.compareTable()}static q4(){Array.from(document.querySelectorAll("*:not(html):not(body):not(head):not(#base):not(#left *):not(#left):not(#lesson-media)")).forEach(t=>{Question.elementStateMap.set(t,{filter:t.style.filter||null,animationPlayState:t.style.animationPlayState||null}),t.style.filter="blur(2px) grayscale(100%)",t.style.animationPlayState="paused"}),Question.answer="aaaaaa"}static q5(){Array.from(document.querySelectorAll("*:not(html):not(body):not(head):not(#base):not(#left *):not(#left):not(#lesson-media)")).forEach(t=>{var e=Question.elementStateMap.get(t);e&&(null!==e.filter?t.style.filter=e.filter:t.style.filter="",null!==e.animationPlayState?t.style.animationPlayState=e.animationPlayState:t.style.animationPlayState="")})}}Question.elementStateMap=new Map;export default Question;export{answer};