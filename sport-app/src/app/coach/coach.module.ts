import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachListComponent } from './coach-list/coach-list.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";
import {SearchPipeModule} from "../search.pipe.module";

@NgModule({
  imports: [
    CommonModule,
    CoachRoutingModule,
    FormsModule,
    MaterialModule,
    SearchPipeModule
  ],
  declarations: [
    CoachListComponent,
  ]
})
export class CoachModule { }
