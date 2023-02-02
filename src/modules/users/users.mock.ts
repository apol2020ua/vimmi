import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { UserSchema } from './user.schema';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

const DEFAULT_NUM_OF_USERS = 10;

@Injectable()
export class UsersMock {
  private users: UserSchema[] = [];

  constructor() {
    for (let i = 0; i < DEFAULT_NUM_OF_USERS; i++) {
      this.users.push({
        _id: faker.datatype.uuid(),
        name: faker.internet.userName(),
        email: faker.internet.email(),
        city: faker.address.cityName(),
        description: faker.hacker.phrase(),
      });
    }
  }

  create(createDto: CreateUserDto): UserSchema {
    const newUser = {
      _id: faker.datatype.uuid(),
      ...createDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): UserSchema[] {
    return this.users;
  }

  findOneById(id: string): UserSchema | null {
    return this.users.find((user) => user._id === id) || null;
  }

  updateOneById(_id: string, updateDto: UpdateUserDto): UserSchema | null {
    const user: UserSchema | undefined = this.users.find((item) => {
      return item._id === _id ? !!Object.assign(item, updateDto) : false;
    });
    return user || null;
  }

  delete(_id: string): UserSchema[] {
    return this.users.filter((user) => user._id !== _id);
  }
}
