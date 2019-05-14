import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  private cursos: string [] = ['Anuglar', 'Java', 'PG', 'PHP'];

  constructor() {
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }

}
