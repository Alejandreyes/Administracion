// Bibliotecas de angular
import { Component, OnInit } from '@angular/core';
// Bibliotecas para manejar formularios en angular 
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
/* //Bibliotecas de direccionamiento de angular
import { Router } from '@angular/router';

// ----------------------------------------------
//Bibliotecas de Diseño 
import { toast } from 'angular2-materialize';

// Modelos requeridos por el servicio 
import { Usuario } from '../../modelos/usuario.model';

// Bibliotecas de Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
 */
//Login service
//import {UsuarioService} from '../../servicios/usuario.service';
// ----------------------------------------------
//Bibliotecas de Diseño 
import { toast } from 'angular2-materialize';
import { LoginService } from '../../servicios/login.service';
import { Usuario } from '../../modelos/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
  * Falta en el constructor una instancia del servicio que pueda manejar la base de datos del tipo de objeto 
  */
  usuarioForm: FormGroup;
  /* usuario: Usuario;
  user: Observable<firebase.User>; // Usuario propio de firebase 
  constructor(private pf: FormBuilder,
    private firebaseAuth: AngularFireAuth,
    public router: Router,
    //public usuarioServ : UsuarioService
    public loginServ: LoginService
  ){
    this.user = firebaseAuth.authState;
  }
 */
constructor(private pf: FormBuilder,
  public loginServ: LoginService){ }

  ngOnInit() {
    this.usuarioForm = this.pf.group({
      nombre: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });

    toast("Rellena todos los marcados en rojo", 2500);
  }
  onSubmit() {
    const usuarioPrueba = {
      nombre: this.usuarioForm.get('nombre').value,
      contrasenia: this.usuarioForm.get('contrasenia').value
    };
    if (usuarioPrueba.nombre == null || usuarioPrueba.nombre == '' || usuarioPrueba.contrasenia == null || usuarioPrueba.contrasenia == '') {
      toast("Rellena todos los espacios antes de continuar", 1500);
    } else {
      let usuario: Usuario = new Usuario();
      usuario.nombre = usuarioPrueba.nombre ; 
      usuario.contrasenia = usuarioPrueba.contrasenia ;
      this.loginServ.signin(usuario);  
    }


    // this.usuarioService.putUsuario( this.Usuario, this.id )
    //.subscribe(newpre => {
    //this.router.navigate(['/Usuarios'])
    // })
  }

}
