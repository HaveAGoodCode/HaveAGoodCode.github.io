import KeyAnimation from "../animation/KeyAnimation.js";
import Drama, { DramaType } from "../drama/Dramas.js";
import Left from "../left/Left.js";
import Message, { processMessage } from "../message/Message.js";
import MessageID from "../message/MessageID.js";

export let answer: string[] = [];

export default class Question {
    static elementStateMap = new Map<HTMLElement, { filter: string | null, animationPlayState: string | null }>();
    static answer: string;
    static question_answer: HTMLElement;
    static timeStop: boolean = false;

    static {
        const question_answer: HTMLElement = document.createElement("input");
        question_answer.id = "question-answer";
        question_answer.oninput = function () {
            setTimeout(() => {
                if ((this as HTMLInputElement).value === Question.answer) {
                    Question.q5();
                }
            }, 300);
        };
        Question.question_answer = question_answer;
    }

    public static buttonF(a: string, correct: boolean): HTMLButtonElement {
        const button: HTMLButtonElement = document.createElement("button");
        button.classList.add("button-6");
        button.textContent = a;
        if (correct) {
            button.classList.add("correct");
            button.onclick = () => {
                button.classList.add("shake-green");

                setTimeout(() => {
                    Question.q5();
                    button.classList.remove("shake-green");
                }, 500);
            };
        } else {
            button.onclick = () => {
                button.classList.add("shake-red");
                setTimeout(() => button.classList.remove("shake-red"), 500);
            };
        }
        return button;
    }

    public static q1(): void {
        Left.append(Question.buttonF("false", true));
        Left.append(Question.buttonF("true", false));
        KeyAnimation.setCanContinue(false);
    }

    public static q2(): void {
        Left.append(Question.buttonF("false", false));
        Left.append(Question.buttonF("true", true));
        KeyAnimation.setCanContinue(false);
    }

    static q4() {
        Left.append(Question.question_answer);
        KeyAnimation.setCanContinue(false);
    }

    static async q5() {
        Left.clear();
        KeyAnimation.setCanContinue(true);

        (Question.question_answer as HTMLInputElement).value = "";

        while (Message.messages[MessageID.getID()].type !== DramaType.Ball) {
            await processMessage();
        }
        await processMessage();

        if (KeyAnimation.autoPlay) {
            await Drama.click();
        }
    }
}