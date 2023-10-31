import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';
import{Observable, Subject} from 'rxjs'
import { Users } from '../model/users';
import{HttpClient} from '@angular/common/http'

const base_url=enviroment.base
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url=`${base_url}/users`
  private listaCambio=new Subject<Users[]>()

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Users[]>(this.url);
  }
  insert(p:Users){
    return this.http.post(this.url,p);
  }
  setList(listaNueva: Users[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Users>(`${this.url}/${id}`);
  }
  update(c:Users) { 
    return this.http.put(this.url, c);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
