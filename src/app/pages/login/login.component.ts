import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Routes, Router } from '@angular/router';
import { UsuarioAdmin } from 'src/app/_model/UsuarioAdmin';
import { LoginService } from 'src/app/_service/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,
    private servicioLogin:LoginService) {}


    usuarioALogear:UsuarioAdmin = new UsuarioAdmin();
  ngOnInit(): void {}

  formIngreso = new FormGroup({
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
      Validators.pattern(/[A-Za-z]/),
    ]),
    contrasena: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
    ]),
  });

  ingresar(values) {
    this.usuarioALogear = values;
    this.servicioLogin.getToken(this.usuarioALogear).subscribe(data=>{
      console.log(data);
      sessionStorage.setItem(environment.TOKEN, data.token);
      if(sessionStorage.getItem(environment.TOKEN) != null){
        this.router.navigate(['adminInterfaz']);
      }else{

      }
    });
    //this.router.navigate(['adminInterfaz']);
  }
}
