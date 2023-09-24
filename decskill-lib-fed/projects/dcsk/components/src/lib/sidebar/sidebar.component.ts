import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'dcsk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() user$!: Observable<IUser>;
  @Output() eventRouter = new EventEmitter<string>();
  @Output() changeUser = new EventEmitter<number>();

  constructor() { }

  onClick(ev: string) {
    this.eventRouter.emit(ev);
  }

  onChangeUser(ev: number) {
    this.changeUser.emit(ev);
  }

}
