import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TurboLibModule } from "turbo-lib";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TurboLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
