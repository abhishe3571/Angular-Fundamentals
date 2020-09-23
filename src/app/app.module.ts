import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBootstrapModule } from './app-bootstrap.module';
import { ToastrService } from './common/toastr.service';

import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { EventService } from './events/shared/event.service';
import { NavbarComponent } from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppBootstrapModule,
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
  ],
  providers: [EventService, ToastrService],

  bootstrap: [EventsAppComponent],
})
export class AppModule {
  isCollapsed = true;
}
