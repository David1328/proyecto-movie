import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  formIngreso = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.minLength(4), Validators.maxLength(20), Validators.pattern(/[A-Za-z]/)]),
    userpassword: new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(10)]),

  });

  ingresar(){
    this.router.navigate(['adminInterfaz']);
  }

}
