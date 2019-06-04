import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DataFormComponent } from './data-form.component';

@NgModule({
  declarations: [
    DataFormComponent,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule
  ]
})
export class DataFormModule { }
