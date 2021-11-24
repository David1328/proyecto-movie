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

@Component({
  selector: 'app-agregar-cancion',
  templateUrl: './agregar-cancion.component.html',
  styleUrls: ['./agregar-cancion.component.css']
})
export class AgregarCancionComponent implements OnInit {

  constructor(private serviceDisco:AgregarDiscosService,
    private serviceCantante:ArtistaControllerService,
    private servicioCancion:CancionControllerService) { }

  formCancionAgregar = new FormGroup({
    nombre:new  FormControl('',Validators.required),
    artista_productor: new FormControl('',Validators.required),
    artistas_secundarios:new FormControl('',Validators.required),
    id_album:new FormControl('',Validators.required),
    copias_fisicas:new FormControl('',Validators.required),
    precio:new FormControl('',Validators.required)
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
      this.ngOnInit();
      this.table.renderRows();
    });

  }
  private delay(ms:number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  onSelect(value){
    this.serviceDisco.getDiscosPorArtista(value).subscribe((discos:Discos[])=>(this.cantanteDiscos=discos));
  }
}
