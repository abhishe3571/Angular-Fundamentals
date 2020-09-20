import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  exports: [BrowserAnimationsModule],
})
export class AppBootstrapModule {}
