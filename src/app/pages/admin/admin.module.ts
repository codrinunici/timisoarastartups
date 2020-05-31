import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminAddStartupComponent } from './admin-startups/admin-add-startup/admin-add-startup.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { AdminPeopleComponent } from './admin-people/admin-people.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminStartupFormComponent } from './admin-startups/admin-startup-form/admin-startup-form.component';
import { AdminStartupsComponent } from './admin-startups/admin-startups.component';
import { AdminComponent } from './admin.component';
import { ApiService } from './../../api/api.service';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    PanelComponent,
    AdminSidenavComponent,
    AdminArticlesComponent,
    AdminStartupsComponent,
    AdminPeopleComponent,
    AdminStartupFormComponent,
    AdminAddStartupComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AdminStartupFormComponent,
    AdminAddStartupComponent
  ],
  providers: [ApiService]
})
export class AdminModule { }
