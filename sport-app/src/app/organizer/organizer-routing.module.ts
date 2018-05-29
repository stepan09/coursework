import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrganizerListComponent} from "./organizer-list/organizer-list.component";

const routes: Routes = [
  {path: 'organizer', component: OrganizerListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizerRoutingModule { }
