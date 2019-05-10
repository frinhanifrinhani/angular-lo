import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {


  getCursos() {
    return ['Anuglar', 'Java', 'PG', 'PHP'];
  }

}
