import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Court } from '../model/court';
import { HttpClient } from '@angular/common/http';

const base_url = enviroment.base;

@Injectable({
  providedIn: 'root'
})
export class CourtService {
  private url = `${base_url}/courts`;
  private listaCambio = new Subject<Court[]>(); //trae la data de manera odenada

  constructor(private http: HttpClient) {}

  //metodos
  //listar
  list() {
    return this.http.get<Court[]>(this.url); //METODO GET (HTTTP)
  }
  //insertar
  insert(cou: Court) {
    //alienado al backend
    return this.http.post(this.url, cou); //METODO PSOT(HTTP)
  }

  //llenar variable lista cambio
  setList(listaNueva: Court[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
    //nos informa de todo lo nuevo que hay
    // a pesar de no estar conectados
  }
  listId(id: number) {
    return this.http.get<Court>(`${this.url}/${id}`);
  }
  update(c:Court) { 
    return this.http.put(this.url, c);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
