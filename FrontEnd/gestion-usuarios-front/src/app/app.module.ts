import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
//import {AppRoutingModule} from './app-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import {HttpClientModule}from '@angular/common/http';
import { UsuarioServiceService } from './usuario-service.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { FormsModule } from '@angular/forms';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { UsuarioDetallesComponent } from './usuario-detalles/usuario-detalles.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    RegistrarUsuarioComponent,
    ActualizarUsuarioComponent,
    UsuarioDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [UsuarioServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
