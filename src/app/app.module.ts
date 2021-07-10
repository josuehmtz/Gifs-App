import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { GifsModule } from './components/gifs/gifs.module';

import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //ORDEN DE LOS MODULOS:
    //1.- MODULOS GENERADOS POR ANGULAR
    BrowserModule,
    HttpClientModule,
    //2.- MODULOS GENERADOS POR UNO MISMO
    SharedModule,
    GifsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
