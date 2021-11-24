import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { UsuarioAdmin } from '../_model/UsuarioAdmin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = `${environment.HOST}/login`;

  constructor(private http: HttpClient) { }

  getToken(usuarioLogin:UsuarioAdmin){
    return this.http.post<any>(this.url +"/token",usuarioLogin);
  }
}
