export class Proyecto {
  public id: number;
  public nombre: string;
  public descripcion : string ;
  public cliente : string ;
  public fecha_inicio : Date ;
  public fecha_fin : Date ;


  constructor (id: number, nombre: string){
    this.id = id;
    this.nombre = nombre;
  }
}
