import { Court } from './court';
import { Users } from './users';
export class Proceeding {
    //ATRIBUTOS
    idProceeding: number = 0;
    name: string = "";
    state: string = '';
    court: Court = new Court();
    client: Users = new Users();
    lawyer: Users = new Users();
  }