import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario.model';

//Bibliotecas de direccionamiento de angular
import { Router } from '@angular/router';
//Bibliotecas de Diseño 
import { toast } from 'angular2-materialize';

// Bibliotecas de Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

// Agregando programacion reactiva
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";
@Injectable()
export class LoginService {
  usuarioLogueado: Usuario = new Usuario();
  usuarioLogueado$ = new Subject<Usuario>();
  //usuarioL :Observable<Usuario> ;
  user: Observable<firebase.User>; // Usuario propio de firebase 
  constructor(private firebaseAuth: AngularFireAuth, public router: Router) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }
  signin(usuario: Usuario) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword('example@example.com', usuario.contrasenia)
      .then(value => {
        this.usuarioLogueado = usuario;
        this.usuarioLogueado$.next(this.usuarioLogueado);
        //console.log(usuario);
        this.router.navigate(['/usuarios']);
      }).catch(err => {

        toast("Error usuario o contraseña invalidos", 2500);
      });
  }
  getUsuarioLogueado$(): Observable<Usuario> {
    return this.usuarioLogueado$.asObservable();
  }
}
