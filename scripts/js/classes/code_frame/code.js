class CodeFrame {
    static createCodeFrame(codes) {
        var _a;
        const codeDiv = document.createElement('pre');
        codeDiv.id = 'code';
        const code = document.createElement("code");
        const lines = codes.split("\n");
        code.classList.add("java");
        const leadingSpacesCount = ((_a = lines[1].match(/^\s*/)) === null || _a === void 0 ? void 0 : _a[0].length) || 0;
        const trimmedLines = lines.slice(1).map(line => line.slice(leadingSpacesCount));
        code.textContent = trimmedLines.join("\n");
        hljs.highlightElement(code);
        codeDiv.appendChild(code);
        const spanIcon = document.createElement('button');
        spanIcon.innerHTML = `<i class="fa-regular fa-copy"></i>`;
        spanIcon.style.zIndex = "9999999999999";
        codeDiv.appendChild(spanIcon);
        spanIcon.onclick = () => {
            navigator.clipboard.writeText(code.textContent);
            spanIcon.classList.remove('fa-regular');
            spanIcon.classList.add('fa-solid');
            setTimeout(() => {
                spanIcon.classList.remove('fa-solid');
                spanIcon.classList.add('fa-regular');
            }, 300);
        };
        return codeDiv;
    }
    static getCodeFrame() {
        return CodeFrame.codeFrame;
    }
}
(() => {
    CodeFrame.codeFrame = CodeFrame.createCodeFrame(`
        public final class Main {
            public static void main(String[] args) {
                System.out.println("Hello World!");
            }
        }`);
})();
export default CodeFrame;
