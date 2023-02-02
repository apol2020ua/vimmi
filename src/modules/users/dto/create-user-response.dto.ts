import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class CreateUserResponseDto extends CreateUserDto {
  @ApiProperty({ example: '9e046f22-cc81-4e26-8ab7-ebb97c381032' })
  _id: string;
}
