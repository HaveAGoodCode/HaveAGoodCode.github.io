import Message, { processMessage } from './classes/message/Message.js';
import MessageID from './classes/message/MessageID.js';
import KeyAnimation from './classes/animation/KeyAnimation.js';
import Question from './classes/textbook/Question.js';
import DirectoryManager from './classes/directory/Directory.js';
import { Part } from './Drama.js';
import Drama, { DramaType } from './classes/drama/Dramas.js';
import Hello from './Hello.js';
import Left from './classes/left/Left.js';
import Orientation from './Orientation.js';
import DarkMode from './DarkMode.js';
import ButtonChange from './ButtonChange.js';

(function () {
    const _ = class {
        static {
            this.initAll();
        }

        private static async getDrama(): Promise<void> {
            // const dramaRes = await fetch("https://raw.githubusercontent.com/HaveAGoodCode/HaveAGoodCode.github.io/refs/heads/main/dramas/drama.drama");
            // const drama = await dramaRes.text();
            // const lines = drama.split('\n');
            const values: any[] = Object.values(Part);

            const allLines: string[] = [];
            values.forEach((value, index) => {
                const lines: string[] = value.split("\n");
                lines.forEach(line => allLines.push(line));
                if (index !== 0 && index !== 1) {
                    allLines.push("@" + DramaType.Function + ":q4");
                }
            });

            const lines: string[] = allLines.map(s => s.trim());
            for (let index = 0; index < lines.length; index++) {
                Message.messages[index] = Message.createObjWithString(lines[index]);
            }
        }

        private static async restoreState(): Promise<void> {
            const currentIndex = MessageID.getID();

            if (currentIndex === 0) {
                Drama.processToNextClickOnce();
                return;
            }

            let startIndex: number = Drama.getLastMessageIndex(currentIndex, (msg) => msg.type === DramaType.Ball);

            KeyAnimation.setObjAnimation(Message.messages[startIndex].obj, Drama.createNewTextLine());

            // Because messages[startIndex] is processed (DramaType.Ball), so need add 1.

            // When startIndex === currentIndex, for loop will not run,
            // because i (startIndex + 1) > currentIndex.

            // By the way, because the for loop limit is currentIndex,
            // and MessageID.getID() === currentIndex,
            // so we not need to call MessageID.addOne() method.
            for (let i = startIndex + 1; i <= currentIndex; i++) {
                const currentMessage = Drama.getMessageByID(i);

                if (currentMessage.type !== DramaType.Ball) {
                    await Drama.processMessage(currentMessage);
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
            Orientation.init();

            DirectoryManager.initializeDirectory();

            Hello.init();
            DarkMode.init();
            Message.initialize();
        }

        private static eventHook(): void {
            Left.addEventListener('click', async () => await Drama.click());

            const autoPlayButton = document.getElementById("autoPlay") as HTMLButtonElement;
            ButtonChange.registerButton(autoPlayButton, undefined, () => {
                KeyAnimation.autoPlay = !KeyAnimation.autoPlay;
                const autoPlayIcon = autoPlayButton.firstChild as HTMLElement;
                if (autoPlayIcon.classList.contains("fa-circle-play")) {
                    autoPlayIcon.classList.replace("fa-circle-play", "fa-circle-stop");
                } else {
                    autoPlayIcon.classList.replace("fa-circle-stop", "fa-circle-play");
                }
            });
        }
    };
})();