import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioServiceService } from '../usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios:Usuario[];

  constructor(private usuarioServicio:UsuarioServiceService, private router:Router) { }

  ngOnInit() {
   this.obtenerUsuarios();
  }

  actualizarUsuario(id:number){
    this.router.navigate(['actualizar',id]);
  }

  eliminarUsuario(id:number){
    this.usuarioServicio.eliminarUsuario(id).subscribe(dato =>{
      console.log(dato);
      this.obtenerUsuarios();
    });
  }

  private obtenerUsuarios(){
    this.usuarioServicio.obtenerListaDeEmpleados().subscribe(dato =>{
      this.usuarios=dato;
    });
  }

  verDetalles(id:number){
    this.router.navigate(['detalles',id]);
  }

}
