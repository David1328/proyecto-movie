import { Component, OnInit, ViewChild } from '@angular/core';
import { RecomendacionService } from 'src/app/_service/recomendacion.service';
import { User } from 'src/app/_model/User';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-panel-recomendacion',
  templateUrl: './panel-recomendacion.component.html',
  styleUrls: ['./panel-recomendacion.component.css']
})
export class PanelRecomendacionComponent implements OnInit {


  public listaDeRecomendadas:String[];
  usuarios= new MatTableDataSource<string>();
  displayedColumns: string[] = ['UserId','Sugerir'];


  @ViewChild(MatSort) sort: MatSort; 
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private serviceRecomendacion:RecomendacionService) { }

  async ngOnInit(): Promise<void> {
    await this.delay(1000);
    this.serviceRecomendacion.getUsuario().subscribe(data=>{
      this.usuarios=new MatTableDataSource(data);
      this.usuarios.sort = this.sort;
      this.usuarios.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.usuarios.filter = filterValue.trim().toLowerCase();

    if (this.usuarios.paginator) {
      this.usuarios.paginator.firstPage();
    }
  }


  onSelect(value){
    console.log(value);
  }

  sugerirPelicula(id){
    this.serviceRecomendacion.getRecomendados(id).subscribe(data=>{
      data.splice(0,1);
      this.listaDeRecomendadas = data
    },err=>{
      this.sugerirPelicula(id);
    })
  }
  private delay(ms:number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
