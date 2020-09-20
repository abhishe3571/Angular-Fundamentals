import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';

@NgModule({
  declarations: [
    EventsAppComponent,
  ],
  imports: [
    BrowserModule,
  ],
  // tslint:disable-next-line: object-literal-sort-keys
  bootstrap: [EventsAppComponent],
})
export class AppModule { }
