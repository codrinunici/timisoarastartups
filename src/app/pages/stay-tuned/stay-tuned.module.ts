import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StayTunedRoutingModule } from './stay-tuned-routing.module';
import { StayTunedComponent } from './stay-tuned.component';


@NgModule({
  declarations: [StayTunedComponent],
  imports: [
    CommonModule,
    StayTunedRoutingModule
  ]
})
export class StayTunedModule { }
