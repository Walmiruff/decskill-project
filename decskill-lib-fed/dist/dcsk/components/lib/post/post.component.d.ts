import { ElementRef, EventEmitter } from '@angular/core';
import { IUser } from '../models/user.model';
import * as i0 from "@angular/core";
export declare class PostComponent {
    rows: number;
    user: IUser;
    inputText: string;
    loading: boolean;
    eventPost: EventEmitter<string>;
    textarea: ElementRef;
    constructor();
    onTextareaInput(): void;
    onSubmit(ev: string): void;
    private adjustTextareaHeight;
    static ɵfac: i0.ɵɵFactoryDeclaration<PostComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PostComponent, "dcsk-post", never, { "user": "user"; "inputText": "inputText"; "loading": "loading"; }, { "eventPost": "eventPost"; }, never, never>;
}
