import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  exports: [
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    // MatAutocompleteModule,
    // MatCardModule,
    // MatDialogModule,
    // MatFormFieldModule,
    // MatGridListModule,
    // MatInputModule,
    // MatProgressSpinnerModule,
    // MatSelectModule,
    // MatSnackBarModule,
    // FlexLayoutModule
  ]
})
export class MaterialModule { }
