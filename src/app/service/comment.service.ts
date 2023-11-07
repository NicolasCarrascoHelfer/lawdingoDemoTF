import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Comment } from '../model/comment';

const base_url = enviroment.base;

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private url = `${base_url}/comments`;
  private listaCambio = new Subject<Comment[]>(); //trae la data de manera odenada

  constructor(private http: HttpClient) {}
   //metodos
  //listar
  list() {
    return this.http.get<Comment[]>(this.url); //METODO GET (HTTTP)
  }
  //insertar
  insert(com: Comment) {
    //alienado al backend
    return this.http.post(this.url, com); //METODO PSOT(HTTP)
  }

  //llenar variable lista cambio
  setList(listaNueva: Comment[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
    //nos informa de todo lo nuevo que hay
    // a pesar de no estar conectados
  }
  listId(id: number) {
    return this.http.get<Comment>(`${this.url}/${id}`);
  }
  update(c: Comment) {
    return this.http.put(this.url, c);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
