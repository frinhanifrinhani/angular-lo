import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  private cursos: string [] = ['Anuglar', 'Java', 'PG', 'PHP'];

  constructor() {
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
  }

}
