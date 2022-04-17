import { Component, OnInit } from '@angular/core';
import { RecomendacionService } from 'src/app/_service/recomendacion.service';
import { User } from 'src/app/_model/User';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-panel-recomendacion',
  templateUrl: './panel-recomendacion.component.html',
  styleUrls: ['./panel-recomendacion.component.css']
})
export class PanelRecomendacionComponent implements OnInit {


  public listaDeRecomendadas:String[];
  usuarios= new MatTableDataSource<string>();
  displayedColumns: string[] = ['UserId','Sugerir'];

  constructor(private serviceRecomendacion:RecomendacionService) { }

  async ngOnInit(): Promise<void> {
    await this.delay(1000);
    this.serviceRecomendacion.getUsuario().subscribe(data=>{
      this.usuarios=new MatTableDataSource(data);
    })
  }

  applyFilter(event: Event) {
    console.log(event)
    const filterValue = (event.target as HTMLInputElement).value;
    this.usuarios.filter = "1";
  }  


  onSelect(value){
    console.log(value);
  }

  sugerirPelicula(id){
    this.serviceRecomendacion.getRecomendados(id).subscribe(data=>{
      this.listaDeRecomendadas = data
      console.log(data)
    })
    console.log(id)
  }
  private delay(ms:number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
