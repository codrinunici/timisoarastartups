import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/homepage/homepage.module').then(
        (md) => md.HomepageModule
      ),
  },
  {
    path: 'startup-info',
    loadChildren: () =>
      import('./pages/startup-info/startup-info.module').then(
        (md) => md.StartupInfoModule
      ),
  },
  {
    path: 'startups',
    loadChildren: () =>
      import('./pages/startups/startups.module').then(
        (md) => md.StartupsModule
      ),
  },
  {
    path: 'people',
    loadChildren: () =>
      import('./pages/people/people.module').then((md) => md.PeopleModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./pages/events/events.module').then((md) => md.EventsModule),
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
