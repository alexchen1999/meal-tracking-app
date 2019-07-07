import { NgModule } from '@angular/core';
import {MatNativeDateModule, MatDatepickerModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule, MatSortModule} from '@angular/material';

@NgModule({
  imports: [MatNativeDateModule, MatDatepickerModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule, MatSortModule],
  exports: [MatNativeDateModule, MatDatepickerModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule, MatSortModule],
})
export class AngularMaterialsModule { }