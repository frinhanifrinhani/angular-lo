import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: import-blacklist
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript data Structure and Algorithms 2nd',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016,5,23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Java','Angular'];

  filtro: string;

  addCurso(valor) {
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos() {
    if(this.livros.length === 0 ||
       this.filtro === undefined ||
       this.filtro.trim() === '') {
    return this.livros;
    }

    return this.livros.filter((v) => {
      if(v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  /* import do rxjs não funcionou para o Observable.interval.
  valorAsync2 = Observable.interval(2000).map(valor => 'Valor assincrono 2');
  */

  constructor() { }

  ngOnInit() {
  }

}
