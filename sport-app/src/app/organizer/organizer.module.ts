import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizerRoutingModule } from './organizer-routing.module';
import { OrganizerListComponent } from './organizer-list/organizer-list.component';
import {MaterialModule} from "../material.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    OrganizerRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [OrganizerListComponent]
})
export class OrganizerModule { }
