// import { Module } from '@nestjs/common';

// @Module({})
// export class UserModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
// import { User } from 'src/interface/user.interface';
import { User } from 'src/interface/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}