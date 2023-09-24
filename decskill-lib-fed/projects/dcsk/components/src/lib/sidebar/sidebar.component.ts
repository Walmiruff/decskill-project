import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '@dcsk/store';

@Component({
  selector: 'dcsk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() user!: IUser; 
  @Output() eventRouter = new EventEmitter<string>();
  @Output() changeUser = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(ev: string) {
    this.eventRouter.emit(ev);
  }

  onChangeUser(ev: number) {
    this.changeUser.emit(ev);
  }

}
