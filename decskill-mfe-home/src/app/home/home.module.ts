import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { StoreDcskModule } from '@dcsk/store';
import { ComponentsModule } from '@dcsk/components';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    StoreDcskModule,
    StoreModule.forRoot({}),
    RouterModule.forChild(routes)],
})
export class HomeModule {}
