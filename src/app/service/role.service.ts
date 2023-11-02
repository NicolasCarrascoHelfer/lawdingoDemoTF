import { Injectable } from '@angular/core';

import { enviroment } from 'src/enviroments/enviroment';
//se agrega los imports para actualizar la variables
import { Subject } from 'rxjs';
import { Role } from '../model/role';
import { HttpClient } from '@angular/common/http';

//declaracion de una constante
const base_url = enviroment.base;
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private url = `${base_url}/roles`;
  private listaCambio = new Subject<Role[]>(); //trae la data de manera odenada

  constructor(private http: HttpClient) {}

  //metodos
  //listar
  list() {
    return this.http.get<Role[]>(this.url); //METODO GET (HTTTP)
  }
  //insertar
  insert(r: Role) {
    //alienado al backend
    return this.http.post(this.url, r); //METODO PSOT(HTTP)
  }

  //llenar variable lista cambio
  setList(listaNueva: Role[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
    //nos informa de todo lo nuevo que hay
    // a pesar de no estar conectados
  }
  listId(id: number) {
    return this.http.get<Role>(`${this.url}/${id}`);
  }
  update(r:Role) { 
    return this.http.put(this.url, r);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
