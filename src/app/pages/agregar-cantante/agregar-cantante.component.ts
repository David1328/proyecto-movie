import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cantante } from 'src/app/_model/Cantante';
import { ArtistaControllerService } from 'src/app/_service/artista-controller.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-agregar-cantante',
  templateUrl: './agregar-cantante.component.html',
  styleUrls: ['./agregar-cantante.component.css']
})
export class AgregarCantanteComponent implements OnInit {
  displayedColumns: string[] = [ 'Nombre Artisco', 'Categoria', 'Editar'];
  artistas: Cantante[];
  cantante:Cantante;

  @ViewChild(MatTable) table: MatTable<Cantante>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  formAgregarCantante = new FormGroup ({
    nick_name: new FormControl('', [Validators.required,Validators.minLength(2), Validators.maxLength(20)]),
    categoria: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[a-zA-Z ]*')]),
  });


  constructor(private router: Router,
    private snackMessaange:MatSnackBar,
    private artistaSerivce: ArtistaControllerService) { }


    async ngOnInit(): Promise<void> {
      await this.delay(2000);
      this.artistaSerivce.getArtisic().subscribe((artis :Cantante[])=>{
        this.artistas = artis;
      });
    }



  agregarCantante(valor){
    this.cantante = valor;
    this.artistaSerivce.postAgregarCantante(this.cantante).subscribe(data =>{
    },(respuesta:HttpErrorResponse)=>{
      console.log(respuesta.error);
      if(respuesta.error.text != null){
        this.ngOnInit();
        this.snackMessaange.open(respuesta.error.text, 'Aceptar', {
          duration: 5000,
        });
      }else{
        this.snackMessaange.open('Ya existe este Artista', 'Aceptar', {
          duration: 5000,
        });
      }
      
    });
  }

  private delay(ms:number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
