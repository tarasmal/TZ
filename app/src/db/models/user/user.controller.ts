import {Body, Controller, Get, Post, Put} from "@nestjs/common";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }
    @Get()
    getUsers(): any {
        return this.userService.findAll()
    }
    @Put()
    createUser(@Body() body: { name: string; username: string }): any {
        const { name, username } = body;
        return this.userService.create(name, username);
    }

}
