import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from '@dcsk/store';

@Component({
  selector: 'dcsk-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() posts!:IPost[];
  @Output() eventDelete = new EventEmitter<string | number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickDelete(id: string | number | undefined) {
    this.eventDelete.emit(id);
  }

}
