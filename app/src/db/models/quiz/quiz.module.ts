import {Module} from "@nestjs/common";
import {DatabaseModule} from "../../../db.module";
import {QuizService} from "./quiz.service";
import {quizProviders} from "./quiz.providers";
import {QuizController} from "./quiz.controller";

@Module({
    imports: [DatabaseModule],
    providers: [QuizService, ...quizProviders],
    controllers: [QuizController]
})
export class QuizModule {}
