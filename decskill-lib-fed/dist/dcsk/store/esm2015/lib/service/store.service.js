import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class StoreService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Rjc2svc3RvcmUvc3JjL2xpYi9zZXJ2aWNlL3N0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQVFuRCxNQUFNLE9BQU8sWUFBWTtJQVd2QjtRQVZRLFVBQUssR0FBVTtZQUNyQixFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxXQUFXO1lBQ2pCLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsS0FBSyxFQUFFLDRCQUE0QjtTQUN0QyxDQUFDO1FBQ1EsZ0JBQVcsR0FBMkIsSUFBSSxlQUFlLENBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdFLGlCQUFZLEdBQTZCLElBQUksZUFBZSxDQUFVLEVBQUUsQ0FBQyxDQUFDO1FBR2hGLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsNkNBQTZDO0lBQzdDLE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELHlDQUF5QztJQUN6QyxPQUFPLENBQUMsSUFBVztRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBVztRQUNqQixNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsOEJBQThCO0lBQzlCLFVBQVUsQ0FBQyxNQUF1QjtRQUNoQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQzFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FDN0IsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHlCQUF5QjtJQUNqQixrQkFBa0IsQ0FBQyxHQUFXLEVBQUUsSUFBUztRQUMvQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDJCQUEyQjtJQUNuQixvQkFBb0I7O1FBQzFCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBQSxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxtQ0FBSSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQUEsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsbUNBQUksSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7MEdBMURVLFlBQVk7OEdBQVosWUFBWSxjQUZYLE1BQU07NEZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBJUG9zdCB9IGZyb20gJy4uL21vZGVscy9wb3N0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlU2VydmljZSB7XG4gIHByaXZhdGUgdXNlcjE6IElVc2VyID0ge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICdNYXJsIE90dG8nLFxuICAgIHRhZzogJ0Bwb2xvQ29uZ2hpYWxlJyxcbiAgICBwaG90bzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tZG8ucG5nJ1xufTtcbiAgcHJpdmF0ZSB1c2VyU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PElVc2VyPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SVVzZXI+KHRoaXMudXNlcjEpO1xuXG4gIHByaXZhdGUgcG9zdHNTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8SVBvc3RbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElQb3N0W10+KFtdKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBDYXJyZWdhciBkYWRvcyBkbyBsb2NhbFN0b3JhZ2UgcXVhbmRvIG8gc2VydmnDp28gw6kgaW5pY2lhbGl6YWRvXG4gICAgdGhpcy5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgLy8gTcOpdG9kb3MgcGFyYSBvYnRlciBPYnNlcnZhYmxlcyBkb3MgZXN0YWRvc1xuICBnZXRVc2VyKCk6IE9ic2VydmFibGU8SVVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldFBvc3RzKCk6IE9ic2VydmFibGU8SVBvc3RbXT4ge1xuICAgIHJldHVybiB0aGlzLnBvc3RzU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8vIE3DqXRvZG9zIHBhcmEgYWRpY2lvbmFyIGRhZG9zIGFvIGVzdGFkb1xuICBhZGRVc2VyKHVzZXI6IElVc2VyKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU3ViamVjdC5uZXh0KHVzZXIpO1xuICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCd1c2VyJywgdXNlcik7XG4gIH1cblxuICBhZGRQb3N0KHBvc3Q6IElQb3N0KTogdm9pZCB7XG4gICAgY29uc3QgcG9zdHMgPSBbLi4udGhpcy5wb3N0c1N1YmplY3QudmFsdWUsIHBvc3RdO1xuICAgIHRoaXMucG9zdHNTdWJqZWN0Lm5leHQocG9zdHMpO1xuICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCdwb3N0cycsIHBvc3RzKTtcbiAgfVxuICBcbiAgLy8gTcOpdG9kbyBwYXJhIGRlbGV0YXIgdW0gcG9zdFxuICBkZWxldGVQb3N0KHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcG9zdHMgPSB0aGlzLnBvc3RzU3ViamVjdC52YWx1ZS5maWx0ZXIoXG4gICAgICAocG9zdCkgPT4gcG9zdC5pZCAhPT0gcG9zdElkXG4gICAgKTtcbiAgICB0aGlzLnBvc3RzU3ViamVjdC5uZXh0KHBvc3RzKTtcbiAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZSgncG9zdHMnLCBwb3N0cyk7XG4gIH1cblxuICAvLyBTYWx2YXIgbm8gbG9jYWxTdG9yYWdlXG4gIHByaXZhdGUgc2F2ZVRvTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIC8vIENhcnJlZ2FyIGRvIGxvY2FsU3RvcmFnZVxuICBwcml2YXRlIGxvYWRGcm9tTG9jYWxTdG9yYWdlKCk6IHZvaWQge1xuICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgPz8gJ1tdJyk7XG4gICAgdGhpcy51c2VyU3ViamVjdC5uZXh0KHVzZXIpO1xuXG4gICAgY29uc3QgcG9zdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3N0cycpID8/ICdbXScpO1xuICAgIHRoaXMucG9zdHNTdWJqZWN0Lm5leHQocG9zdHMpO1xuICB9XG59Il19