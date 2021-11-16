import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './modules/material-imports.module';
import { PlanetItemComponent } from './pages/planet-item/planet-item.component';
import { PlanetListComponent } from './pages/planet-list/planet-list.component';
import { PlanetDetailComponent } from './pages/planet-detail/planet-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    PlanetItemComponent,
    PlanetListComponent,
    PlanetDetailComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule
  ],
  entryComponents: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
