(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@dcsk/components', ['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.dcsk = global.dcsk || {}, global.dcsk.components = {}), global.ng.core, global.ng.common, global.ng.forms));
})(this, (function (exports, i0, i1, i1$1) { 'use strict';

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
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);

    var TimeAgoPipe = /** @class */ (function () {
        function TimeAgoPipe() {
        }
        TimeAgoPipe.prototype.transform = function (value) {
            if (value !== undefined) {
                if (!(value instanceof Date)) {
                    return ''; // Valor não é uma data válida, retorne uma string vazia ou outra mensagem de erro
                }
                var now = new Date();
                var diffInSeconds = Math.floor((now.getTime() - value.getTime()) / 1000);
                if (diffInSeconds < 60) {
                    return diffInSeconds + " s";
                }
                else if (diffInSeconds < 3600) {
                    var minutes = Math.floor(diffInSeconds / 60);
                    return minutes + " min";
                }
                else {
                    return value.toLocaleString();
                }
            }
            else {
                return '';
            }
        };
        TimeAgoPipe.prototype.ngOnDestroy = function () {
            if (this.timer) {
                this.timer.unsubscribe();
            }
        };
        return TimeAgoPipe;
    }());
    TimeAgoPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimeAgoPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    TimeAgoPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimeAgoPipe, name: "timeAgo", pure: false });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimeAgoPipe, decorators: [{
                type: i0.Pipe,
                args: [{
                        name: 'timeAgo',
                        pure: false, // Define o pipe como impuro para que seja atualizado em tempo real
                    }]
            }] });

    var TimelineComponent = /** @class */ (function () {
        function TimelineComponent() {
            this.eventDelete = new i0.EventEmitter();
        }
        TimelineComponent.prototype.ngOnInit = function () {
        };
        TimelineComponent.prototype.onClickDelete = function (id) {
            this.eventDelete.emit(id);
        };
        return TimelineComponent;
    }());
    TimelineComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimelineComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    TimelineComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TimelineComponent, selector: "dcsk-timeline", inputs: { posts: "posts" }, outputs: { eventDelete: "eventDelete" }, ngImport: i0__namespace, template: "<div *ngFor=\"let post of posts?.reverse()\">\n    <div class=\"container-fluid mt-5 mb-2\">\n        <div class=\"row\" style=\"margin-left: 0px;\">\n            <div class=\"col-1 mb-2 d-flex justify-content-between align-items-top px-0\" style=\"width: 40px;\">\n                <img [src]=\"post?.user?.photo\" alt=\"hugenerd\" width=\"30\" height=\"30\" class=\"rounded-circle\">\n            </div>\n            <div class=\"col-11 px-0\">\n                <div class=\"d-flex justify-content-between align-items-end\">\n                    <h6>\n                        {{ post?.user?.name }}\n                        <small class=\"text-muted\">{{ post?.user?.tag }} <i>-</i> {{ post?.date | timeAgo }}</small>\n                    </h6>\n                    <div class=\"dropdown\">\n                        <button class=\"btn btn-sm\" type=\"button\" id=\"dropdownMenuButton\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                                <i class=\"bi bi-three-dots\"></i>\n                        </button>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                          <li (click)=\"onClickDelete(post?.id)\"><a class=\"dropdown-item text-danger\"><i class=\"bi bi-trash3\"></i> Deletar</a></li>\n                          <li><a class=\"dropdown-item\"><i class=\"bi bi-pin-angle\"></i> Fixar no seu Perfil</a></li>\n                          <li><a class=\"dropdown-item\"><i class=\"bi bi-list-check\"></i> Add Remove de Listas</a></li>\n                        </ul>\n                      </div>\n                      \n                </div>\n                <div>\n                    <p class=\"lead\">{{ post?.content }}</p>\n                </div>\n                <div class=\"d-flex justify-content-between align-items-top border-b\">\n                    <div>\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" class=\"r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi\"><g><path d=\"M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z\"></path></g></svg>\n                    </div>\n                    <div>\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" class=\"r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi\"><g><path d=\"M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z\"></path></g></svg>\n                    </div>\n                    <div>\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" class=\"r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi\"><g><path d=\"M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z\"></path></g></svg>\n                    </div>\n                    <div>\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" class=\"r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi\"><g><path d=\"M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z\"></path></g></svg>\n                    </div>\n                    <div class=\"mb-2 mx-2\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" class=\"r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi\"><g><path d=\"M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z\"></path></g></svg>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>", styles: ["svg{fill:gray;width:16px;height:16px;transition:transform .3s}svg:hover{transform:scale(1.2)}h6{margin-bottom:6px}.container-fluid{max-width:598px;margin-left:0}.lead{font-size:1rem;margin-bottom:8px;word-wrap:break-word}.dropdown-item{font-size:12px;font-weight:bold;cursor:pointer}.border-b{border-bottom:2px solid whitesmoke}\n"], directives: [{ type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "timeAgo": TimeAgoPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimelineComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'dcsk-timeline',
                        templateUrl: './timeline.component.html',
                        styleUrls: ['./timeline.component.scss']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { posts: [{
                    type: i0.Input
                }], eventDelete: [{
                    type: i0.Output
                }] } });

    var TimelineModule = /** @class */ (function () {
        function TimelineModule() {
        }
        return TimelineModule;
    }());
    TimelineModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimelineModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    TimelineModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimelineModule, declarations: [TimelineComponent,
            TimeAgoPipe], imports: [i1.CommonModule], exports: [TimelineComponent,
            TimeAgoPipe] });
    TimelineModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimelineModule, imports: [[
                i1.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimelineModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            TimelineComponent,
                            TimeAgoPipe
                        ],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [
                            TimelineComponent,
                            TimeAgoPipe
                        ]
                    }]
            }] });

    var PostComponent = /** @class */ (function () {
        function PostComponent() {
            this.rows = 1;
            this.inputText = '';
            this.loading = false;
            this.eventPost = new i0.EventEmitter();
        }
        PostComponent.prototype.onTextareaInput = function () {
            this.adjustTextareaHeight();
        };
        PostComponent.prototype.onSubmit = function (ev) {
            this.eventPost.emit(ev);
        };
        PostComponent.prototype.adjustTextareaHeight = function () {
            var element = this.textarea.nativeElement;
            element.style.height = 'auto';
            element.style.height = element.scrollHeight + 'px';
        };
        return PostComponent;
    }());
    PostComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PostComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    PostComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PostComponent, selector: "dcsk-post", inputs: { user: "user", inputText: "inputText", loading: "loading" }, outputs: { eventPost: "eventPost" }, viewQueries: [{ propertyName: "textarea", first: true, predicate: ["textarea"], descendants: true }], ngImport: i0__namespace, template: "\n<div class=\"container-fluid mt-3\">\n    <div class=\"row\" style=\"margin-left: 0px;\">\n        <div class=\"col-1 mb-2 d-flex justify-content-between align-items-top px-0\" style=\"width: 40px;\">\n            <img [src]=\"user.photo\" alt=\"hugenerd\" width=\"30\" height=\"30\" class=\"rounded-circle\">\n        </div>\n        <div class=\"col-11 px-0\">\n            <textarea #textarea class=\"form-control form-control-lg\" type=\"text\" placeholder=\"O que est\u00E1 acontecendo?\"\n                aria-label=\"post twitter\" rows=\"1\" style=\"border: none;\" maxlength=\"130\" [(ngModel)]=\"inputText\"\n                (ngModelChange)=\"onTextareaInput()\" [disabled]=\"loading\"></textarea>\n            <a class=\"nav nav-link align-middle px-0 mt-1 d-flex  align-items-center border-b\">\n                <!-- Earth Icon -->\n                <ng-container *ngIf=\"loading === false; else elseTemplateLoading\">\n                <div class=\"mb-3 mx-1\">\n                    <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" class=\"r-1cvl2hr r-4qtqp9 r-yyyyoo r-10ptun7 r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz\"><g><path d=\"M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z\"></path></g>\n                    </svg>\n                </div>\n                    <p><strong>Qualquer pessoa pode responder</strong></p>\n                </ng-container>\n                <ng-template #elseTemplateLoading>\n                    <div class=\"spinner-grow spinner-grow-sm\" role=\"status\">\n                        <span class=\"visually-hidden\">Loading...</span>\n                      </div>\n                </ng-template>\n            </a>\n         \n            <div class=\"container-fluid mt-2\" *ngIf=\"loading === false\">\n                <div class=\"d-flex justify-content-between\">\n                    <div class=\"d-flex justify-content-between\">\n                      <!-- Picture Icon -->\n                      <div>\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n                          <g>\n                            <path\n                              d=\"M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z\">\n                            </path>\n                            <circle cx=\"8.868\" cy=\"8.309\" r=\"1.542\"></circle>\n                          </g>\n                        </svg>\n                      </div>\n                      <!-- Gif Icon -->\n                      <div>\n                        <svg class=\"mx-2\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n                          <g>\n                            <path\n                              d=\"M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z\">\n                            </path>\n                            <path\n                              d=\"M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z\">\n                            </path>\n                          </g>\n                        </svg>\n                      </div>\n                      <!-- Survey Icon -->\n                      <div>\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n                          <g>\n                            <path\n                              d=\"M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z\">\n                            </path>\n                          </g>\n                        </svg>\n                      </div>\n                      <!-- Emoji Icon -->\n                      <div>\n                        <svg class=\"mx-2\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n                          <g>\n                            <path\n                              d=\"M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z\">\n                            </path>\n                            <path\n                              d=\"M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z\">\n                            </path>\n                            <circle cx=\"14.738\" cy=\"9.458\" r=\"1.478\"></circle>\n                            <circle cx=\"9.262\" cy=\"9.458\" r=\"1.478\"></circle>\n                          </g>\n                        </svg>\n                      </div>\n                      <!-- CAlendar Icon -->\n                      <div>\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n                          <g>\n                            <path d=\"M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z\"></path>\n                            <path\n                              d=\"M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z\">\n                            </path>\n                            <path\n                              d=\"M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z\">\n                            </path>\n                            <path\n                              d=\"M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z\">\n                            </path>\n                          </g>\n                        </svg>\n                      </div>\n                    </div>\n                    <!-- Tweet Button -->\n                    <div class=\"align-items-end\">\n                        <div class=\"d-flex justify-content-between align-items-center\">\n                            <small *ngIf=\"!!inputText\" class=\"mx-2\">{{ 130 - inputText.length }}</small>\n                            <button\n                              class=\"btn btn-primary btn-sm rounded-pill\"\n                              type=\"button\"\n                              [disabled]=\"inputText == '' || loading\"\n                              (click)=\"onSubmit(inputText)\"\n                            >\n                              Tweetar\n                            </button>\n                        </div>\n                    </div>\n                  </div>\n            </div>\n        </div>\n    </div>\n</div> ", styles: ["textarea{padding-left:2px}small{font-size:8px;color:gray;font-weight:bold}svg{fill:#0d6efd;width:16px;height:16px;transition:transform .3s}svg:hover{transform:scale(1.2)}p{font-size:12px;margin-bottom:12px}.container-fluid{max-width:598px;margin-left:0}.border-b{border-bottom:2px solid whitesmoke}\n"], directives: [{ type: i1__namespace$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace$1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i1__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PostComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'dcsk-post',
                        templateUrl: './post.component.html',
                        styleUrls: ['./post.component.scss']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { user: [{
                    type: i0.Input
                }], inputText: [{
                    type: i0.Input
                }], loading: [{
                    type: i0.Input
                }], eventPost: [{
                    type: i0.Output
                }], textarea: [{
                    type: i0.ViewChild,
                    args: ['textarea']
                }] } });

    var PostModule = /** @class */ (function () {
        function PostModule() {
        }
        return PostModule;
    }());
    PostModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PostModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PostModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PostModule, declarations: [PostComponent], imports: [i1.CommonModule,
            i1$1.FormsModule], exports: [PostComponent] });
    PostModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PostModule, imports: [[
                i1.CommonModule,
                i1$1.FormsModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PostModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            PostComponent
                        ],
                        imports: [
                            i1.CommonModule,
                            i1$1.FormsModule
                        ],
                        exports: [
                            PostComponent
                        ]
                    }]
            }] });

    var SidebarComponent = /** @class */ (function () {
        function SidebarComponent() {
            this.eventRouter = new i0.EventEmitter();
            this.changeUser = new i0.EventEmitter();
        }
        SidebarComponent.prototype.onClick = function (ev) {
            this.eventRouter.emit(ev);
        };
        SidebarComponent.prototype.onChangeUser = function (ev) {
            this.changeUser.emit(ev);
        };
        return SidebarComponent;
    }());
    SidebarComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SidebarComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SidebarComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SidebarComponent, selector: "dcsk-sidebar", inputs: { user: "user" }, outputs: { eventRouter: "eventRouter", changeUser: "changeUser" }, ngImport: i0__namespace, template: "<div class=\"d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 border-r\">\n    <a class=\"d-flex align-items-center pb-3 mb-md-0 me-md-auto  text-decoration-none\">\n        <i class=\"fs-4 bi-twitter\"></i>\n    </a>\n    <ul class=\"nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start\" id=\"menu\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link align-middle px-0\" (click)=\"onClick('/')\">\n                <i class=\"fs-4 bi-house\"></i> <span class=\"ms-1 d-none d-sm-inline\">P\u00E1gina Inicial</span>\n            </a>\n        </li>\n        <li>\n            <a class=\"nav-link px-0 align-middle\"  (click)=\"onClick('/explore')\">\n                <i class=\"fs-4 bi-search\"></i> <span class=\"ms-1 d-none d-sm-inline\">Explorar</span></a>\n        </li>\n        <li>\n            <a class=\"nav-link px-0 align-middle\" (click)=\"onClick('')\">\n                <i class=\"fs-4 bi-bell\"></i> <span class=\"ms-1 d-none d-sm-inline\">Notifica\u00E7\u00F5es</span> </a>\n        </li>\n    </ul>\n    <hr>\n    <div class=\"dropdown pb-4\">\n        <a class=\"d-flex align-items-center  text-decoration-none dropdown-toggle\" id=\"dropdownUser1\"\n            data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n            <img [src]=\"user.photo\" alt=\"hugenerd\" width=\"30\" height=\"30\" class=\"rounded-circle\">\n            <span class=\"d-none d-sm-inline mx-1\">{{ user.tag }}</span>\n        </a>\n        <ul class=\"dropdown-menu text-small shadow\" aria-labelledby=\"dropdownUser1\">\n            <!-- <li><a class=\"dropdown-item\" (click)=\"onChangeUser(user.id)\">Trocar Usu\u00E1rio</a></li> -->\n            <li><a class=\"dropdown-item\">Configura\u00E7\u00F5es</a></li>\n            <li><a class=\"dropdown-item\">Perfil</a></li>\n            <li>\n                <hr class=\"dropdown-divider\">\n            </li>\n            <li><a class=\"dropdown-item\">Sign out</a></li>\n        </ul>\n    </div>\n</div>", styles: ["a{cursor:pointer}.border-r{border-right:2px solid whitesmoke}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SidebarComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'dcsk-sidebar',
                        templateUrl: './sidebar.component.html',
                        styleUrls: ['./sidebar.component.scss']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { user: [{
                    type: i0.Input
                }], eventRouter: [{
                    type: i0.Output
                }], changeUser: [{
                    type: i0.Output
                }] } });

    var SideBarModule = /** @class */ (function () {
        function SideBarModule() {
        }
        return SideBarModule;
    }());
    SideBarModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SideBarModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SideBarModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SideBarModule, declarations: [SidebarComponent], imports: [i1.CommonModule], exports: [SidebarComponent] });
    SideBarModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SideBarModule, providers: [], imports: [[
                i1.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SideBarModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SidebarComponent
                        ],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [
                            SidebarComponent
                        ],
                        providers: [],
                    }]
            }] });

    var ComponentsModule = /** @class */ (function () {
        function ComponentsModule() {
        }
        return ComponentsModule;
    }());
    ComponentsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ComponentsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ComponentsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ComponentsModule, imports: [SideBarModule,
            PostModule,
            TimelineModule], exports: [SideBarModule,
            PostModule,
            TimelineModule] });
    ComponentsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ComponentsModule, imports: [[
                SideBarModule,
                PostModule,
                TimelineModule
            ], SideBarModule,
            PostModule,
            TimelineModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ComponentsModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [
                            SideBarModule,
                            PostModule,
                            TimelineModule
                        ],
                        exports: [
                            SideBarModule,
                            PostModule,
                            TimelineModule
                        ]
                    }]
            }] });

    /*
     * Public API Surface of components
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ComponentsModule = ComponentsModule;
    exports.PostComponent = PostComponent;
    exports.PostModule = PostModule;
    exports.SideBarModule = SideBarModule;
    exports.SidebarComponent = SidebarComponent;
    exports.TimeAgoPipe = TimeAgoPipe;
    exports.TimelineComponent = TimelineComponent;
    exports.TimelineModule = TimelineModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dcsk-components.umd.js.map
