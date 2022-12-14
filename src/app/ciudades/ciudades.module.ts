import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiudadesComponent } from './pages/ciudades/ciudades.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CiudadesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CiudadesModule { }
