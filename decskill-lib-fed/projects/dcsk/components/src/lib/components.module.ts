import { NgModule } from '@angular/core';
import { SideBarModule } from './sidebar/sidebar.module';
import { PostModule } from './post/post.module';



@NgModule({
  declarations: [
  ],
  imports: [
    SideBarModule,
    PostModule
  ],
  exports: [
    SideBarModule,
    PostModule
  ]
})
export class ComponentsModule { }
