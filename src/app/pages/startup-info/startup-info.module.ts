import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StartupInfoRoutingModule } from './startup-info-routing.module';
import { StartupInfoComponent } from './startup-info.component';
import { StayTunedComponent } from './../stay-tuned/stay-tuned.component';
import { StayTunedModule } from './../stay-tuned/stay-tuned.module';

@NgModule({
  declarations: [StartupInfoComponent],
  imports: [CommonModule, StartupInfoRoutingModule, StayTunedModule],
})
export class StartupInfoModule { }
