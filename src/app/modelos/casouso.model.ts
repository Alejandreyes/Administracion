import {Accion} from './modelos/accion.model';
export class CasoUso {
  public id : number ;
  public nombre : string ;
  public acciones :Accion[];
  public descripcion : string ;
  public postcondiciones : string[] ;
  public precondiciones : string [] ;


}
