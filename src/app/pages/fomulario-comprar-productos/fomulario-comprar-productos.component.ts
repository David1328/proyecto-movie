import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Routes, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Discos } from 'src/app/_model/Discos';
import { CompraService } from './../../_service/compra.service';
import { MatTableDataSource } from '@angular/material/table';

interface Producto {
  value: number;
  producto: string;
}
interface CancionesAxiliar {
  value: number;
  cancion: string;
}

@Component({
  selector: 'app-fomulario-comprar-productos',
  templateUrl: './fomulario-comprar-productos.component.html',
  styleUrls: ['./fomulario-comprar-productos.component.css']
})
export class FomularioComprarProductosComponent implements OnInit {


  public discos: Discos[];
  banderaProducto:number;
  productos: Producto[] = [
    {value:1 , producto: "CD's"},
    {value:2 , producto:"Canciones"},
  ];
  canciones: Producto[] = [
    {value:1 , producto: "cancion1"},
    {value:2 , producto: "cancion2"},
    {value:3 , producto: "cancion3"},
    {value:4 , producto: "cancion4"},
  ]
  

  @ViewChild(MatSort) sort: MatSort;
   
  
   public  resultadosSuscripcion:string;
  reservarForm= new FormGroup({
    pago: new FormControl('',Validators.required),
  });

  constructor(
    private router: Router,
    private comprasProducto: CompraService) { 
     }

     formcarrito= new FormGroup({
      cedula: new FormControl('',[Validators.required, Validators.min(99999), Validators.max(9999999999)]),
      producto : new FormControl('',Validators.required),
      productoSelect : new FormControl('',Validators.required),
      cantidad: new FormControl('',[Validators.required, Validators.min(1), Validators.max(10)]),
    });

  async ngOnInit(): Promise<void> {
    await this.delay(2000);
    this.comprasProducto.getdiscos().subscribe((discosE :Discos[])=>{
      this.discos = discosE;
    });
  }
  enviarAElCarrito(values){
   
  }
  enviarCompra(values){

  }
  
  private delay(ms:number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  onSelect(event){
    this.banderaProducto=event;
  }
}
