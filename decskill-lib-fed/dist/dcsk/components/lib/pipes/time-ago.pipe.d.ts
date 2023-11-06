import { PipeTransform, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TimeAgoPipe implements PipeTransform, OnDestroy {
    private timer;
    transform(value: Date | undefined): string;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeAgoPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TimeAgoPipe, "timeAgo">;
}
