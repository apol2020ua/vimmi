import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersMock } from './users.mock';
import { CreateUserDto } from './dto/create-user.dto';
import { faker } from '@faker-js/faker';
import { UserSchema } from './user.schema';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UsersService', () => {
  let usersService: UsersService;
  let usersMock: UsersMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, UsersMock],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    usersMock = module.get<UsersMock>(UsersMock);
  });

  describe('create', () => {
    it('should create a user', () => {
      const user: CreateUserDto = {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        city: faker.address.cityName(),
        description: faker.hacker.phrase(),
      };
      const fakeId = faker.datatype.uuid();
      const expectedResult: UserSchema = { _id: fakeId, ...user };
      jest.spyOn(usersMock, 'create').mockImplementation(() => expectedResult);
      expect(usersService.create(user)).toBe(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', () => {
      const users: UserSchema[] = [];
      for (let i = 0; i < 5; i++) {
        users.push({
          _id: faker.datatype.uuid(),
          name: faker.internet.userName(),
          email: faker.internet.email(),
          city: faker.address.cityName(),
          description: faker.hacker.phrase(),
        });
      }
      jest.spyOn(usersMock, 'findAll').mockImplementation(() => users);
      expect(usersService.findAll()).toBe(users);
    });
  });

  describe('findOne', () => {
    it('should return a user by id', () => {
      const fakeId: string = faker.datatype.uuid();
      const user: UserSchema = {
        _id: fakeId,
        name: faker.internet.userName(),
        email: faker.internet.email(),
        city: faker.address.cityName(),
        description: faker.hacker.phrase(),
      };
      jest.spyOn(usersMock, 'findOneById').mockImplementation(() => user);
      expect(usersService.findOne(fakeId)).toBe(user);
    });
  });

  describe('update', () => {
    it('should update a user by id', () => {
      const updateUserDto: UpdateUserDto = {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        city: faker.address.cityName(),
        description: faker.hacker.phrase(),
      };
      const fakeId: string = faker.datatype.uuid();
      const user: UserSchema = {
        _id: fakeId,
        name: faker.internet.userName(),
        email: faker.internet.email(),
        city: faker.address.cityName(),
        description: faker.hacker.phrase(),
      };
      jest.spyOn(usersMock, 'updateOneById').mockImplementation(() => user);
      expect(usersService.update(fakeId, updateUserDto)).toBe(user);
    });
  });
  describe('remove', () => {
    it('should remove a user by id', () => {
      const users: UserSchema[] = [];
      const total = 5;
      for (let i = 1; i < total + 1; i++) {
        users.push({
          _id: '' + i,
          name: faker.internet.userName(),
          email: faker.internet.email(),
          city: faker.address.cityName(),
          description: faker.hacker.phrase(),
        });
      }
      const expectedResult: UserSchema[] = users.slice(1);
      jest.spyOn(usersMock, 'delete').mockImplementation(() => expectedResult);
      expect(usersService.remove('1')).toBe(expectedResult);
    });
  });
});
