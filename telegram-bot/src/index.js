import {Scenes, session, Telegraf} from "telegraf";
import dotenv from 'dotenv';
import quizScene from "./scenes/quizScene.js";
import {quizSceneId} from "./constants/general.js";
import {userApi} from "./api.js";
import {onStartCreateUser} from "./helpers.js";

dotenv.config();

const stage = new Scenes.Stage([quizScene]);
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use(session());
bot.use(stage.middleware());
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
bot.start(async ctx => {
    const {first_name, username, id} = ctx.message.from;
    await delay(5000);
    onStartCreateUser(ctx, {id, first_name, username}).
    then((_) => ctx.scene.enter(quizSceneId));

})

bot.launch()
