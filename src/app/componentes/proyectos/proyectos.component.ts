import { Component, OnInit } from '@angular/core';
declare var $ : any ; 
declare var JQuery : any;
import { Proyecto } from '../../modelos/proyecto.model';
import { Usuario } from '../../modelos/usuario.model';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  proyectos: Proyecto[];
  constructor() { 

  }
  
  ngOnInit() {
   let aux : Proyecto = new Proyecto(1,"asd"); 
    aux.descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus consequat mauris in luctus. Curabitur placerat, urna vel eleifend porttitor, tortor mauris congue est, sit amet venenatis sapien est vitae est. Sed quis tincidunt quam, nec fringilla urna. Pellentesque sit amet sapien tellus. Quisque placerat ullamcorper tortor, vel tristique lectus suscipit ac. Nunc non lacus eleifend, lacinia enim at, volutpat nisi. Morbi sagittis, magna vel porttitor feugiat, tellus dolor dignissim massa, quis lacinia leo urna ac sem. Duis lectus nunc, vehicula eleifend efficitur id, accumsan in nunc. Cras ac pulvinar felis. Curabitur ullamcorper rutrum felis nec vulputate.";
    
   
    aux.cliente = "Alejandro";
    let aux1 : Proyecto = new Proyecto(2,"Perorontino"); 
    aux1.nombre = "Daniel";
    aux1.cliente = "Analista"; 
    let aux2 : Proyecto = new Proyecto(2,"Perorontino"); 
    aux2.nombre = "Manuel";
    aux2.cliente = "Administrador"; 
    this.proyectos = [aux, aux1, aux2];
  }

  esImportante(nombre: String) : boolean{
    if(nombre == "Administrador"){
      return true ;
    }
    else{
      return false;
    }
  }

}
