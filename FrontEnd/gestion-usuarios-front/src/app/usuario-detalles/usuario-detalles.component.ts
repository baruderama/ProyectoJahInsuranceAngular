import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioServiceService } from '../usuario-service.service';

@Component({
  selector: 'app-usuario-detalles',
  templateUrl: './usuario-detalles.component.html',
  styleUrls: ['./usuario-detalles.component.css']
})
export class UsuarioDetallesComponent implements OnInit {

  id:number;
  usuario:Usuario;
  constructor(private route:ActivatedRoute,private usuarioService:UsuarioServiceService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.usuario=new Usuario();
    this.usuarioService.obtenerUsuario(this.id).subscribe(dato =>{
      this.usuario =dato;
    });

}
}
