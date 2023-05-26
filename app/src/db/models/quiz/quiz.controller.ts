import {Body, Controller, Get, Put} from "@nestjs/common";
import {QuizService} from "./quiz.service";
import {CreateQuizT} from "./types";

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) {
    }
    @Get()
    getQuizzes(): any {
        return this.quizService.findAll();
    }
    @Put()
    createQuiz(@Body() body: CreateQuizT): any {
        const {question, answer, userId} = body
        return this.quizService.create({question, answer, userId})
    }
}
