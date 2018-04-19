import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportKindRoutingModule } from './sport-kind-routing.module';
import { SportKindComponent } from './sport-kind/sport-kind.component';
import {MaterialModule} from "../material.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SportKindRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [SportKindComponent]
})
export class SportKindModule { }
