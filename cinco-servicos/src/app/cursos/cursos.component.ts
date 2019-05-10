import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  curosService: CursosService;

  constructor(private cursoService: CursosService) {
    //this.curosService = new CursosService();
    this.curosService = cursoService;
  }

  ngOnInit() {
    this.cursos = this.curosService.getCursos();
  }

}
