import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { StayTunedModule } from './../stay-tuned/stay-tuned.module';

@NgModule({
  declarations: [EventsComponent],
  imports: [CommonModule, EventsRoutingModule, StayTunedModule],
})
export class EventsModule { }
