import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    /*nome: 'Thiago',
    email: 'frinhani@gmail.com'*/
  }
  onSubmit(form){
    console.log(form.value);
    console.log(this.usuario);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  verificaValidTouch(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouch(campo),
      'valid-feedback': this.verificaValidTouch(campo)
    }
  }

  consultaCEP(cep) {
    // console.log(cep);
    var cep = cep.replace(/\D/g,'');

    if(cep != ""){
      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .pipe(map(dados => dados))
        .subscribe(dados => console.log(dados));
      }
    }
  }
}
