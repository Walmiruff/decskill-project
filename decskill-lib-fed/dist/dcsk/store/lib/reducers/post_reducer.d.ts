import { EntityState, EntityAdapter } from '@ngrx/entity';
import { IPost } from '../models/post.model';
import { PostAction } from '../actions/post_action';
export declare const adapter: EntityAdapter<IPost>;
export interface PostState extends EntityState<IPost> {
}
export declare const initialPostState: PostState;
export declare function PostReducer(state: PostState | undefined, action: PostAction): PostState;
export declare const selectAll: (state: EntityState<IPost>) => IPost[], selectEntities: (state: EntityState<IPost>) => import("@ngrx/entity").Dictionary<IPost>, selectIds: (state: EntityState<IPost>) => string[] | number[], selectTotal: (state: EntityState<IPost>) => number;
