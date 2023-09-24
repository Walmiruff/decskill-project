import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from '../reducers/post_reducer';
import * as fromPostReducer from '../reducers/post_reducer';


export const selectPostState = createFeatureSelector<PostState>('posts');


export const selectAllPosts = createSelector(
    selectPostState,
    fromPostReducer.selectAll
)
