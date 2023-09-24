import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, StoreService } from '@dcsk/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public user$!: Observable<IUser>;

  private user1: IUser = {
        id: 1,
        name: '@poloConghiale',
        photo: 'https://github.com/mdo.png'
  };

  private user2: IUser = {
    id: 2,
    name: '@quotesGOT10',
    photo: 'https://github.com/Walmiruff.png'
};


  title = 'host';

  constructor(
    private router: Router,
    private storeService: StoreService
    ) { }

  public ngOnInit(): void {
    this.user$ = this.storeService.getUser();
  }

  public navigateToNewRoute(ev: string) {
    if (ev.length > 0) {
      this.router.navigate([ev]);
    }
  }

  public changeUser(ev: number) {
    if (ev === 1 ) {
      this.storeService.addUser(this.user2);
    } else {
      this.storeService.addUser(this.user1);
    }
  }
}
