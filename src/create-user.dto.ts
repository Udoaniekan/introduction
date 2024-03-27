import { IsString, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsInt()
  @IsPositive()
  readonly age: number;

  @IsString()
  @IsNotEmpty()
  readonly gender: string;
}
