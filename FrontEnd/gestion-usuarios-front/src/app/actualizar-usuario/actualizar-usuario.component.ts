import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioServiceService } from '../usuario-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  id:number;
  usuario:Usuario = new Usuario();
  constructor(private usuarioService:UsuarioServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usuarioService.obtenerUsuario(this.id).subscribe(dato =>{
      this.usuario = dato;
    },error => console.log(error));
  }

  irAlaListaDeUsuarios(){
    this.router.navigate(['/usuarios']);
    swal('Usuario actualizado',`El usuario ${this.usuario.name} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.usuarioService.actualizarUsuario(this.id,this.usuario).subscribe(dato => {
      this.irAlaListaDeUsuarios();
    },error => console.log(error));
  }

}
