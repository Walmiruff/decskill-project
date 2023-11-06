import { OnInit, EventEmitter } from '@angular/core';
import { IPost } from '../models/post.model';
import * as i0 from "@angular/core";
export declare class TimelineComponent implements OnInit {
    posts: IPost[];
    eventDelete: EventEmitter<string | number>;
    constructor();
    ngOnInit(): void;
    onClickDelete(id: string | number | undefined): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimelineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimelineComponent, "dcsk-timeline", never, { "posts": "posts"; }, { "eventDelete": "eventDelete"; }, never, never>;
}
