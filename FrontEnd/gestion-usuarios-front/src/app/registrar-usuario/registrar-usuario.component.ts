import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioServiceService } from '../usuario-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as CryptoJS from 'crypto-js';
import { element } from 'protractor';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  public previsualizacion: string;
  public archivos: any = []

  usuario: Usuario = new Usuario();
  constructor(private usuarioService:UsuarioServiceService,private router:Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {

  }

  capturarFile(event): any {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);

    })
    this.archivos.push(archivoCapturado)
    //
    // console.log(event.target.files);

  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })


  /**
   * Limpiar imagen
   */

  clearImage(): any {
    this.previsualizacion = '';
    this.archivos = [];
  }

  guardarUsuario(){

    const password = this.usuario.password;
    const secretKey = 'mi_clave_secreta';

    const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    this.usuario["password"]=encryptedPassword;

    if (this.archivos) {
      this.usuario["image"]=this.archivos.find(element => element = 1)
      console.log(this.usuario);
    }



    this.usuarioService.guardarUsuario(this.usuario).subscribe(dato =>{
      console.log("hey");
      this.irAListaUsuario();
    }, error => console.log(error));
  }

  irAListaUsuario(){
    this.router.navigate(['/usuarios']);
  }
  onSubmit(){
    this.guardarUsuario();

  }

}
