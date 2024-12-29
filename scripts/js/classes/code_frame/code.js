class CodeFrame{static createCodeFrame(e){var t=document.createElement("pre");t.id="code";let a=document.createElement("code");e=e.split("\n");a.classList.add("java");let l=(null==(r=e[1].match(/^\s*/))?void 0:r[0].length)||0;var r=e.slice(1).map(e=>e.slice(l));a.textContent=r.join("\n"),hljs.highlightElement(a),t.appendChild(a);let i=document.createElement("button");return i.id="content_copy",i.innerHTML='<i class="fa-regular fa-copy"></i>',i.onclick=()=>{navigator.clipboard.writeText(a.textContent),i.classList.remove("fa-regular"),i.classList.add("fa-solid"),setTimeout(()=>{i.classList.remove("fa-solid"),i.classList.add("fa-regular")},300)},t.appendChild(i),t}static getCodeFrame(){return CodeFrame.codeFrame}}CodeFrame.codeFrame=CodeFrame.createCodeFrame(`
        public final class Main {
            public static void main(String[] args) {
                System.out.println("Hello World!");
            }
        }`);export default CodeFrame;