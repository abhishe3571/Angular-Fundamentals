import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: '<events-list></events-list>',
})
export class EventsAppComponent {
  // tslint:disable-next-line: member-access
  title = 'ng-fundamentals';
}
