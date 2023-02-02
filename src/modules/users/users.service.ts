import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersMock } from './users.mock';
import { UserSchema } from './user.schema';
import { CreateUserResponseDto } from './dto/create-user-response.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersMock: UsersMock) {}

  create(createUserDto: CreateUserDto): CreateUserResponseDto {
    return this.usersMock.create(createUserDto);
  }

  findAll(): UserSchema[] {
    return this.usersMock.findAll();
  }

  findOne(id: string): UserSchema {
    return this.usersMock.findOneById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto): UserSchema {
    return this.usersMock.updateOneById(id, updateUserDto);
  }

  remove(id: string): UserSchema[] {
    return this.usersMock.delete(id);
  }
}
