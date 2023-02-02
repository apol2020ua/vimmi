import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from '../utils/env.validation';
import { Environment } from '../environment';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      validate: (env) => validate(env, Environment),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
