import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';

import { ArticleComponent } from './article/article.component';
import { GroupJoinPanelComponent } from './group-join-panel/group-join-panel.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { SmallCarouselComponent } from './small-carousel/small-carousel.component';
import { SubscribeJumboComponent } from './subscribe-jumbo/subscribe-jumbo.component';
import { TextSloganPanelComponent } from './text-slogan-panel/text-slogan-panel.component';
import { TestimonialPanelComponent } from './testimonial-panel/testimonial-panel.component';
import { TimelineScrollComponent } from './timeline-scroll/timeline-scroll.component';
import { HomeImagesComponent } from './home-images/home-images.component';

@NgModule({
  declarations: [
    GroupJoinPanelComponent,
    HeroCarouselComponent,
    SmallCarouselComponent,
    SubscribeJumboComponent,
    TextSloganPanelComponent,
    ArticleComponent,
    TestimonialPanelComponent,
    TimelineScrollComponent,
    HomeImagesComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    MarkdownModule.forChild()
  ],
  exports: [
    GroupJoinPanelComponent,
    HeroCarouselComponent,
    SmallCarouselComponent,
    SubscribeJumboComponent,
    TextSloganPanelComponent,
    ArticleComponent,
    TestimonialPanelComponent,
    TimelineScrollComponent,
    HomeImagesComponent
  ],
})
export class ComponentsModule { }
