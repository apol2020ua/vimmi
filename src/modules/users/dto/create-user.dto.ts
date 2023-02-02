import { UserInterface } from '../user.interface';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto implements UserInterface {
  @ApiProperty({ example: 'Lviv' })
  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  city: string;

  @ApiProperty({ example: 'Very Important Person' })
  @IsString()
  @IsNotEmpty()
  @Length(3, 200)
  description: string;

  @ApiProperty({ example: 'ivanov@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Ivanov Ivan' })
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  name: string;
}
