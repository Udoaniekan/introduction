import { Injectable } from '@nestjs/common';
import { User } from 'src/interface/user.interface';

@Injectable()
export class UserService {
        private readonly user: User[] = [];
      
        create(usert: User) {
          return this.user.push(usert);
        }
      
        findAllUsers(): User[] {
          return this.user;
        }
}
