var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { messages } from "../constants/Constants.js";
import Doc from "../doct/doct.js";
import { DramaType } from "../drama/Dramas.js";
import Left from "../left/Left.js";
import { processMessage } from "../message/Message.js";
import MessageID from "../message/MessageID.js";
import Table from "./Table.js";
export let answer = [];
class Question {
    static q1() {
        Doc.getElementById('right').style.width = '100%';
        answer[0] = '2';
    }
    static q2() {
        // (document.getElementsByClassName('text')[0] as HTMLElement).style.display = 'none';
        // var Illustrate = document.getElementById('Illustrate');
        // if (Illustrate !== null) {
        //     Illustrate.style.display = 'none';
        // }
        // (document.getElementById('frame') as HTMLElement).style.display = 'none';
        Doc.getElementById('right').style.width = '60%';
        answer[0] = '2';
    }
    static q3() {
        Doc.getElementById('question').remove();
        Doc.getElementById('editor-iframe').remove();
        Table.compareTable();
    }
    static q4() {
        const elements = Array.from(document.querySelectorAll('*:not(html):not(body):not(head):not(#base):not(#left *):not(#left):not(#lesson-media)'));
        elements.forEach(element => {
            Question.elementStateMap.set(element, {
                filter: element.style.filter || null,
                animationPlayState: element.style.animationPlayState || null,
            });
            element.style.filter = 'blur(2px) grayscale(100%)';
            element.style.animationPlayState = "paused";
        });
        Question.timeStop = true;
    }
    static q5() {
        return __awaiter(this, void 0, void 0, function* () {
            const elements = Array.from(document.querySelectorAll('*:not(html):not(body):not(head):not(#base):not(#left *):not(#left):not(#lesson-media)'));
            elements.forEach(element => {
                const originalState = Question.elementStateMap.get(element);
                if (originalState) {
                    if (originalState.filter !== null) {
                        element.style.filter = originalState.filter;
                    }
                    else {
                        element.style.filter = "";
                    }
                    if (originalState.animationPlayState !== null) {
                        element.style.animationPlayState = originalState.animationPlayState;
                    }
                    else {
                        element.style.animationPlayState = "";
                    }
                }
            });
            Left.clear();
            Question.timeStop = false;
            Question.question_answer.value = "";
            while (messages[MessageID.getID()].type !== DramaType.Ball) {
                yield processMessage();
            }
            yield processMessage();
        });
    }
    static q6() {
        document.getElementById("left").appendChild(Question.question_answer);
    }
}
Question.elementStateMap = new Map();
Question.timeStop = false;
(() => {
    const question_answer = document.createElement("input");
    question_answer.id = "question-answer";
    question_answer.oninput = function () {
        setTimeout(() => {
            if (this.value === Question.answer) {
                Question.q5();
            }
        }, 300);
    };
    Question.question_answer = question_answer;
})();
export default Question;
