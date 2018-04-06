import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsmanRoutingModule } from './sportsman-routing.module';
import { SportsmanListComponent } from './sportsman-list/sportsman-list.component';
import { SportsmanCreateComponent } from './sportsman-create/sportsman-create.component';
import {SportsmanService} from "./sportsman.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SportsmanRoutingModule,
    FormsModule
  ],
  declarations: [SportsmanListComponent, SportsmanCreateComponent],
  providers: [SportsmanService]

})
export class SportsmanModule { }
