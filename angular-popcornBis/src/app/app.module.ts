import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './modules/material-imports.module';
import { MoviesPopularListComponent } from './components/movies-popular-list/movies-popular-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    MoviesPopularListComponent,
    MovieItemComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      animationDuration: 300,
      unitsFontSize: "20",
      titleFontSize: "20",
      "outerStrokeGradient": true,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "titleColor": "#FFFFFF",
      "titleFontWeight": "bold",
      "showSubtitle": false,
      "animateTitle": true,
      "showBackground": true,
      "backgroundColor": "#000000"

    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
