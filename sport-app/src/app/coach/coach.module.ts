import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachListComponent } from './coach-list/coach-list.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";
import {SearchPipe} from "../search.pipe";

@NgModule({
  imports: [
    CommonModule,
    CoachRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    CoachListComponent,
    SearchPipe
  ]
})
export class CoachModule { }
