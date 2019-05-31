import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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

}
