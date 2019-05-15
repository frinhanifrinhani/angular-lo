import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common'; //add para funcionar o locale id
import localePt from '@angular/common/locales/pt'; //add para funcionar o locale id
registerLocaleData(localePt); //add para funcionar o locale id

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    //chamando pelo serviço
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService) => settingsService.getLocale()
    }

    //chamando direto
    /*{
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
