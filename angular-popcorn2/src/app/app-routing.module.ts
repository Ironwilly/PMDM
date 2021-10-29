import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPopularListComponent } from './components/movies-popular-list/movies-popular-list.component';
import { PersonPopularListComponentComponent } from './person-popular-list-component/person-popular-list-component.component';


const routes: Routes = [
  {path: 'movies', component: MoviesPopularListComponent},
  {path: 'people', component: PersonPopularListComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
