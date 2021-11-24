import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Routes, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Discos } from 'src/app/_model/Discos';
import { CompraService } from './../../_service/compra.service';
import { CancionControllerService } from './../../_service/cancion-controller.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Venta } from '../../_model/Venta';
import { Cancion } from 'src/app/_model/Cancion';
interface Producto {
  value: number;
  producto: string;
}
@Component({
  selector: 'app-fomulario-comprar-productos',
  templateUrl: './fomulario-comprar-productos.component.html',
  styleUrls: ['./fomulario-comprar-productos.component.css'],
})
export class FomularioComprarProductosComponent implements OnInit {
  public discos: Discos[];
  canciones: Cancion[];
  banderaProducto: number;
  productos: Producto[] = [
    { value: 1,  producto: 'Canciones'},
    { value: 2, producto: "CD's" },
  ];

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatTable) table: MatTable<Venta>;

  public resultadosSuscripcion: string;
  reservarForm = new FormGroup({
    pago: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private comprasProducto: CompraService, private serviceCancion:CancionControllerService) {}

  CarritoTabla: Venta[] = [];
  displayedColumns: string[] = ['Tipo De producto', 'Producto', 'Cantidad','Total','Eliminar'];
  nuevoProducto: Venta = new Venta();
  formcarrito = new FormGroup({
    cedula: new FormControl('', [
      Validators.required,
      Validators.min(99999),
      Validators.max(9999999999),
    ]),
    tipo_venta: new FormControl('', Validators.required),
    idTipo_venta: new FormControl('', Validators.required),
    cantidad: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),
  });
  async ngOnInit(): Promise<void> {
    await this.delay(2000);
    this.comprasProducto.getdiscos().subscribe((discosE: Discos[]) => {
      this.discos = discosE;
    });
    this.serviceCancion.getCanciones().subscribe((cancionesE: Cancion[]) => {
      for(var i=0;i<cancionesE.length;i++){
        if(cancionesE[i].copias_fisicas<0){
          cancionesE[i] = null;
        }
      }
      this.canciones=cancionesE;
    });
  }
  enviarAElCarrito(values) {
    this.nuevoProducto = values;
    this.comprasProducto.getTarifaCompra(this.nuevoProducto).subscribe((tarifa:Venta)=>{
      this.nuevoProducto.idTipo_venta = tarifa.idTipo_venta;
      this.nuevoProducto.ventaProducto = tarifa.ventaProducto;
      this.nuevoProducto.precioTotal = (tarifa.precioProducto * this.nuevoProducto.cantidad);
      this.CarritoTabla.push(this.nuevoProducto);
      this.table.renderRows();
    });
  }
  enviarCompra(values) {}

  eliminarDelCarrito(){

  }

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  onSelect(event) {
    this.banderaProducto = event;
  }
}
