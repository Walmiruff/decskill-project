import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class SecurityService {
    constructor() { }
}
SecurityService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SecurityService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SecurityService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SecurityService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SecurityService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class SecurityComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecurityComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SecurityComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SecurityComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SecurityComponent, selector: "lib-security", ngImport: i0, template: `
    <p>
      security works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SecurityComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-security',
                    template: `
    <p>
      security works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class SecurityModule {
}
SecurityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SecurityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SecurityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SecurityModule, declarations: [SecurityComponent], exports: [SecurityComponent] });
SecurityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SecurityModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SecurityModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SecurityComponent
                    ],
                    imports: [],
                    exports: [
                        SecurityComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of security
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SecurityComponent, SecurityModule, SecurityService };
//# sourceMappingURL=dcsk-security.js.map
