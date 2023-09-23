import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    SidebarComponent
  ],
  imports: [
  ],
  exports: [
    ComponentsComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
