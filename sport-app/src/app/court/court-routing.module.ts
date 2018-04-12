import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourtListComponent} from "./court-list/court-list.component";

const routes: Routes = [
  {path: 'court', component: CourtListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourtRoutingModule { }
