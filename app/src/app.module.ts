import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import {UserModule} from "./db/models/user/user.module";
import {QuizModule} from "./db/models/quiz/quiz.module";


@Module({
  imports: [ConfigModule.forRoot(), UserModule, QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
