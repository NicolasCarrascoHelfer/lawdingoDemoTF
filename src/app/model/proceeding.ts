import { Court } from './court';
import { Users } from './users';

export class Proceeding {
  idProceeding: number = 0;
  name: String = '';
  state: String = '';
  court: Court = new Court();
  client: Users = new Users();
  lawyer: Users = new Users();
}
