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
    // console.log(form.value);
    // console.log(this.usuario);


    this.http.post('https://httpbin.org/post',JSON.stringify(form.value))
      .pipe(map(resp => resp))
      .subscribe(dados => console.log(dados));
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

  consultaCEP(cep,form) {
    // console.log(cep);
    var cep = cep.replace(/\D/g,'');

    if(cep != ""){
      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) {
        this.resetaDadosForm(form);
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .pipe(map(dados => dados))
        .subscribe(dados => this.pupulaDadosForm(dados,form));
      }
    }
  }

  pupulaDadosForm(dados,formulario){
    /*formulario.setValue({
      nome: formulario.value.nome,
      email:formulario.value.email,
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/

    formulario.form.patchValue({
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf

    });
  }

  resetaDadosForm(formulario){
    formulario.form.patchValue({
      rua: null,
      complemento: null,
      bairro: null,
      cidade: null,
      estado: null

    });
  }
}
