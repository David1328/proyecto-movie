import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarCancionComponent } from './pages/agregar-cancion/agregar-cancion.component';
import { AgregarCantanteComponent } from './pages/agregar-cantante/agregar-cantante.component';
import { AgregarDiscosComponent } from './pages/agregar-discos/agregar-discos.component';
import { FomularioComprarProductosComponent } from './pages/fomulario-comprar-productos/fomulario-comprar-productos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InterfazAdministradorComponent } from './pages/interfaz-administrador/interfaz-administrador.component';
import { LoginComponent } from './pages/login/login.component';
import { ReportVentasComponent } from './pages/report-ventas/report-ventas.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'fomularioDeCompras', component: FomularioComprarProductosComponent},
  {path: 'adminInterfaz', component: InterfazAdministradorComponent},
  {path: 'agregarDisco', component: AgregarDiscosComponent},
  {path: 'agregarCantante', component: AgregarCantanteComponent},
  {path: 'agregarCancion', component: AgregarCancionComponent},
  {path: 'reporteVentas', component: ReportVentasComponent},
  {path: '', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
