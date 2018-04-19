import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SportKindComponent} from "./sport-kind/sport-kind.component";

const routes: Routes = [
  {path: 'sport-kind', component: SportKindComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportKindRoutingModule { }
