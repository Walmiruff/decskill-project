import { Component, OnInit } from '@angular/core';
import { delay, take, tap } from 'rxjs';

import { IPost, IUser, StoreService } from '@dcsk/store';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userActive!: IUser;
  public loading: boolean = false;
  public clearInput!: string;
  public posts!: IPost[];

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.updateTimeline();
   this.storeService.getUser().subscribe(user => this.userActive = user);
  }

  postTweet(contentMsg: any) {
    this.loading = true;
    const post: IPost = {
      content: contentMsg,
      id: this.generateUniqueId(),
      date: new Date(),
      userId: this.userActive.id,
    };
    this.storeService.addPost(post);
    
    this.updateTimeline();
  }

  updateTimeline() {
    this.storeService.getPosts()
    .pipe(
      delay(1000),
      tap(() =>  this.loading = false),
      take(1)
    ).subscribe(
      {
        next: (postsResp: IPost[]) => this.posts = postsResp,
        error: (err: any): void => {},
        complete: () => this.clearInput = ''
      }
    );
  }

  generateUniqueId(): string {
    const timestamp = new Date().getTime().toString(36);
    const randomChars = Math.random().toString(36).substring(2);
    return timestamp + randomChars;
  }
  
}