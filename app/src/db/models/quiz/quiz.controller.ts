import {Body, Controller, Get, Param, Put, Query} from "@nestjs/common";
import {QuizService} from "./quiz.service";
import {CreateQuizT} from "./types";

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) {
    }
    @Get()
    getQuizByUserId(@Query('userId') userId: string): any {
        return this.quizService.findByUserId(userId);
    }
    @Put()
    createQuiz(@Body() body: CreateQuizT): any {
        const {question, answer, userId} = body;
        return this.quizService.create({question, answer, userId});
    }

}
