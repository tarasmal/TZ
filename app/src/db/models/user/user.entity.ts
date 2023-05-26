import {Table, Column, Model, HasMany} from 'sequelize-typescript';
import {Quiz} from "../quiz/quiz.entity";

@Table({ tableName: 'User', timestamps: false })
export class User extends Model<User> {
    @Column({ primaryKey: true })
    id: string;

    @Column
    name: string;

    @Column
    username: string;
    @HasMany(() => Quiz)
    quizzes: Quiz[];

}
