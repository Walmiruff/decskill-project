import { EventEmitter } from '@angular/core';
import { IUser } from '../models/user.model';
import * as i0 from "@angular/core";
export declare class SidebarComponent {
    user: IUser;
    eventRouter: EventEmitter<string>;
    changeUser: EventEmitter<number>;
    constructor();
    onClick(ev: string): void;
    onChangeUser(ev: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarComponent, "dcsk-sidebar", never, { "user": "user"; }, { "eventRouter": "eventRouter"; "changeUser": "changeUser"; }, never, never>;
}
