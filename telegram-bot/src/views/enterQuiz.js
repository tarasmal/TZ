import {Markup} from "telegraf";
export const positive = 'enterQuiz'
export const negative = 'declineQuiz'

const enterQuizButton = Markup.button.callback("Так", positive);
const declineButton = Markup.button.callback("Ні", negative);
export const enterQuiz = Markup.inlineKeyboard([
    [enterQuizButton],
    [declineButton]
])
