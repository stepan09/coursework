import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GymListComponent} from "./gym-list/gym-list.component";

const routes: Routes = [
  {path: 'gym', component: GymListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymRoutingModule { }
