import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsmanRoutingModule } from './sportsman-routing.module';
import { SportsmanListComponent } from './sportsman-list/sportsman-list.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";

@NgModule({
  imports: [
    CommonModule,
    SportsmanRoutingModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [SportsmanListComponent]
})
export class SportsmanModule { }
