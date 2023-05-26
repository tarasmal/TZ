import {Inject, Injectable} from "@nestjs/common";
import {userRepository} from "../../constants";
import {User} from "./user.entity";

@Injectable()
export class UserService {
    constructor(
        @Inject(userRepository)
        private userRepo: typeof User
    ) {}
    async findAll (): Promise<User[]> {
        return this.userRepo.findAll<User>()
    }
}
