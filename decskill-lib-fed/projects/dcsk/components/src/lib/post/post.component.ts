import { Component, ViewChild, ElementRef, Input ,Output, EventEmitter } from '@angular/core';
import { IUser } from '../models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'dcsk-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  public rows: number = 1;
  @Input() user$!: Observable<IUser>;
  @Input() inputText: string = '';
  @Input() loading: boolean = false;
  @Output() eventPost = new EventEmitter<string>();
  @ViewChild('textarea') textarea!: ElementRef;

  constructor() { }

  onTextareaInput() {
    this.adjustTextareaHeight();
  }

  onSubmit(ev: string) {
   this.eventPost.emit(ev);
 }
  
  private adjustTextareaHeight() {
    const element = this.textarea.nativeElement;
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
  }


}
