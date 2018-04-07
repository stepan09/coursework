import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionRoutingModule } from './competition-routing.module';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import {MaterialModule} from "../material.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [CompetitionListComponent]
})
export class CompetitionModule { }
