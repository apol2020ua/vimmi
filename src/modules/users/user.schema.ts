import { UserInterface } from './user.interface';

export class UserSchema implements UserInterface {
  _id: string;

  name: string;

  email: string;

  city: string;

  description: string;
}
