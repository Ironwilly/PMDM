import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPopularListComponent } from './components/movies-popular-list/movies-popular-list.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PersonPopularListComponent } from './components/person-popular-list/person-popular-list.component';
import { SessionComponent } from './shared/session/session.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';

const routes: Routes = [
  {path: 'movie', component: MoviesPopularListComponent},
  {path: 'people', component: PersonPopularListComponent},
  { path: 'profile', component: SideMenuComponent },
  {path: 'person/:id', component: PersonDetailComponent},
  {path: 'loginsuccess', component: SessionComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
