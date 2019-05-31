import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { TemplateFormModule } from './template-form/template-form.module';
import { CampoControlErrorComponent } from './campo-control-error/campo-control-error.component';

@NgModule({
  declarations: [
    AppComponent,
    //TemplateFormComponent,
    DataFormComponent,
    CampoControlErrorComponent
    //FormDebugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TemplateFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
