import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StadiumListComponent} from "./stadium-list/stadium-list.component";

const routes: Routes = [
  {path: 'stadium', component: StadiumListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StadiumRoutingModule { }
