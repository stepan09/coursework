import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule, MatDatepickerModule,
  MatIconModule,
  MatInputModule, MatOptionModule,
  MatSelect,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule
  ],
})
export class MaterialModule { }
