import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SportsmanListComponent} from "./sportsman-list/sportsman-list.component";

const routes: Routes = [
  {path: 'sportsman', component: SportsmanListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsmanRoutingModule { }
