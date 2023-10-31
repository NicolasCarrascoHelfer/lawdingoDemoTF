import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';

//se agrega los imports para actualizar la variables
import { Subject } from 'rxjs';
import { Category } from '../model/category';
import { HttpClient } from '@angular/common/http';

//declaracion de una constante
const base_url = enviroment.base;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //declaracion de varibales privadas

  //acceso al controlador
  private url = `${base_url}/categories`;
  private listaCambio = new Subject<Category[]>(); //trae la data de manera odenada

  constructor(private http: HttpClient) {}

  //metodos
  //listar
  list() {
    return this.http.get<Category[]>(this.url); //METODO GET (HTTTP)
  }
  //insertar
  insert(per: Category) {
    //alienado al backend
    return this.http.post(this.url, per); //METODO PSOT(HTTP)
  }

  //llenar variable lista cambio
  setList(listaNueva: Category[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
    //nos informa de todo lo nuevo que hay
    // a pesar de no estar conectados
  }
  listId(id: number) {
    return this.http.get<Category>(`${this.url}/${id}`);
  }
  update(c:Category) { 
    return this.http.put(this.url, c);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
