import { Component, OnInit, ViewChild, ElementRef, Input ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dcsk-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public rows: number = 1;
  @Input() inputText: string = '';
  @Input() loading: boolean = false;
  @Output() eventPost = new EventEmitter<string>();
  @ViewChild('textarea') textarea!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

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
