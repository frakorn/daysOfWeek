import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DaysOfWeekComponent } from './days-of-week/days-of-week.component';

@NgModule({
  declarations: [
    AppComponent,
    DaysOfWeekComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
