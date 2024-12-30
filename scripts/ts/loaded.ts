import Message, { createNewTextLine, processMessage } from './classes/message/Message.js';
import MessageID from './classes/message/MessageID.js';
import KeyAnimation from './classes/animation/KeyAnimation.js';
import Question from './classes/textbook/Question.js';
import DirectoryManager from './classes/directory/Directory.js';
import { Part } from './Drama.js';
import Drama, { DramaType } from './classes/drama/Dramas.js';
import Hello from './Hello.js';

(function () {
    const _ = class {
        static {
            this.initAll();
        }

        private static async click(): Promise<void> {
            if (!KeyAnimation.canContinue) {
                return;
            }

            await processMessage();
        }

        private static async getDrama(): Promise<void> {
            // const dramaRes = await fetch("https://raw.githubusercontent.com/HaveAGoodCode/HaveAGoodCode.github.io/refs/heads/main/dramas/drama.drama");
            // const drama = await dramaRes.text();
            // const lines = drama.split('\n');
            const values: any[] = Object.values(Part);

            const allLines: string[] = [];
            values.forEach(value => {
                const lines: string[] = value.split("\n");
                lines.forEach(line => allLines.push(line));
                allLines.push("@" + DramaType.Function + ":q4");
                allLines.push("@" + DramaType.Function + ":q6");
            });

            const lines: string[] = allLines.map(s => s.trim());
            for (let index = 0; index < lines.length; index++) {
                Message.messages[index] = Message.createObjWithString(lines[index]);
            }
        }

        private static async restoreState(): Promise<void> {
            const currentIndex = MessageID.getID();

            if (currentIndex === 0) {
                // Maybe first message isn't clickOnce message.
                while (!Drama.clickOnceContains(Message.messages[MessageID.getID()])) {
                    await processMessage();
                }
                // After the while loop,next message is clickOnce message.
                // We want to show the message.
                // So, we need process it.
                await processMessage();
                return;
            }

            let startIndex: number = -1;
            for (let i = currentIndex; i >= 0; i--) {
                if (Message.messages[i].type === DramaType.Ball) {
                    startIndex = i;
                    break;
                }
            }

            if (startIndex === -1) {
                throw new Error("No message with type DramaType.Ball found");
            }

            KeyAnimation.setObjAnimation(Message.messages[startIndex].obj, createNewTextLine());

            // Because messages[startIndex] is processed (DramaType.Ball), so need add 1.

            // When startIndex === currentIndex, for loop will not run,
            // because i (startIndex + 1) > currentIndex.

            // By the way, because the for loop limit is currentIndex,
            // and MessageID.getID() === currentIndex,
            // so we not need to call MessageID.addOne() method.
            for (let i = startIndex + 1; i <= currentIndex; i++) {
                const currentMessage = Message.messages[i];

                if (currentMessage.type === DramaType.Code) {
                    await currentMessage.obj();
                } else if (currentMessage.type === DramaType.Function) {
                    await currentMessage.obj();
                } else {
                    throw new Error("Invalid message type");
                }
            }

            MessageID.addOne();
            // Prepare for next click.
        }

        private static async initAll(): Promise<void> {
            await this.getDrama();
            await Message.initialize();
            this.restoreState();

            this.eventHook();

            DirectoryManager.initializeDirectory();

            Hello.init();
        }

        private static eventHook(): void {
            document.body.addEventListener('click', (ev) => {
                if (Question.timeStop) {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }, true);
        
            (document.getElementById('left') as HTMLElement).addEventListener('click', async (event) => {
                if ((event.target as HTMLElement).tagName === 'BUTTON') {
                    return;
                }
            
                await this.click();
            });

            const checkOrientation = function () {
                const bo: HTMLElement | null = document.getElementById("alert_box");
                if (window.matchMedia("(orientation: portrait)")) {
                    if (bo !== null) {
                        bo.remove();
                    }
                } else {
                    if (bo === null) {
                        const a: HTMLElement = document.createElement("div");
                        a.id = "alert_box";
                        const b: HTMLElement = document.createElement("p");
                        b.textContent = "請轉到橫向畫面。";
                        a.appendChild(b);
                        document.body.appendChild(a);
                    }
                }
            };
            const supportsOrientationChange = "onorientationchange" in window,
                orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
            window.addEventListener(orientationEvent, checkOrientation, false);
            checkOrientation();
        }
    };
})();