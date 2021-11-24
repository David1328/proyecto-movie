import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Discos } from '../_model/Discos';

@Injectable({
  providedIn: 'root'
})
export class AgregarDiscosService {

  private url: string = `${environment.HOST}/disco`;

  constructor(private http: HttpClient) { }

  getDiscos(){
    return this.http.get<Discos[]>(this.url +"/obtenerListaDiscos");
  }
  getDiscosPorArtista(id_artista){
    return this.http.get<Discos[]>(this.url +"/obtenerDiscosId/"+id_artista);
  }
  
}