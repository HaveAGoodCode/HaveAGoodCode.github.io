export default class Orientation{static init(){var t="onorientationchange"in window;window.addEventListener(t?"orientationchange":"resize",this.checkOrientation,!1),this.checkOrientation()}static checkOrientation(){var t,e=document.getElementById("alert_box");void 0===window.orientation||90===Math.abs(window.orientation)?null!==e&&e.remove():null===e&&((e=document.createElement("div")).id="alert_box",(t=document.createElement("p")).textContent="請轉到橫向畫面。",e.appendChild(t),document.body.appendChild(e))}}