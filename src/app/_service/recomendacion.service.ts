import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/_model/User';

@Injectable({
  providedIn: 'root'
})
export class RecomendacionService {

  private url: string = `${environment.HOST}`;
  constructor(private http: HttpClient) { }
  public getUsuario(){
    return this.http.get<string[]>(`${this.url}usuarios`);
  }

  public getRecomendados(idUser:number){
    return this.http.get<string[]>(`${this.url}peliculasRecomendadas?UserId=`+idUser);
  }
}
