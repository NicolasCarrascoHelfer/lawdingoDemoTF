import { Users } from './users';

export class Notification {
  idNotification: number = 0;
  sender: Users = new Users();
  receiver: Users = new Users();
  message: String = '';
}
