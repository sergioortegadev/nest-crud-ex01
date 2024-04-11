import { Injectable } from '@nestjs/common';

export interface User {
  id: string;
  name: string;
  phone: number;
}

@Injectable()
export class UsersService {
  private users = [
    {
      id: '1',
      name: 'Jon Doe',
      phone: 12345678,
    },
    {
      id: '2',
      name: 'Jane Doe',
      phone: 98765432,
    },
  ];
  getAllUsers() {
    return this.users;
  }
  getUser(): User {
    return this.users[0];
  }
}
