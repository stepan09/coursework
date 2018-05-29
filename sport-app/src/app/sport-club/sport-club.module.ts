import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportClubListComponent } from './sport-club-list/sport-club-list.component';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';
import {SportClubRoutingModule} from "./sport-club-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SportClubRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [SportClubListComponent]
})
export class SportClubModule { }
