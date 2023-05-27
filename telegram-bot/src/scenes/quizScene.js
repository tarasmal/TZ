import { Scenes } from "telegraf";
import { quizSceneId } from "../constants/general.js";
import { enterQuiz, negative, positive } from "../views/enterQuiz.js";
import { createAnswer } from "../api.js";

const quizScene = new Scenes.BaseScene(quizSceneId);
let currentQuestionIndex = -1;

const questions = [
    "Який ваш улюблений колір?",
    "Як вас звати?",
    "Яка ваша улюблена книга?",
];

function sendNextQuestion(ctx) {
    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        ctx.reply("Дякуємо за участь у опитуванні!");
        quizScene.leave();
    } else {
        const question = questions[currentQuestionIndex];
        ctx.reply(question);
    }
}

quizScene.enter((ctx) => {
    ctx.reply("Розпочнемо опитування?", enterQuiz);
});

quizScene.action(positive, (ctx) => {
    sendNextQuestion(ctx);
});

quizScene.action(negative, (ctx) => {
    ctx.reply(":(");
    quizScene.leave();
});

quizScene.on("text", async (ctx) => {
    const answer = ctx.message.text;
    const { id } = ctx.message.from;
    console.log(answer);
    await createAnswer(id, questions[currentQuestionIndex], answer);
    sendNextQuestion(ctx);
});

export default quizScene;
