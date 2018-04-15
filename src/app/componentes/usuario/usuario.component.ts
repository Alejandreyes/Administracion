import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../modelos/usuario.model';
import { UsuarioService } from '../../servicios/usuario.service';
import { LoginService } from '../../servicios/login.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[];
  usuarioLogueado : Usuario ; 
  constructor(public usuarioSV: UsuarioService, public lgServ : LoginService) {
    /* Cargamos la vista de todos los usuarios 
     * lo primero que se debe hacer es cargar el objeto AngularFireList<Usuario> que es conseguido en 
     * El servicio de usuario 
     * Despues una captura instantanea en el momento de los datos Esto se debe hacer porque Firebase es una base de datos en tiempo real
     * el metodo subscribe sirve para agregar un observador para capturar el momento en el que los datos se modifiquen
     *  
     *  
     */
   /* usuarioSV.getUsuarios().snapshotChanges().subscribe(item => {
      this.usuarios = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.usuarios.push(x as Usuario);
      });
    });*/
    let aux : Usuario = new Usuario(); 
    aux.nombre = "Alejandro";
    aux.rol = "Administrador"; 
    let aux1 : Usuario = new Usuario(); 
    aux1.nombre = "Daniel";
    aux1.rol = "Administrador"; 
    let aux2 : Usuario = new Usuario(); 
    aux2.nombre = "Daniel";
    aux2.rol = "Administrador"; 
    this.usuarios = [aux, aux1, aux2];
    //this.usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
    this.usuarioLogueado = lgServ.usuarioLogueado;

  }

  ngOnInit() {

  }

}
