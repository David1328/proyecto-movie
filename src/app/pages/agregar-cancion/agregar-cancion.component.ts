import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Cancion } from 'src/app/_model/Cancion';
import { Cantante } from 'src/app/_model/Cantante';
import { Discos } from 'src/app/_model/Discos';
import { LoginService } from 'src/app/_service/login.service';
import { AgregarDiscosService } from 'src/app/_service/agregar-discos.service';
import { ArtistaControllerService } from 'src/app/_service/artista-controller.service';
import { CancionControllerService } from 'src/app/_service/cancion-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-agregar-cancion',
  templateUrl: './agregar-cancion.component.html',
  styleUrls: ['./agregar-cancion.component.css']
})
export class AgregarCancionComponent implements OnInit {

  constructor(private serviceDisco:AgregarDiscosService,
    private serviceCantante:ArtistaControllerService,
    private servicioCancion:CancionControllerService,
    private snackMessaange:MatSnackBar,) { }

  formCancionAgregar = new FormGroup({
    nombre:new  FormControl('',[
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10)
  ]),
    artista_productor: new FormControl('',[
      Validators.required
    ]),
    artistas_secundarios:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    copias_fisicas:new FormControl('',[
      Validators.required,
      Validators.min(1),
      Validators.max(300)
    ]),
    precio:new FormControl('',[
      Validators.required,
      Validators.min(1000),
      Validators.max(100000)
    ]),
    id_album:new FormControl('',Validators.required)
  });

  cantanteDiscos:Discos[];
  cantantes:Cantante[];
  cancionesTabla:Cancion[]=[];
  cancionNueva:Cancion=new Cancion;
  displayedColumns: string[] = [ 'NombreCancion', 'NombreProductor', 'CopiasFisicas', 'Precio'];
  @ViewChild(MatTable) table: MatTable<Cancion>;
  
  async ngOnInit(): Promise<void> {
    await this.delay(2000);
    this.serviceCantante.getArtisic().subscribe((artistas:Cantante[])=>(this.cantantes=artistas));
    this.servicioCancion.getCanciones().subscribe((canciones:Cancion[])=>(this.cancionesTabla=canciones));
  }


  artistasDiscos(){

  }

  agregarCancion(values){
    this.cancionNueva = values;
    this.servicioCancion.postAgregarCancion(this.cancionNueva).subscribe(respuesta=>{
    },(respuesta:HttpErrorResponse)=>{
      console.log(respuesta.error);
      if(respuesta.error.text != null){
        this.ngOnInit();
        this.snackMessaange.open(respuesta.error.text, 'Aceptar', {
          duration: 5000,
        });
      }else{
        this.snackMessaange.open("Ya existe esa cancion", 'Aceptar', {
          duration: 5000,
        });
      }
      
    }
    );

  }
  private delay(ms:number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  onSelect(value){
    this.serviceDisco.getDiscosPorArtista(value).subscribe((discos:Discos[])=>(this.cantanteDiscos=discos));
  }
}
