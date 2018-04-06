import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SportsmanListComponent} from "./sportsman-list/sportsman-list.component";
import {SportsmanCreateComponent} from "./sportsman-create/sportsman-create.component";

const routes: Routes = [
  {path: 'sportsman', component: SportsmanListComponent},
  {path: 'sportsman/create', component: SportsmanCreateComponent},
  {path: 'sportsman/edit/:id', component: SportsmanCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsmanRoutingModule { }
