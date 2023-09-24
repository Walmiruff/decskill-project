import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { IPost } from '../models/post.model';
import { PostAction, PostActionTypes } from '../actions/post_action';


export const adapter: EntityAdapter<IPost> = createEntityAdapter<IPost>();

export interface PostState extends EntityState<IPost> { }

export const initialPostState: PostState = adapter.getInitialState({
    id: '1',
    userId: '@anyuser',
    content: 'content test',
    date: new Date()
});


export function PostReducer(state = initialPostState, action: PostAction): PostState {
    switch (action.type) {
        case PostActionTypes.LOADALLPOSTS:
            return adapter.setAll(action.payload.posts, state);
        case PostActionTypes.ADDPOST:
            return adapter.addOne(action.payload.post, state);
        case PostActionTypes.UPDATEPOST:
            return adapter.updateOne({ id: action.payload.id, changes: action.payload }, state);
        case PostActionTypes.REMOVEPOST:
            return adapter.removeOne(action.payload.id, state);
        default:
            return state;
    }
}

export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
} = adapter.getSelectors();
