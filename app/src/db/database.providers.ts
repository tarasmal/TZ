import { Sequelize } from 'sequelize-typescript';
import { User } from "./models/user/user.entity";
import { Quiz } from "./models/quiz/quiz.entity";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: process.env.DATABASE_HOST || 'localhost',
                port: parseInt(process.env.DATABASE_PORT) || 3306,
                username: process.env.DATABASE_USERNAME || 'user',
                password: process.env.DATABASE_PASSWORD || 'password',
                database: process.env.DATABASE_NAME || 'db',
            });
            sequelize.addModels([User, Quiz]);
            await sequelize.sync();
            return sequelize;
        },
    },
];

