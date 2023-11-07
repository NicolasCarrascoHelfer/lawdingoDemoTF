import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Certification } from '../model/certification';
const base_url = enviroment.base;

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  private url = `${base_url}/certification`
  private listaCambio = new Subject<Certification[]>();


  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<Certification[]>(this.url); //METODO GET (HTTTP)
  }
  //insertar
  insert(per: Certification) {
    //alienado al backend
    return this.http.post(this.url, per); //METODO PSOT(HTTP)
  }

  //llenar variable lista cambio
  setList(listaNueva: Certification[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
    //nos informa de todo lo nuevo que hay
    // a pesar de no estar conectados
  }
  listId(id: number) {
    return this.http.get<Certification>(`${this.url}/${id}`);
  }
  update(c:Certification) {
    return this.http.put(this.url, c);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
