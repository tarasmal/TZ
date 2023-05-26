import {quizRepository} from "../../../constants";
import {Quiz} from "./quiz.entity";

export const quizProviders = [
    {
        provide: quizRepository,
        useValue: Quiz
    }
]
