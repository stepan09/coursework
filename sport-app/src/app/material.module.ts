import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule, MatDatepickerModule, MatDialogModule,
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
    MatDatepickerModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatDialogModule
  ],
})
export class MaterialModule { }
