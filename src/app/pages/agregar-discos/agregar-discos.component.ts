import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cantante } from 'src/app/_model/Cantante';
import { Discos } from 'src/app/_model/Discos';
import { ArtistaControllerService } from './../../_service/artista-controller.service';
import { AgregarDiscosService } from './../../_service/agregar-discos.service';

interface Formato {
  value: Number;
  tp_formato: String;
}

@Component({
  selector: 'app-agregar-discos',
  templateUrl: './agregar-discos.component.html',
  styleUrls: ['./agregar-discos.component.css'],
})
export class AgregarDiscosComponent implements OnInit {
  constructor(
    private servicioArtista: ArtistaControllerService,
    private servicioDiscos: AgregarDiscosService
  ) {}
  cantantes: Cantante[];
  displayedColumns: string[] = [
    'Nombre del disco',
    'Compañia Productora',
    'Formato',
    'Año de lanzamiento',
    'Cantidad',
    'Precio',
  ];
  formatos: Formato[] = [
    { value: 1, tp_formato: 'Fisico' },
    { value: 2, tp_formato: 'Virtual' },
  ];
  discos: Discos[];

  async ngOnInit(): Promise<void> {
    await this.delay(2000);
    this.servicioArtista.getArtisic().subscribe((cantante: Cantante[]) => {
      this.cantantes = cantante;
    });
    this.servicioDiscos.getDiscos().subscribe((disco: Discos[]) => {
      this.discos = disco;
    });
  }

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  formDiscoAgregar = new FormGroup({
    nombre_disco: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    compania_productora: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    ano_lanzamiento: new FormControl('', [
      Validators.required,
      Validators.min(1860),
      Validators.max(2021),
    ]),
    cantidad_discos: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(300),
    ]),
    precio: new FormControl('', [
      Validators.required,
      Validators.min(1000),
      Validators.max(100000),
    ]),
    formato: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(3),
    ]),
    artista: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(200),
    ]),
  });

  /**
        "nombre_disco": "hola",
        "compania_productora": "nose",
        "formato": "fisico",
        "ano_lanzamiento": "2021",
        "cantidad_discos": 2,
        "precio": null
   */

  agregarDisco(values) {
    
  }
}
