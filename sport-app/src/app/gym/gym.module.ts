import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymRoutingModule } from './gym-routing.module';
import { GymListComponent } from './gym-list/gym-list.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";

@NgModule({
  imports: [
    CommonModule,
    GymRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [GymListComponent]
})
export class GymModule { }
