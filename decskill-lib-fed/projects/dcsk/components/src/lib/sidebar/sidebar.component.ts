import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dcsk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() eventRouter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(ev: string) {
    this.eventRouter.emit(ev);
  }

}
