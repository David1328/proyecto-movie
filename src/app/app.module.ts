import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from '././material/material.module';
import { FomularioComprarProductosComponent } from './pages/fomulario-comprar-productos/fomulario-comprar-productos.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InterfazAdministradorComponent } from './pages/interfaz-administrador/interfaz-administrador.component';
import { AgregarDiscosComponent } from './pages/agregar-discos/agregar-discos.component';
import { AgregarCantanteComponent } from './pages/agregar-cantante/agregar-cantante.component';
import { AgregarCancionComponent } from './pages/agregar-cancion/agregar-cancion.component';
import { ReportVentasComponent } from './pages/report-ventas/report-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    FomularioComprarProductosComponent,
    InterfazAdministradorComponent,
    AgregarDiscosComponent,
    AgregarCantanteComponent,
    AgregarCancionComponent,
    ReportVentasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
