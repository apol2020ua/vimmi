import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersMock } from './users.mock';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersMock],
})
export class UsersModule {}
