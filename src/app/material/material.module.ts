import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";


const MaterialComponent = [
  BrowserAnimationsModule,
  MatStepperModule,
  // ReactiveFormsModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatSliderModule,
  MatDatepickerModule,
  MatGridListModule,
  MatNativeDateModule,
  MatSelectModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
];


@NgModule({
  imports: [MaterialComponent],
  exports : [MaterialComponent]
})
export class MaterialModule { }
