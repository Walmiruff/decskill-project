import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TimeAgoPipe {
    transform(value) {
        if (value !== undefined) {
            if (!(value instanceof Date)) {
                return ''; // Valor não é uma data válida, retorne uma string vazia ou outra mensagem de erro
            }
            const now = new Date();
            const diffInSeconds = Math.floor((now.getTime() - value.getTime()) / 1000);
            if (diffInSeconds < 60) {
                return `${diffInSeconds} s`;
            }
            else if (diffInSeconds < 3600) {
                const minutes = Math.floor(diffInSeconds / 60);
                return `${minutes} min`;
            }
            else {
                return value.toLocaleString();
            }
        }
        else {
            return '';
        }
    }
    ngOnDestroy() {
        if (this.timer) {
            this.timer.unsubscribe();
        }
    }
}
TimeAgoPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimeAgoPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
TimeAgoPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimeAgoPipe, name: "timeAgo", pure: false });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimeAgoPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'timeAgo',
                    pure: false, // Define o pipe como impuro para que seja atualizado em tempo real
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1hZ28ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Rjc2svY29tcG9uZW50cy9zcmMvbGliL3BpcGVzL3RpbWUtYWdvLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBNEIsTUFBTSxlQUFlLENBQUM7O0FBTy9ELE1BQU0sT0FBTyxXQUFXO0lBR3RCLFNBQVMsQ0FBQyxLQUF1QjtRQUMvQixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLElBQUksQ0FBQyxFQUFFO2dCQUM1QixPQUFPLEVBQUUsQ0FBQyxDQUFDLGtGQUFrRjthQUM5RjtZQUVELE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDdkIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUUzRSxJQUFJLGFBQWEsR0FBRyxFQUFFLEVBQUU7Z0JBQ3RCLE9BQU8sR0FBRyxhQUFhLElBQUksQ0FBQzthQUM3QjtpQkFBTSxJQUFJLGFBQWEsR0FBRyxJQUFJLEVBQUU7Z0JBQy9CLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEdBQUcsT0FBTyxNQUFNLENBQUM7YUFDekI7aUJBQU07Z0JBQ0wsT0FBTyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDL0I7U0FDRjthQUFNO1lBQ0gsT0FBTyxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7O3lHQTdCVSxXQUFXO3VHQUFYLFdBQVc7NEZBQVgsV0FBVztrQkFKdkIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsU0FBUztvQkFDZixJQUFJLEVBQUUsS0FBSyxFQUFFLG1FQUFtRTtpQkFDakYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaW50ZXJ2YWwsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0aW1lQWdvJyxcclxuICBwdXJlOiBmYWxzZSwgLy8gRGVmaW5lIG8gcGlwZSBjb21vIGltcHVybyBwYXJhIHF1ZSBzZWphIGF0dWFsaXphZG8gZW0gdGVtcG8gcmVhbFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZUFnb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgdGltZXIhOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogRGF0ZSB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XHJcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpKSB7XHJcbiAgICAgICAgcmV0dXJuICcnOyAvLyBWYWxvciBuw6NvIMOpIHVtYSBkYXRhIHbDoWxpZGEsIHJldG9ybmUgdW1hIHN0cmluZyB2YXppYSBvdSBvdXRyYSBtZW5zYWdlbSBkZSBlcnJvXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgY29uc3QgZGlmZkluU2Vjb25kcyA9IE1hdGguZmxvb3IoKG5vdy5nZXRUaW1lKCkgLSB2YWx1ZS5nZXRUaW1lKCkpIC8gMTAwMCk7XHJcbiAgXHJcbiAgICAgIGlmIChkaWZmSW5TZWNvbmRzIDwgNjApIHtcclxuICAgICAgICByZXR1cm4gYCR7ZGlmZkluU2Vjb25kc30gc2A7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlmZkluU2Vjb25kcyA8IDM2MDApIHtcclxuICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihkaWZmSW5TZWNvbmRzIC8gNjApO1xyXG4gICAgICAgIHJldHVybiBgJHttaW51dGVzfSBtaW5gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMudGltZXIpIHtcclxuICAgICAgdGhpcy50aW1lci51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=