import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {StayTunedModule} from '../stay-tuned/stay-tuned.module';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StayTunedModule,
  ],
})
export class ProductsModule {
}
