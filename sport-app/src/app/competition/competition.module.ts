import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionRoutingModule } from './competition-routing.module';
import {CompetitionListComponent, EditCompetitionDialog} from './competition-list/competition-list.component';
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
  declarations: [
    CompetitionListComponent,
    EditCompetitionDialog
  ],
  entryComponents: [EditCompetitionDialog, CompetitionListComponent]
})
export class CompetitionModule { }
