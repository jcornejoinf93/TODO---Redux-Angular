export class Todo {
  id: number;
  texto: string;
  completado: boolean;

  constructor( texto: string ) {
    this.id = Math.random() * 100;
    this.texto = texto;
    this.completado = false;
  }
}
