import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionRoutingModule } from './competition-routing.module';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import {MaterialModule} from "../material.module";
import {FormsModule} from "@angular/forms";
import {SearchPipeModule} from "../search.pipe.module";

@NgModule({
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    FormsModule,
    MaterialModule,
    SearchPipeModule
  ],
  declarations: [CompetitionListComponent]
})
export class CompetitionModule { }
