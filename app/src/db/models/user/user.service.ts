import {Inject, Injectable} from "@nestjs/common";
import {userRepository} from "../../../constants";
import {User} from "./user.entity";
import {randomUUID} from "crypto";

@Injectable()
export class UserService {
    constructor(
        @Inject(userRepository)
        private userRepo: typeof User
    ) {}
    async findAll (): Promise<User[]> {
        return this.userRepo.findAll<User>()
    }
    async create(id: string, name: string, username: string): Promise<User> {
        const newUser = new User();
        newUser.id = id;
        newUser.name = name;
        newUser.username = username;
        try {
            return newUser.save();
        }
        catch (e) {
            console.log(e)
            return e
        }
    }
}
