import { Users } from './users';

export class Comment {
  idComment: number = 0;
  client: Users = new Users();
  lawyer: Users = new Users();
  description: String = '';
  score: number = 0;
}
