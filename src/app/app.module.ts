import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OperacionModule } from './operacion/operacion.module';
import { CiudadesModule } from './ciudades/ciudades.module';
import { FlatModule } from './flat/flat.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    SharedModule,
    OperacionModule,
    CiudadesModule,
    FlatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
