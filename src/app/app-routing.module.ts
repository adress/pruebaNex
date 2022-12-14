import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadesComponent } from './ciudades/pages/ciudades/ciudades.component';
import { FlatComponent } from './flat/pages/flat/flat.component';
import { OperacionComponent } from './operacion/pages/operacion/operacion.component';

const routes: Routes = [
  {
    path: 'operacion',
    component: OperacionComponent
  },
  {
    path: 'ciudades',
    component: CiudadesComponent
  },
  {
    path: 'flat',
    component: FlatComponent
  },
  {
    path: '**',
    redirectTo: 'operacion'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
