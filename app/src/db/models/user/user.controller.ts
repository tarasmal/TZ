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
    createUser(@Body() body: { id: string, name: string; username: string }): any {
        const {id, name, username } = body;
        return this.userService.create(id, name, username);
    }

}
