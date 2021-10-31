import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './modules/material-imports.module';
import { MoviesPopularListComponent } from './components/movies-popular-list/movies-popular-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { PersonPopularListComponentComponent } from './person-popular-list-component/person-popular-list-component.component';
import { PersonItemComponent } from './person-item/person-item/person-item.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { DialogMovieDetail } from './dialogs/dialog-movie-detail/dialog-movie-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesPopularListComponent,
    MovieItemComponent,
    MoviesPopularListComponent,
    PersonPopularListComponentComponent,
    PersonItemComponent,
    SideMenuComponent,
    DialogMovieDetail,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule
  ],
  entryComponents: [
    DialogMovieDetail
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
