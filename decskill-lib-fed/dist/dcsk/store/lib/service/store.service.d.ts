import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';
import { IPost } from '../models/post.model';
import * as i0 from "@angular/core";
export declare class StoreService {
    private user1;
    private userSubject;
    private postsSubject;
    constructor();
    getUser(): Observable<IUser>;
    getPosts(): Observable<IPost[]>;
    addUser(user: IUser): void;
    addPost(post: IPost): void;
    deletePost(postId: number | string): void;
    private saveToLocalStorage;
    private loadFromLocalStorage;
    static ɵfac: i0.ɵɵFactoryDeclaration<StoreService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StoreService>;
}
