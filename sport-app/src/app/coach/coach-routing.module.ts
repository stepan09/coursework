import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachListComponent} from "./coach-list/coach-list.component";
import {CoachCreateComponent} from "./coach-create/coach-create.component";

const routes: Routes = [
  {path: 'coach', component: CoachListComponent},
  {path: 'coach/create', component: CoachCreateComponent},
  {path: 'coach/edit/:id', component: CoachCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
