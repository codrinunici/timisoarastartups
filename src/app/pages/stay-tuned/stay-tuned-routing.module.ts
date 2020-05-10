import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StayTunedComponent } from './stay-tuned.component';


const routes: Routes = [{
  path: '',
  component: StayTunedComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StayTunedRoutingModule { }
