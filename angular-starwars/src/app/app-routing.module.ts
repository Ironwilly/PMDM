import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetListComponent } from './pages/planet-list/planet-list.component';
import { PlanetDetailComponent } from './pages/planet-detail/planet-detail.component';

const routes: Routes = [
  {path: 'planets', component: PlanetListComponent},
  {path: 'planets/:idplanet', component: PlanetDetailComponent},
  {path: '', pathMatch:'full',redirectTo: '/planets'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
