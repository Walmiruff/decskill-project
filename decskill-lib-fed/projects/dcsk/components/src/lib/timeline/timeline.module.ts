import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { TimeAgoPipe } from '../pipes/time-ago.pipe';



@NgModule({
  declarations: [
    TimelineComponent,
    TimeAgoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimelineComponent,
    TimeAgoPipe
  ]
})
export class TimelineModule { }
