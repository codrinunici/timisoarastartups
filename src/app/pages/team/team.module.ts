import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {TeamRoutingModule} from './team-routing.module';
import {TeamComponent} from './team.component';


@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    FontAwesomeModule
  ],
})
export class TeamModule {
}
