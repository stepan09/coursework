import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StadiumRoutingModule } from './stadium-routing.module';
import { StadiumListComponent } from './stadium-list/stadium-list.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    StadiumRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [StadiumListComponent]
})
export class StadiumModule { }
