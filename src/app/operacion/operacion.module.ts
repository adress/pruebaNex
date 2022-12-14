import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OperacionComponent } from './pages/operacion/operacion.component';

@NgModule({
  declarations: [
    OperacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class OperacionModule { }
