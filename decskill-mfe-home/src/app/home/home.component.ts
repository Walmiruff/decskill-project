import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IUser, StoreService } from '@dcsk/store';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userActive$!: Observable<IUser>;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.userActive$ = this.storeService.getUser();
  }



}