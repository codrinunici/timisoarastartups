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
    path: 'articles',
    loadChildren: () => import('./pages/articles/articles.module').then((md) => md.ArticlesModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import('./pages/heroes/heroes.module').then((md) => md.HeroesModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then((md) => md.ProductsModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(md => md.AdminModule)
  },
  {
    path: 'team',
    loadChildren:() => import ('./pages/team/team.module').then(md=> md.TeamModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: '404', loadChildren: () =>
      import('./pages/stay-tuned/stay-tuned.module').then(md => md.StayTunedModule)
  },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
