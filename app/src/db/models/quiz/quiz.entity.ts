import {Table, Column, Model, BelongsTo, ForeignKey} from 'sequelize-typescript';
import {User} from "../user/user.entity";


@Table({ tableName: 'Quiz', timestamps: false })
export class Quiz extends Model<Quiz> {
    @Column({ primaryKey: true })
    id: string;

    @Column
    question: string;

    @Column
    answer: string;

    @ForeignKey(() => User)
    @Column
    userId: string;

    @BelongsTo(() => User)
    user: User;
}


