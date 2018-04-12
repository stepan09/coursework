import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourtRoutingModule } from './court-routing.module';
import { CourtListComponent } from './court-list/court-list.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";

@NgModule({
  imports: [
    CommonModule,
    CourtRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [CourtListComponent]
})
export class CourtModule { }
