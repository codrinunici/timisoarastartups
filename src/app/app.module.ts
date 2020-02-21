import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SmallCarouselComponent } from './components/small-carousel/small-carousel.component';
import { SubscribeJumboComponent } from './components/subscribe-jumbo/subscribe-jumbo.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HeroCarouselComponent,
    SmallCarouselComponent,
    SubscribeJumboComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
