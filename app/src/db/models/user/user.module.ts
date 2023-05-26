import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../db.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {userProviders} from "./user.providers";

@Module({
    imports: [DatabaseModule],
    providers: [UserService, ...userProviders],
    controllers: [UserController],
})
export class UserModule {}
