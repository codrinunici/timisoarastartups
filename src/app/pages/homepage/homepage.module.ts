import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';

@NgModule({
  imports: [CommonModule, ComponentsModule, HomepageRoutingModule],
  declarations: [HomepageComponent],
})
export class HomepageModule {}
