import { Action } from '@ngrx/store';
import { IPost } from '../models/post.model';
export declare enum PostActionTypes {
    GETALLPOSTS = "[POST GETALL] All Posts getAll",
    LOADALLPOSTS = "[POST LOADED] All Posts Loaded",
    ADDPOST = "[POST ADD] Add Post",
    UPDATEPOST = "[POST UPDATE] Update Post",
    REMOVEPOST = "[POST REMOVE] Remove Post"
}
export declare class GETALLPOSTS implements Action {
    readonly type = PostActionTypes.GETALLPOSTS;
}
export declare class LOADALLPOSTS implements Action {
    payload: {
        posts: IPost[];
    };
    readonly type = PostActionTypes.LOADALLPOSTS;
    constructor(payload: {
        posts: IPost[];
    });
}
export declare class ADDPOST implements Action {
    payload: {
        post: IPost;
    };
    readonly type = PostActionTypes.ADDPOST;
    constructor(payload: {
        post: IPost;
    });
}
export declare class UPDATEPOST implements Action {
    payload: {
        id: number;
        changes: Partial<IPost>;
    };
    readonly type = PostActionTypes.UPDATEPOST;
    constructor(payload: {
        id: number;
        changes: Partial<IPost>;
    });
}
export declare class REMOVEPOST implements Action {
    payload: {
        id: number | number;
    };
    readonly type = PostActionTypes.REMOVEPOST;
    constructor(payload: {
        id: number | number;
    });
}
export declare type PostAction = GETALLPOSTS | LOADALLPOSTS | ADDPOST | UPDATEPOST | REMOVEPOST;
