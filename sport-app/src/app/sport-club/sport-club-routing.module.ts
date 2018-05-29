import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SportClubListComponent} from "./sport-club-list/sport-club-list.component";

const routes: Routes = [
  {path: 'sport-club', component: SportClubListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportClubRoutingModule { }
