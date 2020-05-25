import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminGuard } from './admin.guard';
import { ApiService } from './../../api/api.service';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [AdminComponent, LoginComponent, PanelComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ApiService]
})
export class AdminModule { }
