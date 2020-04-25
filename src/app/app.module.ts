import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupJoinPanelComponent } from './components/group-join-panel/group-join-panel.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { SmallCarouselComponent } from './components/small-carousel/small-carousel.component';
import { SubscribeJumboComponent } from './components/subscribe-jumbo/subscribe-jumbo.component';
import { TestimonialsPanelComponent } from './components/testimonials-panel/testimonials-panel.component';
import { TextSloganPanelComponent } from './components/text-slogan-panel/text-slogan-panel.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopNavComponent,
    HeroCarouselComponent,
    SmallCarouselComponent,
    SubscribeJumboComponent,
    TestimonialsPanelComponent,
    GroupJoinPanelComponent,
    TextSloganPanelComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
