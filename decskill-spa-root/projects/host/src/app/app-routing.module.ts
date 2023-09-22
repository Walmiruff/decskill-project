import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'decskill-mfe-home',
    loadChildren: () =>
      import('decskill-mfe-home/homeModule').then((module) => module.HomeModule),
  },
  {
    path: 'decskill-mfe-explore',
    loadChildren: () =>
      import('decskill-mfe-explore/homeModule').then((module) => module.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
