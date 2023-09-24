import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { PostReducer } from './reducers/post_reducer';
import { StoreService } from './service/store.service';


@NgModule({
  declarations: [
  ],
  imports: [
    StoreModule.forFeature('posts', PostReducer)
  ],
  exports: [
  ],
  providers: [
    StoreService
  ]
})
export class StoreDcskModule { }
