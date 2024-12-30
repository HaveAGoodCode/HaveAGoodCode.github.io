export default class CodeFrame {
    private static codeFrame: HTMLElement;

    static {
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

        const spanIcon = document.createElement('button');
        spanIcon.id = 'content_copy';

        const i = document.createElement('i');
        i.id = 'content_copy_icon';
        i.classList.add('fa-regular');
        i.classList.add('fa-copy');
        spanIcon.appendChild(i);

        i.onclick = () => {
            navigator.clipboard.writeText((code as HTMLElement).textContent as string);

            i.classList.remove('fa-regular');
            i.classList.add('fa-solid');
            setTimeout(() => {
                i.classList.remove('fa-solid');
                i.classList.add('fa-regular');
            }, 200);
        };
        
        codeDiv.appendChild(spanIcon);

        return codeDiv;
    }

    public static getCodeFrame(): HTMLElement {
        return CodeFrame.codeFrame;
    }
}