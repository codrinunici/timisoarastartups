import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {StayTunedModule} from '../stay-tuned/stay-tuned.module';

import {HeroesRoutingModule} from './heroes-routing.module';
import {HeroesComponent} from './heroes.component';


@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    StayTunedModule,
  ],
})
export class HeroesModule {
}
