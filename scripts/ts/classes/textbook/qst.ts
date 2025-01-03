import KeyAnimation from "../animation/KeyAnimation.js";
import Left from "../left/Left.js";
import { createNewTextLine } from "../message/Message.js";
import Question from "./Question.js";

export default class Qst {
    public static async getQ1(): Promise<void> {
        const truePropositions: string[] = [
            "2 + 2 等於 4",
            "水在 0°C 時會結冰",
            "地球圍繞太陽運行",
            "所有三角形的內角和等於 180°",
            "光速是最快的速度",
            "大西洋比太平洋小",
            "長方形的對角線相等",
            "所有的正整數都是非負數",
            "所有的矩形都是平行四邊形",
            "雪是由水蒸氣凝結形成的"
        ];

        const falsePropositions: string[] = [
            "1 + 1 等於 3",
            "地球是平的",
            "水在 100°C 時會結冰",
            "人類可以呼吸在月球上",
            "火車可以飛行",
            "大象能夠飛行",
            "月亮是由奶酪做的",
            "海洋是乾的"
        ];

        const randomAddition = () => {
            const num1 = Math.floor(Math.random() * 101);
            const num2 = Math.floor(Math.random() * 101);
            const correctAnswer = num1 + num2;
            const isFalse = Math.random() < 0.2;
            if (isFalse) {
                const wrongAnswer = correctAnswer + Math.floor(Math.random() * 10) + 1;
                return { text: `${num1} + ${num2} 等於 ${wrongAnswer}`, isCorrect: false };
            }
            return { text: `${num1} + ${num2} 等於 ${correctAnswer}`, isCorrect: true };
        };

        const allPropositions = [...truePropositions, ...falsePropositions, randomAddition().text];

        const propositionMapping: Record<string, boolean> = {};

        truePropositions.forEach(prop => {
            propositionMapping[prop] = true;
        });
        falsePropositions.forEach(prop => {
            propositionMapping[prop] = false;
        });

        const randomAdd = randomAddition();
        propositionMapping[randomAdd.text] = randomAdd.isCorrect;

        const randomProposition = allPropositions[Math.floor(Math.random() * allPropositions.length)];

        await KeyAnimation.setObjAnimation("請用電腦的方式回答「" + randomProposition + "」?", createNewTextLine());

        Left.append(Question.buttonF("false", !propositionMapping[randomProposition]));
        Left.append(Question.buttonF("true", propositionMapping[randomProposition]));
        KeyAnimation.setCanContinue(false);
    }
}