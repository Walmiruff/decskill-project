import { NgModule } from '@angular/core';
import { SideBarModule } from './sidebar/sidebar.module';
import { PostModule } from './post/post.module';
import { TimelineModule } from './timeline/timeline.module';



@NgModule({
  declarations: [
  ],
  imports: [
    SideBarModule,
    PostModule,
    TimelineModule
  ],
  exports: [
    SideBarModule,
    PostModule,
    TimelineModule
  ]
})
export class ComponentsModule { }
