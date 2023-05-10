import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SearchContainerComponentModule } from './search-dialog/search-container/search-container.component.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    SearchContainerComponentModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
