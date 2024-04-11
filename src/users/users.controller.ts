import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private usersServices: UsersService) {}
  @Get('/users')
  getAllUsers() {
    return this.usersServices.getAllUsers();
  }
  @Get('/user')
  getUser() {
    return this.usersServices.getUser();
  }
}
