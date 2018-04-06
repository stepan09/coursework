import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachListComponent} from "./coach-list/coach-list.component";

const routes: Routes = [
  {path: 'coach', component: CoachListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
