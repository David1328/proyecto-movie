import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelRecomendacionComponent } from './pages/panel-recomendacion/panel-recomendacion.component';


const routes: Routes = [
  {path: '', component: PanelRecomendacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
