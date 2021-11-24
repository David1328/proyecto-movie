import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Discos } from '../_model/Discos';
import { Venta } from '../_model/Venta';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private url: string = `${environment.HOST}`;

  constructor(private http: HttpClient) { }

  getdiscos(){
    return this.http.get<Discos[]>(this.url +"/disco/obtenerListaDiscos");
  }

  postConfirmarCompra(venta:Venta){
    return this.http.post<any>(this.url+"agregarVenta",venta);
  }

  getTarifaCompra(venta:Venta){
    return this.http.get<Venta>(this.url +"/venta/obtenerTarifaCompra/"+venta.tipo_venta+"/"+venta.idTipo_venta);
  }
}
