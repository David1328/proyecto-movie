import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cantante } from '../_model/Cantante';

@Injectable({
  providedIn: 'root'
})
export class ArtistaControllerService {

  private url: string = `${environment.HOST}/cantanteService`;

  constructor(private http: HttpClient) { }

  getArtisic(){
    return this.http.get<Cantante[]>(this.url +"/cantantes");
  }
  postAgregarCantante(nuevoCantante){
    return this.http.post<any>(this.url +"/agregarCantante",nuevoCantante);
  }
}
