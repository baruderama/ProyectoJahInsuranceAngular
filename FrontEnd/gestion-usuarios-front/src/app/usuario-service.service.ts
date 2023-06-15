import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioServiceService {

  //Esta URL obtiene todos los usuarios
  private baseUrl ="http://localhost:9000/api/v1/user";

  constructor(private httpclient : HttpClient) {


  }
  // esto es para obtener usuarios
  obtenerListaDeEmpleados():Observable<Usuario[]>{
    return this.httpclient.get<Usuario[]>(`${this.baseUrl}`);
  }

  //metodo para guardar
  guardarUsuario(usuario:Usuario):Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`,usuario);

  }

  //para buscar un usuario
  obtenerUsuario(id:number):Observable<Usuario>{
    return this.httpclient.get<Usuario>(`${this.baseUrl}/${id}`);
  }

  //actualizar usuario
  actualizarUsuario(id:number,usuario:Usuario):Observable<Object>{
    return this.httpclient.put(`${this.baseUrl}/${id}`,usuario);
  }

  //Eliminar un usuario
  eliminarUsuario(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl}/${id}`);
  }

}
