import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/database/entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    async getUsers() {
        // return 111;
        return await this.usersService.getAllUsers();
    }

    @Get('list')
    async findAll(): Promise<User[]> {
        return await this.usersService.getAllUsers();
    }
}
