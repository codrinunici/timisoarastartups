import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminComponent } from './admin.component';
import { ApiService } from './../../api/api.service';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { AdminStartupsComponent } from './admin-startups/admin-startups.component';
import { AdminPeopleComponent } from './admin-people/admin-people.component';


@NgModule({
  declarations: [AdminComponent, LoginComponent, PanelComponent, AdminSidenavComponent, AdminArticlesComponent, AdminStartupsComponent, AdminPeopleComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ApiService]
})
export class AdminModule { }
