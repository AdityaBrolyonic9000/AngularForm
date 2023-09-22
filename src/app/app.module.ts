import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; // Import your routing module

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule], // Add AppRoutingModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
