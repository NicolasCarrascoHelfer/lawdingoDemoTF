import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Court } from '../model/court';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    //return this.http.get<Documentation[]>(this.url); //METODO GET (HTTTP)
    let token = sessionStorage.getItem('token');

    return this.http.get<Court[]>(this.url,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    }); //METODO GET (HTTTP)
  }
  //insertar
  insert(cou: Court) {
    //alienado al backend
    //return this.http.post(this.url, doc); //METODO PSOT(HTTP)
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, cou, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    }); //METODO PSOT(HTTP)
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
    //return this.http.get<Documentation>(`${this.url}/${id}`);
    let token = sessionStorage.getItem('token');

    return this.http.get<Court>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  update(c:Court) { 
    //return this.http.put(this.url, d);
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, c, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  delete(id: number) {
    //return this.http.delete(`${this.url}/${id}`);
    let token = sessionStorage.getItem('token');

    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}
