import {Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'User' })
export class User extends Model<User> {
    @Column({ primaryKey: true })
    id: string;

    @Column
    name: string;

    @Column
    username: string;
}
