import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsModule } from '../../components/components.module';
import { StartupsRoutingModule } from './startups-routing.module';
import { StartupsComponent } from './startups.component';

@NgModule({
  declarations: [StartupsComponent],
  imports: [
    CommonModule,
    StartupsRoutingModule,
    ComponentsModule,
    FontAwesomeModule,
  ],
})
export class StartupsModule {}
