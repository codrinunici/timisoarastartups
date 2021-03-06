import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { AdminPeopleComponent } from './admin-people/admin-people.component';
import { AdminStartupsComponent } from './admin-startups/admin-startups.component';
import { AdminComponent } from './admin.component';
import { AdminGuard } from './admin.guard';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'panel',
        component: PanelComponent,
        canActivate: [AdminGuard],
        children: [
          {
            path: '',
            redirectTo: 'articles',
            pathMatch: 'full'
          },
          {
            path: 'articles',
            component: AdminArticlesComponent,
          },
          {
            path: 'startups',
            component: AdminStartupsComponent,
          },
          {
            path: 'people',
            component: AdminPeopleComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
