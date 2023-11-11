import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notification } from '../model/notification';


const base_url = enviroment.base;
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private url = `${base_url}/notification`;
  private listaCambio = new Subject<Notification[]>();

  constructor(private http:HttpClient) { }

  list() {
    let token = sessionStorage.getItem('token');

    return this.http.get<Notification[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    }); //METODO GET (HTTTP)
  }
  //insertar
  insert(n: Notification) {
    //alienado al backend
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, n, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    }); //METODO PSOT(HTTP)
  }

  //llenar variable lista cambio
  setList(listaNueva: Notification[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
    //nos informa de todo lo nuevo que hay
    // a pesar de no estar conectados
  }
  listId(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<Notification>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  update(n:Notification) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, n, {
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
