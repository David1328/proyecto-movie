import { Injectable } from '@angular/core';
import { Cancion } from '../_model/Cancion';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CancionControllerService {

  private url: string = `${environment.HOST}/cancion`;

  constructor(private http: HttpClient) { }

  getCanciones(){
    return this.http.get<Cancion[]>(this.url +"/listarCanciones");
  }
  postAgregarCancion(cancionNueva:Cancion){
    return this.http.post<any>(this.url +"/agregarCancion",cancionNueva);
  }
}
