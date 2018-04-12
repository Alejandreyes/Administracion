export class Usuario {
  public id: number;
  public nombre: string;
  public rol : string ;
  public contrasenia : string ;
  constructor (id: number, nombre: string, rol: string, contrasenia: string){
    this.id = id;
    this.nombre = nombre;
    this.rol = rol;
    this.contrasenia = contrasenia;
  }
}
