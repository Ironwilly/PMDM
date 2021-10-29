import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPopularListComponent } from './components/movies-popular-list/movies-popular-list.component';
import { PersonPopularListComponentComponent } from './person-popular-list-component/person-popular-list-component.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';

const routes: Routes = [
  {path: '', component:SideMenuComponent},
  {path: '', component: PersonPopularListComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
