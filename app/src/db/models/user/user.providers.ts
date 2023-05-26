import {User} from "./user.entity";
import {userRepository} from "../../../constants";

export const userProviders = [
    {
        provide: userRepository,
        useValue: User
    }
]
