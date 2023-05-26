import {Table, Column, Model } from 'sequelize-typescript';;
import {randomUUID} from "crypto";

@Table({ tableName: 'User', timestamps: false })
export class User extends Model<User> {
    @Column({ primaryKey: true })
    id: string;

    @Column
    name: string;

    @Column
    username: string;

}
