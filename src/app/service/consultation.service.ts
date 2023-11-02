import { Injectable } from '@angular/core';

import { enviroment } from 'src/enviroments/enviroment';
//se agrega los imports para actualizar la variables
import { Subject } from 'rxjs';
import { Consultation } from '../model/consultation';
import { HttpClient } from '@angular/common/http';

//declaracion de una constante
const base_url = enviroment.base;
@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  private url = `${base_url}/consultations`;
  private listaCambio = new Subject<Consultation[]>(); //trae la data de manera odenada

  constructor(private http: HttpClient) {}

  //metodos
  //listar
  list() {
    return this.http.get<Consultation[]>(this.url); //METODO GET (HTTTP)
  }
  //insertar
  insert(c: Consultation) {
    //alienado al backend
    return this.http.post(this.url, c); //METODO PSOT(HTTP)
  }

  //llenar variable lista cambio
  setList(listaNueva: Consultation[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
    //nos informa de todo lo nuevo que hay
    // a pesar de no estar conectados
  }
  listId(id: number) {
    return this.http.get<Consultation>(`${this.url}/${id}`);
  }
  update(c:Consultation) { 
    return this.http.put(this.url, c);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
