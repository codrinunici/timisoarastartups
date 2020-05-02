import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartupsComponent } from './startups.component';

const routes: Routes = [
  {
    path: '',
    component: StartupsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartupsRoutingModule {}
