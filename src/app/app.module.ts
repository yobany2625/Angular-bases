import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { heroesModule } from './heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    heroesModule
  ],
  providers: [heroesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
