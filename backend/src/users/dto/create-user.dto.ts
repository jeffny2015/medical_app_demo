import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserType } from '../entities/user.entity';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsEnum(UserType)
  type: UserType;
} 