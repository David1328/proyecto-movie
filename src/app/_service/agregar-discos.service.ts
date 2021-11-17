import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Discos } from '../_model/Discos';

@Injectable({
  providedIn: 'root'
})
export class AgregarDiscosService {

  private url: string = `${environment.HOST}/discoService`;

  constructor(private http: HttpClient) { }

  getDiscos(){
    return this.http.get<Discos[]>(this.url +"/obtenerListaDiscos");
  }
  
}