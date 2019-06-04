import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    this.formulario = this.formBuilder.group({
      nome: [
        null,
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      ],
      email: [
        null,
        [Validators.required,
          Validators.email]
        ]
    });


  }

  onSubmit(){
    this.http.post('https://httpbin.org/post',JSON.stringify(this.formulario.value))
      .pipe(map(resp => resp))
      .subscribe(dados => {
        console.log(dados);
        //reseta form
        this.resetar();
      },
      (error: any) => alert('error'));
  }

  resetar(){
    this.formulario.reset();
  }

}
