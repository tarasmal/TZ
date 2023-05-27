import {Inject, Injectable} from "@nestjs/common";
import {quizRepository, userRepository} from "../../../constants";
import {User} from "../user/user.entity";
import {randomUUID} from "crypto";
import {Quiz} from "./quiz.entity";
import {CreateQuizT} from "./types";

@Injectable()
export class QuizService {
    constructor(
        @Inject(quizRepository)
        private quizRepo: typeof Quiz
    ) {}
    async findAll (): Promise<Quiz[]> {
        return this.quizRepo.findAll<Quiz>()
    }
    async findByUserId(userId: string): Promise<Quiz[]> {
        return this.quizRepo.findAll<Quiz>({ where: { userId } });
    }

    async create(params: CreateQuizT): Promise<Quiz> {
        const newQuiz = new Quiz();
        const {answer, question, userId} = params
        newQuiz.id = randomUUID();
        newQuiz.answer = answer;
        newQuiz.question = question;
        newQuiz.userId = userId;
        return newQuiz.save();
    }
}
