import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachCreateComponent } from './coach-create/coach-create.component';
import { CoachListComponent } from './coach-list/coach-list.component';
import {FormsModule} from "@angular/forms";
import {CoachService} from "./coach.service";

@NgModule({
  imports: [
    CommonModule,
    CoachRoutingModule,
    FormsModule,
  ],
  declarations: [CoachCreateComponent, CoachListComponent],
  providers: [CoachService]
})
export class CoachModule { }
