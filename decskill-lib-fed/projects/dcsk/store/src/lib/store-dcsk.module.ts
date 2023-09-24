import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostReducer } from './reducers/post_reducer';



@NgModule({
  declarations: [
    
  ],
  imports: [
    StoreModule.forFeature('posts', PostReducer)
  ],
  exports: [
    
  ]
})
export class StoreDcskModule { }
