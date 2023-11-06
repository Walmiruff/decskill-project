import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i1 from '@ngrx/store';
import { createFeatureSelector, createSelector, StoreModule } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';

class StoreService {
    constructor() {
        this.user1 = {
            id: 1,
            name: 'Marl Otto',
            tag: '@poloConghiale',
            photo: 'https://github.com/mdo.png'
        };
        this.userSubject = new BehaviorSubject(this.user1);
        this.postsSubject = new BehaviorSubject([]);
        // Carregar dados do localStorage quando o serviço é inicializado
        this.loadFromLocalStorage();
    }
    // Métodos para obter Observables dos estados
    getUser() {
        return this.userSubject.asObservable();
    }
    getPosts() {
        return this.postsSubject.asObservable();
    }
    // Métodos para adicionar dados ao estado
    addUser(user) {
        this.userSubject.next(user);
        this.saveToLocalStorage('user', user);
    }
    addPost(post) {
        const posts = [...this.postsSubject.value, post];
        this.postsSubject.next(posts);
        this.saveToLocalStorage('posts', posts);
    }
    // Método para deletar um post
    deletePost(postId) {
        const posts = this.postsSubject.value.filter((post) => post.id !== postId);
        this.postsSubject.next(posts);
        this.saveToLocalStorage('posts', posts);
    }
    // Salvar no localStorage
    saveToLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    // Carregar do localStorage
    loadFromLocalStorage() {
        var _a, _b;
        const user = JSON.parse((_a = localStorage.getItem('user')) !== null && _a !== void 0 ? _a : '[]');
        this.userSubject.next(user);
        const posts = JSON.parse((_b = localStorage.getItem('posts')) !== null && _b !== void 0 ? _b : '[]');
        this.postsSubject.next(posts);
    }
}
StoreService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StoreService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StoreService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StoreService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

var PostActionTypes;
(function (PostActionTypes) {
    PostActionTypes["GETALLPOSTS"] = "[POST GETALL] All Posts getAll";
    PostActionTypes["LOADALLPOSTS"] = "[POST LOADED] All Posts Loaded";
    PostActionTypes["ADDPOST"] = "[POST ADD] Add Post";
    PostActionTypes["UPDATEPOST"] = "[POST UPDATE] Update Post";
    PostActionTypes["REMOVEPOST"] = "[POST REMOVE] Remove Post";
})(PostActionTypes || (PostActionTypes = {}));
class GETALLPOSTS {
    constructor() {
        this.type = PostActionTypes.GETALLPOSTS;
    }
}
class LOADALLPOSTS {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.LOADALLPOSTS;
        console.log(payload.posts);
    }
}
class ADDPOST {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.ADDPOST;
    }
}
class UPDATEPOST {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.UPDATEPOST;
    }
}
class REMOVEPOST {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.REMOVEPOST;
    }
}

const adapter = createEntityAdapter();
const initialPostState = adapter.getInitialState({
    id: '1',
    userId: '@anyuser',
    content: 'content test',
    date: new Date()
});
function PostReducer(state = initialPostState, action) {
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
const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();

const selectPostState = createFeatureSelector('posts');
const selectAllPosts = createSelector(selectPostState, selectAll);

class StoreDcskModule {
}
StoreDcskModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StoreDcskModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StoreDcskModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StoreDcskModule, imports: [i1.StoreFeatureModule] });
StoreDcskModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StoreDcskModule, providers: [
        StoreService
    ], imports: [[
            StoreModule.forFeature('posts', PostReducer)
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StoreDcskModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        StoreModule.forFeature('posts', PostReducer)
                    ],
                    exports: [],
                    providers: [
                        StoreService
                    ]
                }]
        }] });

/*
 * Public API Surface of store
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ADDPOST, GETALLPOSTS, LOADALLPOSTS, PostActionTypes, PostReducer, REMOVEPOST, StoreDcskModule, StoreService, UPDATEPOST, adapter, initialPostState, selectAll, selectAllPosts, selectEntities, selectIds, selectPostState, selectTotal };
//# sourceMappingURL=dcsk-store.js.map
