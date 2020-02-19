import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCarouselComponent } from './test-carousel/test-carousel.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    TestCarouselComponent,
    TopNavComponent
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
