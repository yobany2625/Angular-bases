import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { heroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    heroesModule,
    DbzModule
  ],
  providers: [heroesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
