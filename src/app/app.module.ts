import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BarrabusquedaComponent } from './components/barrabusqueda/barrabusqueda.component';

@NgModule({
  declarations: [AppComponent, UsuarioComponent, UsuariosComponent, BusquedaComponent, BarrabusquedaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
