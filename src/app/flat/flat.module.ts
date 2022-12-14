import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlatComponent } from './pages/flat/flat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FlatComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FlatModule { }
