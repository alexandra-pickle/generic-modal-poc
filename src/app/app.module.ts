import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogShellComponentModule } from './dialog-shell-component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDialogShellComponentModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
