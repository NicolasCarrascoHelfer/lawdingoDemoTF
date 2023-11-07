import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Proceeding } from '../model/proceeding';

const base_url = enviroment.base;

@Injectable({
  providedIn: 'root',
})
export class ProceedingService {
  //declaracion de varibales privadas

  //acceso al controlador
  private url = `${base_url}/proceedings`;
  private listaCambio = new Subject<Proceeding[]>(); //trae la data de manera odenada

  constructor(private http: HttpClient) {}

  
  //metodos
  //listar
  list() {
    return this.http.get<Proceeding[]>(this.url); //METODO GET (HTTTP)
  }
  //insertar
  insert(per: Proceeding) {
    //alienado al backend
    return this.http.post(this.url, per); //METODO PSOT(HTTP)
  }

  //llenar variable lista cambio
  setList(listaNueva: Proceeding[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
    //nos informa de todo lo nuevo que hay
    // a pesar de no estar conectados
  }
  listId(id: number) {
    return this.http.get<Proceeding>(`${this.url}/${id}`);
  }
  update(c:Proceeding) { 
    return this.http.put(this.url, c);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
