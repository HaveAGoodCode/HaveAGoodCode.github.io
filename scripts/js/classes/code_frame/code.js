class CodeFrame{static createCodeFrame(e){var a=document.createElement("pre");a.id="code";let t=document.createElement("code");e=e.split("\n");t.classList.add("java");let r=(null==(l=e[1].match(/^\s*/))?void 0:l[0].length)||0;var l=e.slice(1).map(e=>e.slice(r));t.textContent=l.join("\n"),hljs.highlightElement(t),a.appendChild(t);let o=CodeFrame.spanIcon.cloneNode(!0);return o.addEventListener("click",()=>{navigator.clipboard.writeText(t.textContent),o.classList.remove("fa-regular"),o.classList.add("fa-solid"),setTimeout(()=>{o.classList.remove("fa-solid"),o.classList.add("fa-regular")},300)}),a.appendChild(o),a}static getCodeFrame(){return CodeFrame.codeFrame}}(()=>{var e=document.createElement("button");e.id="content_copy",e.innerHTML='<i class="fa-regular fa-copy"></i>',CodeFrame.spanIcon=e,CodeFrame.codeFrame=CodeFrame.createCodeFrame(`
        public final class Main {
            public static void main(String[] args) {
                System.out.println("Hello World!");
            }
        }`)})();export default CodeFrame;