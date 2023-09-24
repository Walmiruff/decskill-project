import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { IPost } from '../models/post.model'; 

export enum PostActionTypes {
    GETALLPOSTS = '[POST GETALL] All Posts getAll',
    LOADALLPOSTS = '[POST LOADED] All Posts Loaded',
    ADDPOST = '[POST ADD] Add Post',
    UPDATEPOST = '[POST UPDATE] Update Post',
    REMOVEPOST = '[POST REMOVE] Remove Post'
}


export class GETALLPOSTS implements Action {
    readonly type = PostActionTypes.GETALLPOSTS;
}


export class LOADALLPOSTS implements Action {
    readonly type = PostActionTypes.LOADALLPOSTS;
    constructor(public payload: { posts: IPost[]}) { console.log(payload.posts)  }
}

export class ADDPOST implements Action {
    readonly type = PostActionTypes.ADDPOST;
    constructor (public payload: { post: IPost }) {}
}


export class UPDATEPOST implements Action {
    readonly type = PostActionTypes.UPDATEPOST;
    constructor(public payload: { id: number; changes: Partial<IPost> }) {}
}


export class REMOVEPOST implements Action{
    readonly type = PostActionTypes.REMOVEPOST;
    constructor ( public payload: {id: number}){}
}



export type PostAction =  GETALLPOSTS | LOADALLPOSTS | ADDPOST | UPDATEPOST | REMOVEPOST;
