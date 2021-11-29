import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GasolineraItemComponent } from './components/gasolinera-item/gasolinera-item.component';
import { GasolineraListComponent } from './components/gasolinera-list/gasolinera-list.component';
import { DialogGasolineraDetailComponentComponent } from './components/dialog/dialog-gasolinera-detail-component/dialog-gasolinera-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GasolineraItemComponent,
    GasolineraListComponent,
    DialogGasolineraDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
