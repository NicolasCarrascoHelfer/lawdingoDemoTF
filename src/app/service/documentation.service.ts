import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Documentation } from '../model/documentation';

const base_url = enviroment.base;

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {

  //acceso al controlador
  private url = `${base_url}/documentations`;
  private listaCambio = new Subject<Documentation[]>(); //trae la data de manera odenada

  constructor(private http: HttpClient) {}

  //metodos
  //listar
  list() {
    return this.http.get<Documentation[]>(this.url); //METODO GET (HTTTP)
  }
  //insertar
  insert(doc: Documentation) {
    //alienado al backend
    return this.http.post(this.url, doc); //METODO PSOT(HTTP)
  }

  //llenar variable lista cambio
  setList(listaNueva: Documentation[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
    //nos informa de todo lo nuevo que hay
    // a pesar de no estar conectados
  }
  listId(id: number) {
    return this.http.get<Documentation>(`${this.url}/${id}`);
  }
  update(d:Documentation) { 
    return this.http.put(this.url, d);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
