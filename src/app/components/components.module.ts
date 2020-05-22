import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ArticleComponent } from './article/article.component';
import { GroupJoinPanelComponent } from './group-join-panel/group-join-panel.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { SmallCarouselComponent } from './small-carousel/small-carousel.component';
import { SubscribeJumboComponent } from './subscribe-jumbo/subscribe-jumbo.component';
import { TestimonialsPanelComponent } from './testimonials-panel/testimonials-panel.component';
import { TextSloganPanelComponent } from './text-slogan-panel/text-slogan-panel.component';

@NgModule({
  declarations: [
    GroupJoinPanelComponent,
    HeroCarouselComponent,
    SmallCarouselComponent,
    SubscribeJumboComponent,
    TestimonialsPanelComponent,
    TextSloganPanelComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [
    GroupJoinPanelComponent,
    HeroCarouselComponent,
    SmallCarouselComponent,
    SubscribeJumboComponent,
    TestimonialsPanelComponent,
    TextSloganPanelComponent,
    ArticleComponent
  ],
})
export class ComponentsModule { }
