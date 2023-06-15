import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from '../lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from '../registrar-usuario/registrar-usuario.component';
import { ActualizarUsuarioComponent } from '../actualizar-usuario/actualizar-usuario.component';
import { UsuarioDetallesComponent } from '../usuario-detalles/usuario-detalles.component';

const routes: Routes =[

  {path: 'usuarios', component: ListaUsuariosComponent},
  {path:'',redirectTo:'usuarios',pathMatch:'full'},
  {path: 'registrar', component: RegistrarUsuarioComponent},
  {path: 'actualizar/:id', component: ActualizarUsuarioComponent},
  {path: 'detalles/:id', component: UsuarioDetallesComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
