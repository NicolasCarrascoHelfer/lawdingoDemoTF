import { Injectable } from '@angular/core';

import { enviroment } from 'src/enviroments/enviroment';
//se agrega los imports para actualizar la variables
import { Subject } from 'rxjs';
import { Consultation } from '../model/consultation';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//declaracion de una constante
const base_url = enviroment.base;
@Injectable({
  providedIn: 'root',
})
export class ConsultationService {
  private url = `${base_url}/consultations`;
  private listaCambio = new Subject<Consultation[]>(); //trae la data de manera odenada

  constructor(private http: HttpClient) {}

  //metodos
  //listar
  list() {
    let token = sessionStorage.getItem('token');

    return this.http.get<Consultation[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    }); //METODO GET (HTTTP)
  }
  //insertar
  insert(c: Consultation) {
    //alienado al backend
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, c, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    }); //METODO PSOT(HTTP)
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
    let token = sessionStorage.getItem('token');

    return this.http.get<Consultation>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  update(c: Consultation) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, c, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  delete(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}
