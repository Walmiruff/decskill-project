(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@dcsk/security', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.dcsk = global.dcsk || {}, global.dcsk.security = {}), global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var SecurityService = /** @class */ (function () {
        function SecurityService() {
        }
        return SecurityService;
    }());
    SecurityService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SecurityService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SecurityService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SecurityService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SecurityService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var SecurityComponent = /** @class */ (function () {
        function SecurityComponent() {
        }
        SecurityComponent.prototype.ngOnInit = function () {
        };
        return SecurityComponent;
    }());
    SecurityComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SecurityComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SecurityComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SecurityComponent, selector: "lib-security", ngImport: i0__namespace, template: "\n    <p>\n      security works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SecurityComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-security',
                        template: "\n    <p>\n      security works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var SecurityModule = /** @class */ (function () {
        function SecurityModule() {
        }
        return SecurityModule;
    }());
    SecurityModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SecurityModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SecurityModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SecurityModule, declarations: [SecurityComponent], exports: [SecurityComponent] });
    SecurityModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SecurityModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SecurityModule, decorators: [{
                type: i0.NgModule,
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

    exports.SecurityComponent = SecurityComponent;
    exports.SecurityModule = SecurityModule;
    exports.SecurityService = SecurityService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dcsk-security.umd.js.map
