import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StartupInfoRoutingModule } from './startup-info-routing.module';
import { StartupInfoComponent } from './startup-info.component';

@NgModule({
  declarations: [StartupInfoComponent],
  imports: [CommonModule, StartupInfoRoutingModule],
})
export class StartupInfoModule {}
