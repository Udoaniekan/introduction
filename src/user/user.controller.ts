import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userservice: UserService) {}

  @Post('create-user')
  async createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
   return await this.userservice.create(createUserDto);
  }

  @Get('get-allusers')
  async findAll() {
    return await this.userservice.findAllUsers();
  }
}
