import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachListComponent } from './coach-list/coach-list.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";

@NgModule({
  imports: [
    CommonModule,
    CoachRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [CoachListComponent]
})
export class CoachModule { }
