import { Controller, Get, Param } from "@nestjs/common";
import { User } from "src/entites";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get()
     findAll() {
        return this.userService.find();
    }

    @Get(':id')
     getUser(@Param('id') id: number) { 
        return this.userService.findOne({id}); 
    }
}