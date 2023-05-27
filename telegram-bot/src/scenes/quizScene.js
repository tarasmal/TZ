import {Scenes} from "telegraf";
import {quizSceneId} from "../constants/general.js";
import {enterQuiz, negative, positive} from "../views/enterQuiz.js";

const quizScene = new Scenes.BaseScene(quizSceneId)
let currentQuestionIndex = 0;

const questions = [
    "Яке ваше улюблене кольор?",
    "Яке ваше улюблене тварина?",
    "Яка ваша улюблена їжа?"
];
function sendNextQuestion(ctx) {
    const question = questions[currentQuestionIndex];
    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex === questions.length + 1) {
        ctx.reply("Дякуємо за участь у опитуванні!");
        quizScene.leave();
    } else {
        currentQuestionIndex = nextQuestionIndex;
        ctx.reply(question);
    }
}
quizScene.enter((ctx) => {
    ctx.reply('Розпочнемо опитування?', enterQuiz)
})


quizScene.action(positive, (ctx) => {
    ctx.reply('Чудово, розпочнемо!')
    sendNextQuestion(ctx);
})

quizScene.action(negative, (ctx) => {
    ctx.reply(':(')
    quizScene.leave()
})
quizScene.on("text", (ctx) => {
    const answer = ctx.message.text;
    console.log(answer)
    // Тут ви можете зберігати або обробляти відповіді користувача
    sendNextQuestion(ctx);
});
export default quizScene
