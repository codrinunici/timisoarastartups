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
import { FooterComponent } from './components/footer/footer.component';
import { GroupJoinPanelComponent } from './components/group-join-panel/group-join-panel.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { SmallCarouselComponent } from './components/small-carousel/small-carousel.component';
import { SubscribeJumboComponent } from './components/subscribe-jumbo/subscribe-jumbo.component';
import { TestimonialsPanelComponent } from './components/testimonials-panel/testimonials-panel.component';
import { TextSloganPanelComponent } from './components/text-slogan-panel/text-slogan-panel.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { EventsComponent } from './pages/events/events.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PeopleComponent } from './pages/people/people.component';
import { StartupInfoComponent } from './pages/startup-info/startup-info.component';
import { StartupsComponent } from './pages/startups/startups.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    FooterComponent,
    StartupInfoComponent,
    PeopleComponent,
    EventsComponent,
    StartupsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
