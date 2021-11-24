import { Component, OnInit } from '@angular/core';
import { Discos } from 'src/app/_model/Discos';

@Component({
  selector: 'app-report-ventas',
  templateUrl: './report-ventas.component.html',
  styleUrls: ['./report-ventas.component.css']
})
export class ReportVentasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = [
    'Tipo De Venta',
    'Producto Vendido',
    'Cantidad',
    'Descripción'
  ];
  discos: Discos[];

}
