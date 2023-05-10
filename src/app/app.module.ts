import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
