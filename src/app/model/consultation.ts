import { Category } from './category';
import { Users } from './users';

export class Consultation {
  idConsultation: number = 0;
  title: String = '';
  date: Date = new Date(Date.now());
  description: String = '';
  client: Users = new Users();
  lawyer: Users = new Users();
  categories: Category = new Category();
}
