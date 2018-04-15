import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario.model';
// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService {
  usuariosLista: AngularFireList<Usuario>;
  selectedProduct: Usuario = new Usuario();
  constructor(private firebase: AngularFireDatabase) {
    this.usuariosLista = firebase.list('usuarios');
  }

  getUsuarios()  {
    return this.usuariosLista;
  }
  addUsuario(usuarioNuevo : Usuario ){

  }
  editUsuario(){

  }
  removeUsuario(){

  }

}
