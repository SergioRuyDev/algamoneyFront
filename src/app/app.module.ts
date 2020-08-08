import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ButtonModule,
    InputTextModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
