import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProbandoComponent } from './component/probando/probando.component';
import { Prueba2Component } from './component/prueba2/prueba2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProbandoComponent,
    Prueba2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
