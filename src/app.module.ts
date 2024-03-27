import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'introduction',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}


// import { Module } from '@nestjs/common';
// import { UserService } from './user/user.service';
// import { UserController } from './user/user.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserModule } from './user/user.module';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: '',
//       database: 'introduction',
//       entities: [],
//       synchronize: true,
//     }),
//     UserModule,
//   ],
//   controllers: [UserController],
//   providers: [UserService],
// })
// export class AppModule {}
