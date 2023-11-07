import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';

//se agrega los imports para actualizar la variables
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { District } from '../model/district';

//declaracion de una constante
const base_url = enviroment.base;

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
//declaracion de varibales privadas

  //acceso al controlador
  private url = `${base_url}/districts`;
  private listaCambio = new Subject<District[]>(); //trae la data de manera odenada

  constructor(private http: HttpClient) {}

  //metodos
  //listar
  list() {
    return this.http.get<District[]>(this.url); //METODO GET (HTTTP)
  }
  //insertar
  insert(per: District) {
    //alienado al backend
    return this.http.post(this.url, per); //METODO PSOT(HTTP)
  }

  //llenar variable lista cambio
  setList(listaNueva: District[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
    //nos informa de todo lo nuevo que hay
    // a pesar de no estar conectados
  }
  listId(id: number) {
    return this.http.get<District>(`${this.url}/${id}`);
  }
  update(c:District) { 
    return this.http.put(this.url, c);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
