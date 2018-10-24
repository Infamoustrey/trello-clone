import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatDividerModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class MaterialModule {}