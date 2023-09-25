import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IUser } from '../models/user.model';
import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private user1: IUser = {
    id: 1,
    name: 'Marl Otto',
    tag: '@poloConghiale',
    photo: 'https://github.com/mdo.png'
};
  private userSubject: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(this.user1);

  private postsSubject: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([]);

  constructor() {
    // Carregar dados do localStorage quando o serviço é inicializado
    this.loadFromLocalStorage();
  }

  // Métodos para obter Observables dos estados
  getUser(): Observable<IUser> {
    return this.userSubject.asObservable();
  }

  getPosts(): Observable<IPost[]> {
    return this.postsSubject.asObservable();
  }

  // Métodos para adicionar dados ao estado
  addUser(user: IUser): void {
    this.userSubject.next(user);
    this.saveToLocalStorage('user', user);
  }

  addPost(post: IPost): void {
    const posts = [...this.postsSubject.value, post];
    this.postsSubject.next(posts);
    this.saveToLocalStorage('posts', posts);
  }
  
  // Método para deletar um post
  deletePost(postId: number | string): void {
    const posts = this.postsSubject.value.filter(
      (post) => post.id !== postId
    );
    this.postsSubject.next(posts);
    this.saveToLocalStorage('posts', posts);
  }

  // Salvar no localStorage
  private saveToLocalStorage(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Carregar do localStorage
  private loadFromLocalStorage(): void {
    const user = JSON.parse(localStorage.getItem('user') ?? '[]');
    this.userSubject.next(user);

    const posts = JSON.parse(localStorage.getItem('posts') ?? '[]');
    this.postsSubject.next(posts);
  }
}