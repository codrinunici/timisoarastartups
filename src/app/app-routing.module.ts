import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PeopleComponent } from './pages/people/people.component';
import { StartupInfoComponent } from './pages/startup-info/startup-info.component';
import { StartupsComponent } from './pages/startups/startups.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'startup-info',
    component: StartupInfoComponent,
  },
  {
    path: 'startups',
    component: StartupsComponent,
  },
  {
    path: 'people',
    component: PeopleComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  { path: '**', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
