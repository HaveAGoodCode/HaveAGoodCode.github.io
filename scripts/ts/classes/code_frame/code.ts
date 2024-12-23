export default class CodeFrame {
    private static codeFrame: HTMLElement;
    private static spanIcon: HTMLElement;

    static {
        const spanIcon = document.createElement('button');
        spanIcon.id = 'content_copy';
        spanIcon.innerHTML = `<i class="fa-regular fa-copy"></i>`;
        CodeFrame.spanIcon = spanIcon;
        CodeFrame.codeFrame = CodeFrame.createCodeFrame(`
        public final class Main {
            public static void main(String[] args) {
                System.out.println("Hello World!");
            }
        }`);
    }

    public static createCodeFrame(codes: string): HTMLElement {
        const codeDiv = document.createElement('pre');
        codeDiv.id = 'code';
        
        const code = document.createElement("code");
        const lines = codes.split("\n");
        (code as HTMLElement).classList.add("java");
        const leadingSpacesCount = lines[1].match(/^\s*/)?.[0].length || 0;
        const trimmedLines = lines.slice(1).map(line => line.slice(leadingSpacesCount));
        code.textContent = trimmedLines.join("\n");
        
        hljs.highlightElement(code);
        codeDiv.appendChild(code);

        const spanIcon: HTMLElement = CodeFrame.spanIcon.cloneNode(true) as HTMLElement;
        spanIcon.addEventListener('click', () => {
            navigator.clipboard.writeText((code as HTMLElement).textContent as string);

            spanIcon.classList.remove('fa-regular');
            spanIcon.classList.add('fa-solid');
            setTimeout(() => {
                spanIcon.classList.remove('fa-solid');
                spanIcon.classList.add('fa-regular');
            }, 300);
        });
        codeDiv.appendChild(spanIcon);

        return codeDiv;
    }

    public static getCodeFrame(): HTMLElement {
        return CodeFrame.codeFrame;
    }
}