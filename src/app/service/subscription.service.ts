import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';

//se agrega los imports para actualizar la variables
import{ Subject} from 'rxjs'
import { Subscription } from '../model/subscription';
import{HttpClient} from '@angular/common/http'

//declaracion de una constante
const base_url=enviroment.base
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private url=`${base_url}/subscription`;
  private listaCambio=new Subject<Subscription[]>(); //trae la data de manera odenada

  constructor(private http:HttpClient) { }

    //metodos

  //listar
  list(){
    return this.http.get<Subscription[]>(this.url);
  }
  //insertar
  insert(s: Subscription){
    //alineado al backend
    return this.http.post(this.url, s); 
  }

   //llenar variable lista cambio
  setList(listaNueva: Subscription[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
    
  }
  listId(id: number) {
    return this.http.get<Subscription>(`${this.url}/${id}`);
  }
  update(s: Subscription) { 
    return this.http.put(this.url, s);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
