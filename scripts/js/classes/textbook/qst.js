var __awaiter=this&&this.__awaiter||function(t,i,f,m){return new(f=f||Promise)(function(n,a){function e(t){try{r(m.next(t))}catch(t){a(t)}}function o(t){try{r(m.throw(t))}catch(t){a(t)}}function r(t){var a;t.done?n(t.value):((a=t.value)instanceof f?a:new f(function(t){t(a)})).then(e,o)}r((m=m.apply(t,i||[])).next())})};import KeyAnimation from"../animation/KeyAnimation.js";import Drama from"../drama/Dramas.js";import Left from"../left/Left.js";import Question from"./Question.js";export default class Qst{static getQ1(){return __awaiter(this,void 0,void 0,function*(){var t=["2 + 2 等於 4","水在 0°C 時會結冰","地球圍繞太陽運行","所有三角形的內角和等於 180°","光速是最快的速度","大西洋比太平洋小","長方形的對角線相等","所有的正整數都是非負數","所有的矩形都是平行四邊形","雪是由水蒸氣凝結形成的"],a=["1 + 1 等於 3","地球是平的","水在 100°C 時會結冰","人類可以呼吸在月球上","火車可以飛行","大象能夠飛行","月亮是由奶酪做的","海洋是乾的"],n=()=>{var t=Math.floor(101*Math.random()),a=Math.floor(101*Math.random()),n=t+a;return Math.random()<.2?{text:t+` + ${a} 等於 `+(n+Math.floor(10*Math.random())+1),isCorrect:!1}:{text:t+` + ${a} 等於 `+n,isCorrect:!0}},e=[...t,...a,n().text];let o={};t.forEach(t=>{o[t]=!0}),a.forEach(t=>{o[t]=!1});t=n(),o[t.text]=t.isCorrect,a=e[Math.floor(Math.random()*e.length)];yield KeyAnimation.setObjAnimation("請用電腦的方式回答「"+a+"」?",Drama.createNewTextLine()),Left.append(Question.buttonF("false",!o[a])),Left.append(Question.buttonF("true",o[a])),KeyAnimation.continue=!1})}}