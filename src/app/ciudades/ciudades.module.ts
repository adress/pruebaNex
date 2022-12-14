import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { CiudadesComponent } from './pages/ciudades/ciudades.component';



@NgModule({
  declarations: [
    CiudadComponent,
    CiudadesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CiudadesModule { }
