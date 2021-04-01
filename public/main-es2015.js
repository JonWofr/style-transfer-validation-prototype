(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");





const routes = [
    {
        path: '',
        component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'PetAI';
        this.auth.onAuthStateChanged((user) => {
            if (!user) {
                this.auth.signInAnonymously();
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_create_create_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create/create.module */ "./src/app/components/create/create.module.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/analytics */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["BUCKET"], useValue: 'petai-validation.appspot.com' },
        _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_11__["ScreenTrackingService"],
        _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_11__["UserTrackingService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _components_create_create_module__WEBPACK_IMPORTED_MODULE_5__["CreateModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_11__["AngularFireAnalyticsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _components_create_create_module__WEBPACK_IMPORTED_MODULE_5__["CreateModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
        _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_11__["AngularFireAnalyticsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _components_create_create_module__WEBPACK_IMPORTED_MODULE_5__["CreateModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
                    _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_11__["AngularFireAnalyticsModule"],
                ],
                providers: [
                    { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["BUCKET"], useValue: 'petai-validation.appspot.com' },
                    _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_11__["ScreenTrackingService"],
                    _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_11__["UserTrackingService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/create/components/image-style-slider/image-style-slider.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/create/components/image-style-slider/image-style-slider.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ImageStyleSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStyleSliderComponent", function() { return ImageStyleSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _submit_submit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../submit/submit.component */ "./src/app/components/create/components/submit/submit.component.ts");
/* harmony import */ var _shared_components_style_circle_style_circle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/style-circle/style-circle.component */ "./src/app/components/shared/components/style-circle/style-circle.component.ts");







const _c0 = ["swiperSlide"];
const _c1 = ["imgSwiper"];
const _c2 = ["styleSwiper"];
function ImageStyleSliderComponent_create_submit_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "create-submit", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitForm", function ImageStyleSliderComponent_create_submit_5_Template_create_submit_submitForm_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.submitForm.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleImageName", ctx_r0.styleImages[ctx_r0.selectedStyleIndex] == null ? null : ctx_r0.styleImages[ctx_r0.selectedStyleIndex].artist)("styleImageUrl", ctx_r0.styleImages[ctx_r0.selectedStyleIndex] == null ? null : ctx_r0.styleImages[ctx_r0.selectedStyleIndex].image.publicUrl);
} }
function ImageStyleSliderComponent_div_6_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImageStyleSliderComponent_div_6_div_2_shared_style_circle_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "shared-style-circle", 15);
} if (rf & 2) {
    const styleImage_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleImage", styleImage_r11)("verticalLayout", !ctx_r10.isHorizontalMode);
} }
function ImageStyleSliderComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImageStyleSliderComponent_div_6_div_2_shared_style_circle_3_Template, 1, 2, "shared-style-circle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("animate__fadeInUpBig", !ctx_r5.isHorizontalMode)("animate__fadeInRightBig", ctx_r5.isHorizontalMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.styleImages);
} }
function ImageStyleSliderComponent_div_6_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Artworks with this Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImageStyleSliderComponent_div_6_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Created Artworks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImageStyleSliderComponent_div_6_div_5_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);
} if (rf & 2) {
    const contentImage_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", contentImage_r14.image.publicUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ImageStyleSliderComponent_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImageStyleSliderComponent_div_6_div_5_img_3_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("animate__fadeInUpBig", !ctx_r8.isHorizontalMode)("animate__fadeInRightBig", ctx_r8.isHorizontalMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.contentImages);
} }
function ImageStyleSliderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageStyleSliderComponent_div_6_h2_1_Template, 2, 0, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageStyleSliderComponent_div_6_div_2_Template, 4, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImageStyleSliderComponent_div_6_h2_3_Template, 2, 0, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImageStyleSliderComponent_div_6_h2_4_Template, 2, 0, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImageStyleSliderComponent_div_6_div_5_Template, 4, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.uploadedImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.imageActive && (ctx_r1.styleImages == null ? null : ctx_r1.styleImages.length) > 0 && ctx_r1.uploadedImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedStyleIndex !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.uploadedImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedStyleIndex !== undefined || !ctx_r1.uploadedImage);
} }
const _c3 = function (a0) { return { "animate__animated animate__pulse animate__infinite": a0 }; };
swiper_core__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Navigation"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Pagination"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["A11y"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Thumbs"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Controller"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Mousewheel"],
]);
class ImageStyleSliderComponent {
    constructor(route) {
        this.route = route;
        this.clickAddImageButton = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedImageIndex = 0;
        this.selectedImageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeSelectedStyleIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contentImages = [];
        this.styleImages = [];
        this.uploadedImage = false;
        this.showAttentionSeekerUpload = true;
        this.shouldShowFitStyleView = false;
        this.changeShouldShowFitStyleView = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isHorizontalMode = true;
        this.imageActive = false;
    }
    set isUploadingImage(uploading) {
        if (this.imgSwiper) {
            this.imgSwiper.slideTo(0);
            this.updateSelectedImageIndex(0);
            setTimeout(() => {
                this.imgSwiper.update();
            }, 1000);
        }
        this._isUploadingImage = uploading;
    }
    get isUploadingImage() {
        return this._isUploadingImage;
    }
    ngOnInit() { }
    set swiperSlide(el) { }
    set _imgSwiper(el) {
        if (el) {
            this.imgSwiper = new swiper_core__WEBPACK_IMPORTED_MODULE_1__["Swiper"]('.img-swiper', {
                slidesPerView: 'auto',
                spaceBetween: 16,
                freeMode: true,
                mousewheel: true,
                slidesOffsetAfter: 16,
                on: {
                    afterInit: () => {
                        setTimeout(() => {
                            this.imgSwiper.update();
                        });
                    },
                },
                breakpoints: {
                    1000: {
                        direction: 'vertical',
                    },
                },
            });
            this.isHorizontalMode = this.imgSwiper.params.direction == 'horizontal';
        }
    }
    set _styleSwiper(el) {
        if (el) {
            this.styleSwiper = new swiper_core__WEBPACK_IMPORTED_MODULE_1__["Swiper"]('.style-swiper', {
                slidesPerView: 'auto',
                spaceBetween: 16,
                freeMode: true,
                mousewheel: true,
                slidesOffsetAfter: 16,
                breakpoints: {
                    1000: {
                        direction: 'vertical',
                        slidesPerColumnFill: 'row',
                        spaceBetween: 32,
                        slidesPerColumn: 2,
                    },
                },
                on: {
                    click: (swiper) => {
                        this.updateSelectedStyleIndex(swiper.clickedIndex);
                    },
                    afterInit: () => {
                        setTimeout(() => {
                            this.styleSwiper.update();
                        });
                    },
                },
            });
            this.isHorizontalMode = this.styleSwiper.params.direction == 'horizontal';
        }
    }
    toggleImage(shouldShowImages) {
        this.imageActive = shouldShowImages;
    }
    finished() {
        if (this.selectedStyleIndex !== undefined) {
            this.route.navigate(['shop/1']);
        }
        else {
            alert('please select a style first');
        }
    }
    updateSelectedStyleIndex(index) {
        if (index !== undefined) {
            this.selectedStyleIndex = index;
            this.changeSelectedStyleIndex.emit(index);
            setTimeout(() => {
                this.imgSwiper.update();
                this.imgSwiper.slideTo(0);
            }, 200);
        }
    }
    updateSelectedImageIndex(index) {
        if (index !== undefined) {
            this.selectedImageIndex = index;
            this.selectedImageIndexChange.emit(index);
        }
    }
    openUploadModal() {
        this.clickAddImageButton.emit();
        this.showAttentionSeekerUpload = false;
    }
}
ImageStyleSliderComponent.ɵfac = function ImageStyleSliderComponent_Factory(t) { return new (t || ImageStyleSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ImageStyleSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageStyleSliderComponent, selectors: [["create-image-style-slider"]], viewQuery: function ImageStyleSliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.swiperSlide = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._imgSwiper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._styleSwiper = _t.first);
    } }, inputs: { selectedImageIndex: "selectedImageIndex", selectedStyleIndex: "selectedStyleIndex", contentImages: "contentImages", styleImages: "styleImages", uploadedImage: "uploadedImage", shouldShowFitStyleView: "shouldShowFitStyleView", isUploadingImage: "isUploadingImage" }, outputs: { clickAddImageButton: "clickAddImageButton", selectedImageIndexChange: "selectedImageIndexChange", changeSelectedStyleIndex: "changeSelectedStyleIndex", changeShouldShowFitStyleView: "changeShouldShowFitStyleView", submitForm: "submitForm" }, decls: 7, vars: 12, consts: [[1, "slider-wrapper"], [1, "add-btn", 3, "ngClass", "click"], ["src", "/assets/icons/image-add.svg", "alt", ""], [1, "apply-style-btn", 3, "click"], [3, "styleImageName", "styleImageUrl", "submitForm", 4, "ngIf"], ["class", "overflow-hide", 4, "ngIf"], [3, "styleImageName", "styleImageUrl", "submitForm"], [1, "overflow-hide"], [4, "ngIf"], ["class", "animate__animated swiper-container swiper-img-style style-swiper", 3, "animate__fadeInUpBig", "animate__fadeInRightBig", 4, "ngIf"], ["class", "animate__animated swiper-container swiper-img-style img-swiper", 3, "animate__fadeInUpBig", "animate__fadeInRightBig", 4, "ngIf"], [1, "animate__animated", "swiper-container", "swiper-img-style", "style-swiper"], ["styleSwiper", ""], [1, "swiper-wrapper"], ["class", "swiper-slide", 3, "styleImage", "verticalLayout", 4, "ngFor", "ngForOf"], [1, "swiper-slide", 3, "styleImage", "verticalLayout"], [1, "animate__animated", "swiper-container", "swiper-img-style", "img-swiper"], ["imgSwiper", ""], ["alt", "", "class", "swiper-slide selected", 3, "src", 4, "ngFor", "ngForOf"], ["alt", "", 1, "swiper-slide", "selected", 3, "src"]], template: function ImageStyleSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageStyleSliderComponent_Template_button_click_1_listener() { return ctx.openUploadModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageStyleSliderComponent_Template_button_click_3_listener() { return ctx.changeShouldShowFitStyleView.emit(!ctx.shouldShowFitStyleView); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImageStyleSliderComponent_create_submit_5_Template, 1, 2, "create-submit", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ImageStyleSliderComponent_div_6_Template, 6, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("add-btn-hide", ctx.shouldShowFitStyleView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, ctx.showAttentionSeekerUpload));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-hide", ctx.selectedStyleIndex === undefined)("btn-back", ctx.shouldShowFitStyleView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.shouldShowFitStyleView ? "Back" : (ctx.styleImages[ctx.selectedStyleIndex] == null ? null : ctx.styleImages[ctx.selectedStyleIndex].artist) + "Style", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldShowFitStyleView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.shouldShowFitStyleView);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _submit_submit_component__WEBPACK_IMPORTED_MODULE_4__["SubmitComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_style_circle_style_circle_component__WEBPACK_IMPORTED_MODULE_5__["StyleCircleComponent"]], styles: ["div.slider-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #1f2530;\n  border-radius: 20px 20px 0 0;\n  padding: 2rem 0 0 1rem;\n  box-sizing: border-box;\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  z-index: 1;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: \"pf-reg\";\n  font-weight: 400;\n  font-size: 1.8rem;\n  color: white;\n  margin-bottom: 2rem;\n}\n\ndiv.overflow-hide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\ndiv.loading-indicator[_ngcontent-%COMP%] {\n  width: 50%;\n  flex: 1;\n  height: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\ndiv.loading-indicator[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: auto;\n  height: 100%;\n}\n\n.swiper-img-style[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  margin-bottom: 2.5rem;\n}\n\n.swiper-img-style.img-swiper[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.swiper-img-style.img-swiper[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 100%;\n  width: auto;\n  opacity: 0.6;\n  transition: 300ms;\n}\n\n.swiper-img-style.img-swiper[_ngcontent-%COMP%]   .swiper-slide.selected[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.swiper-img-style.img-swiper[_ngcontent-%COMP%]   .swiper-slide.loading-container[_ngcontent-%COMP%] {\n  width: 33%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n  background-color: #f1f2f3;\n  opacity: 1;\n}\n\n.swiper-img-style.img-swiper[_ngcontent-%COMP%]   .swiper-slide.loading-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 0;\n  width: 100%;\n}\n\n.swiper-img-style.style-swiper[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 100%;\n  width: auto;\n  overflow: unset;\n}\n\n.img-style-toggle[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 1rem;\n  margin-bottom: 2rem;\n  box-sizing: border-box;\n  display: flex;\n}\n\n.img-style-toggle[_ngcontent-%COMP%]   button.toggle-btn[_ngcontent-%COMP%] {\n  outline: none;\n  background-color: transparent;\n  border: 2px solid aliceblue;\n  font-family: m-bold;\n  font-size: 1rem;\n  color: aliceblue;\n  padding: 0.8rem;\n  cursor: pointer;\n  transition: 200ms;\n  width: 50%;\n}\n\n.img-style-toggle[_ngcontent-%COMP%]   button.toggle-btn.toggle-active[_ngcontent-%COMP%] {\n  background-color: aliceblue;\n  color: #1f2530;\n}\n\nbutton.finished-btn[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  outline: none;\n  background-color: #ef233c;\n  border: none;\n  font-family: m-bold;\n  border-radius: 3px;\n  font-size: 1.2rem;\n  color: aliceblue;\n  padding: 0.8rem;\n  cursor: pointer;\n  transition: 200ms;\n  height: unset;\n  width: calc(100% - 1rem);\n}\n\nbutton.finished-btn.low-visibility[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\nbutton.add-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: -6rem;\n  left: 1rem;\n  position: absolute;\n  width: 5rem;\n  height: 5rem;\n  border-radius: 50%;\n  padding-top: 0.8rem;\n  padding-bottom: 0.8rem;\n  color: white;\n  margin-bottom: 0.5rem;\n  font-size: 4rem;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  font-family: m-reg;\n  background-color: #ef233c;\n  z-index: -1;\n  transition: 500ms;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\nbutton.add-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n\nbutton.add-btn.add-btn-hide[_ngcontent-%COMP%] {\n  left: -100%;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.apply-style-btn[_ngcontent-%COMP%] {\n  height: 4rem;\n  width: 60%;\n  border-radius: 50px;\n  background-color: #ef233c;\n  color: white;\n  font-family: m-reg;\n  font-size: 1.5rem;\n  top: -5.5rem;\n  right: 1rem;\n  position: absolute;\n  border: none;\n  box-shadow: 0px 3px 6px #00000029;\n  transition: 500ms;\n  z-index: -1;\n  overflow: hidden;\n}\n\n.apply-style-btn.btn-hide[_ngcontent-%COMP%] {\n  top: -200%;\n}\n\n.apply-style-btn.btn-back[_ngcontent-%COMP%] {\n  width: 30%;\n  right: calc(100% - 30% - 1rem);\n}\n\n@media (min-width: 1000px) {\n  div.loading-indicator[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: 1;\n    width: 0;\n  }\n  div.loading-indicator[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: auto;\n    height: auto;\n  }\n\n  div.slider-wrapper[_ngcontent-%COMP%] {\n    padding: 2rem;\n    padding-bottom: 0;\n  }\n  div.slider-wrapper[_ngcontent-%COMP%]   .swiper-img-style.img-swiper[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n    height: auto;\n    width: 100%;\n  }\n  div.slider-wrapper[_ngcontent-%COMP%]   .swiper-img-style.img-swiper[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]:not(.selected):hover {\n    opacity: 0.8;\n  }\n  div.slider-wrapper[_ngcontent-%COMP%]   .swiper-img-style.style-swiper[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n  div.slider-wrapper[_ngcontent-%COMP%]   .swiper-img-style.style-swiper[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    width: calc(50% - 16px);\n  }\n  div.slider-wrapper[_ngcontent-%COMP%]   div.img-style-toggle[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  div.slider-wrapper[_ngcontent-%COMP%]   button.finished-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  div.slider-wrapper[_ngcontent-%COMP%]   button.add-btn[_ngcontent-%COMP%] {\n    top: 1rem;\n    left: unset;\n    right: -7rem;\n  }\n  div.slider-wrapper[_ngcontent-%COMP%]   button.add-btn.add-btn-hide[_ngcontent-%COMP%] {\n    top: -100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY29tcG9uZW50cy9pbWFnZS1zdHlsZS1zbGlkZXIvQzpcXFVzZXJzXFxqb25hc1xcRG9jdW1lbnRzXFxnaXQtcHJvamVjdHNcXHN0eWxlLXRyYW5zZmVyLXZhbGlkYXRpb24tcHJvdG90eXBlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmVhdGVcXGNvbXBvbmVudHNcXGltYWdlLXN0eWxlLXNsaWRlclxcaW1hZ2Utc3R5bGUtc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS9jb21wb25lbnRzL2ltYWdlLXN0eWxlLXNsaWRlci9DOlxcVXNlcnNcXGpvbmFzXFxEb2N1bWVudHNcXGdpdC1wcm9qZWN0c1xcc3R5bGUtdHJhbnNmZXItdmFsaWRhdGlvbi1wcm90b3R5cGUvc3JjXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY29tcG9uZW50cy9pbWFnZS1zdHlsZS1zbGlkZXIvaW1hZ2Utc3R5bGUtc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLHlCQ0ttQjtFREpuQiw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FFQUY7O0FGR0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUVBRjs7QUZHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUVBRjs7QUZHQTtFQUNFLFVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRUFGOztBRkVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRUFKOztBRklBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBRURGOztBRklBO0VBQ0UsYUFBQTtBRURGOztBRkVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FFQUo7O0FGRUk7RUFDRSxVQUFBO0FFQU47O0FGR0k7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FFRE47O0FGR007RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FFRFI7O0FGUUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FFTEo7O0FGU0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBRU5GOztBRk9FO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FFTEo7O0FGT0k7RUFDRSwyQkFBQTtFQUNBLGNDNUdlO0FDdUdyQjs7QUZVQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQzNIYztFRDRIZCxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FFUEY7O0FGU0U7RUFDRSxZQUFBO0FFUEo7O0FGV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQy9KYztFRGdLZCxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBRVJGOztBRlVFO0VBQ0UsV0FBQTtBRVJKOztBRldFO0VBQ0UsV0FBQTtBRVRKOztBRmFBO0VBQ0UsYUFBQTtBRVZGOztBRmFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ3JMYztFRHNMZCxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRVZGOztBRllFO0VBQ0UsVUFBQTtBRVZKOztBRmFFO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FFWEo7O0FGZUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtFRVpGO0VGY0U7SUFDRSxtQkFBQTtJQUNBLFlBQUE7RUVaSjs7RUZnQkE7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7RUViRjtFRmdCSTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VFZE47RUZlTTtJQUNFLFlBQUE7RUViUjtFRm1CSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VFakJOO0VGbUJJO0lBQ0UsMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsdUJBQUE7RUVqQk47RUZxQkU7SUFDRSxnQkFBQTtFRW5CSjtFRnFCRTtJQUNFLGFBQUE7RUVuQko7RUZzQkU7SUFDRSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUVwQko7RUZzQkk7SUFDRSxVQUFBO0VFcEJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS9jb21wb25lbnRzL2ltYWdlLXN0eWxlLXNsaWRlci9pbWFnZS1zdHlsZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vY29sb3JzLnNjc3NcIjtcclxuZGl2LnNsaWRlci13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2VzdC1mb250LWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcbiAgcGFkZGluZzogMnJlbSAwIDAgMXJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LWZhbWlseTogXCJwZi1yZWdcIjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG5kaXYub3ZlcmZsb3ctaGlkZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5kaXYubG9hZGluZy1pbmRpY2F0b3Ige1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZmxleDogMTtcclxuICBoZWlnaHQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5zd2lwZXItaW1nLXN0eWxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxufVxyXG5cclxuLnN3aXBlci1pbWctc3R5bGUuaW1nLXN3aXBlciB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XHJcblxyXG4gICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjJmMztcclxuICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3dpcGVyLWltZy1zdHlsZS5zdHlsZS1zd2lwZXIge1xyXG4gIC5zd2lwZXItc2xpZGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogdW5zZXQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaW1nLXN0eWxlLXRvZ2dsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBidXR0b24udG9nZ2xlLWJ0biB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBhbGljZWJsdWU7XHJcbiAgICBmb250LWZhbWlseTogbS1ib2xkO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDIwMG1zO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAmLnRvZ2dsZS1hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICAgIGNvbG9yOiAkZGFya2VzdC1mb250LWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uLmZpbmlzaGVkLWJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LWZhbWlseTogbS1ib2xkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIHBhZGRpbmc6IDAuOHJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMjAwbXM7XHJcbiAgaGVpZ2h0OiB1bnNldDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XHJcblxyXG4gICYubG93LXZpc2liaWxpdHkge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uLmFkZC1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0b3A6IC02cmVtO1xyXG4gIGxlZnQ6IDFyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIGhlaWdodDogNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcGFkZGluZy10b3A6IDAuOHJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC44cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LWZhbWlseTogbS1yZWc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgdHJhbnNpdGlvbjogNTAwbXM7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDNyZW07XHJcbiAgfVxyXG5cclxuICAmLmFkZC1idG4taGlkZSB7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYXBwbHktc3R5bGUtYnRuIHtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgd2lkdGg6IDYwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogbS1yZWc7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgdG9wOiAtNS41cmVtO1xyXG4gIHJpZ2h0OiAxcmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gIHRyYW5zaXRpb246IDUwMG1zO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICYuYnRuLWhpZGUge1xyXG4gICAgdG9wOiAtMjAwJTtcclxuICB9XHJcblxyXG4gICYuYnRuLWJhY2sge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHJpZ2h0OiBjYWxjKDEwMCUgLSAzMCUgLSAxcmVtKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICBkaXYubG9hZGluZy1pbmRpY2F0b3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgd2lkdGg6IDA7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2LnNsaWRlci13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuXHJcbiAgICAuc3dpcGVyLWltZy1zdHlsZS5pbWctc3dpcGVyIHtcclxuICAgICAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICY6bm90KC5zZWxlY3RlZCk6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zd2lwZXItaW1nLXN0eWxlLnN0eWxlLXN3aXBlciB7XHJcbiAgICAgIC5zd2lwZXItY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxNnB4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpdi5pbWctc3R5bGUtdG9nZ2xlIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5maW5pc2hlZC1idG4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5hZGQtYnRuIHtcclxuICAgICAgdG9wOiAxcmVtO1xyXG4gICAgICBsZWZ0OiB1bnNldDtcclxuICAgICAgcmlnaHQ6IC03cmVtO1xyXG5cclxuICAgICAgJi5hZGQtYnRuLWhpZGUge1xyXG4gICAgICAgIHRvcDogLTEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGFsaWNlLWJsdWU6ICNlZGYyZjQ7XHJcbiRwcmltYXJ5LWNvbG9yOiAjZWYyMzNjO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMmIyZDQyO1xyXG4kbWFuYXRlZS1ncmV5OiAjOGQ5OWFlO1xyXG5cclxuJGxpZ2h0LWRhcmstZm9udC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbiRkYXJrLWZvbnQtY29sb3I6ICMyOTMyNDE7XHJcbiRkYXJrZXN0LWZvbnQtY29sb3I6ICMxZjI1MzA7XHJcbiIsImRpdi5zbGlkZXItd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyNTMwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICBwYWRkaW5nOiAycmVtIDAgMCAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJwZi1yZWdcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuZGl2Lm92ZXJmbG93LWhpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5kaXYubG9hZGluZy1pbmRpY2F0b3Ige1xuICB3aWR0aDogNTAlO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuZGl2LmxvYWRpbmctaW5kaWNhdG9yIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItaW1nLXN0eWxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cblxuLnN3aXBlci1pbWctc3R5bGUuaW1nLXN3aXBlciB7XG4gIGhlaWdodDogMzAwcHg7XG59XG4uc3dpcGVyLWltZy1zdHlsZS5pbWctc3dpcGVyIC5zd2lwZXItc2xpZGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIG9wYWNpdHk6IDAuNjtcbiAgdHJhbnNpdGlvbjogMzAwbXM7XG59XG4uc3dpcGVyLWltZy1zdHlsZS5pbWctc3dpcGVyIC5zd2lwZXItc2xpZGUuc2VsZWN0ZWQge1xuICBvcGFjaXR5OiAxO1xufVxuLnN3aXBlci1pbWctc3R5bGUuaW1nLXN3aXBlciAuc3dpcGVyLXNsaWRlLmxvYWRpbmctY29udGFpbmVyIHtcbiAgd2lkdGg6IDMzJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmYzO1xuICBvcGFjaXR5OiAxO1xufVxuLnN3aXBlci1pbWctc3R5bGUuaW1nLXN3aXBlciAuc3dpcGVyLXNsaWRlLmxvYWRpbmctY29udGFpbmVyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zd2lwZXItaW1nLXN0eWxlLnN0eWxlLXN3aXBlciAuc3dpcGVyLXNsaWRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBvdmVyZmxvdzogdW5zZXQ7XG59XG5cbi5pbWctc3R5bGUtdG9nZ2xlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaW1nLXN0eWxlLXRvZ2dsZSBidXR0b24udG9nZ2xlLWJ0biB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCBhbGljZWJsdWU7XG4gIGZvbnQtZmFtaWx5OiBtLWJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgcGFkZGluZzogMC44cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDIwMG1zO1xuICB3aWR0aDogNTAlO1xufVxuLmltZy1zdHlsZS10b2dnbGUgYnV0dG9uLnRvZ2dsZS1idG4udG9nZ2xlLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgY29sb3I6ICMxZjI1MzA7XG59XG5cbmJ1dHRvbi5maW5pc2hlZC1idG4ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYyMzNjO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtLWJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIHBhZGRpbmc6IDAuOHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgaGVpZ2h0OiB1bnNldDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xufVxuYnV0dG9uLmZpbmlzaGVkLWJ0bi5sb3ctdmlzaWJpbGl0eSB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuYnV0dG9uLmFkZC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiAtNnJlbTtcbiAgbGVmdDogMXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNXJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmctdG9wOiAwLjhyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjhyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LXNpemU6IDRyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogbS1yZWc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjIzM2M7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiA1MDBtcztcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xufVxuYnV0dG9uLmFkZC1idG4gaW1nIHtcbiAgd2lkdGg6IDNyZW07XG59XG5idXR0b24uYWRkLWJ0bi5hZGQtYnRuLWhpZGUge1xuICBsZWZ0OiAtMTAwJTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXBwbHktc3R5bGUtYnRuIHtcbiAgaGVpZ2h0OiA0cmVtO1xuICB3aWR0aDogNjAlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYyMzNjO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBtLXJlZztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRvcDogLTUuNXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICB6LWluZGV4OiAtMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hcHBseS1zdHlsZS1idG4uYnRuLWhpZGUge1xuICB0b3A6IC0yMDAlO1xufVxuLmFwcGx5LXN0eWxlLWJ0bi5idG4tYmFjayB7XG4gIHdpZHRoOiAzMCU7XG4gIHJpZ2h0OiBjYWxjKDEwMCUgLSAzMCUgLSAxcmVtKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuICBkaXYubG9hZGluZy1pbmRpY2F0b3Ige1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgZGl2LmxvYWRpbmctaW5kaWNhdG9yIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBkaXYuc2xpZGVyLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbiAgZGl2LnNsaWRlci13cmFwcGVyIC5zd2lwZXItaW1nLXN0eWxlLmltZy1zd2lwZXIgLnN3aXBlci1zbGlkZSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGRpdi5zbGlkZXItd3JhcHBlciAuc3dpcGVyLWltZy1zdHlsZS5pbWctc3dpcGVyIC5zd2lwZXItc2xpZGU6bm90KC5zZWxlY3RlZCk6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICBkaXYuc2xpZGVyLXdyYXBwZXIgLnN3aXBlci1pbWctc3R5bGUuc3R5bGUtc3dpcGVyIC5zd2lwZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgZGl2LnNsaWRlci13cmFwcGVyIC5zd2lwZXItaW1nLXN0eWxlLnN0eWxlLXN3aXBlciAuc3dpcGVyLXNsaWRlIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDE2cHgpO1xuICB9XG4gIGRpdi5zbGlkZXItd3JhcHBlciBkaXYuaW1nLXN0eWxlLXRvZ2dsZSB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuICBkaXYuc2xpZGVyLXdyYXBwZXIgYnV0dG9uLmZpbmlzaGVkLWJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBkaXYuc2xpZGVyLXdyYXBwZXIgYnV0dG9uLmFkZC1idG4ge1xuICAgIHRvcDogMXJlbTtcbiAgICBsZWZ0OiB1bnNldDtcbiAgICByaWdodDogLTdyZW07XG4gIH1cbiAgZGl2LnNsaWRlci13cmFwcGVyIGJ1dHRvbi5hZGQtYnRuLmFkZC1idG4taGlkZSB7XG4gICAgdG9wOiAtMTAwJTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageStyleSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'create-image-style-slider',
                templateUrl: './image-style-slider.component.html',
                styleUrls: ['./image-style-slider.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { clickAddImageButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], selectedImageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedImageIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], selectedStyleIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeSelectedStyleIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], contentImages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styleImages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], uploadedImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], shouldShowFitStyleView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeShouldShowFitStyleView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isUploadingImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submitForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], swiperSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['swiperSlide']
        }], _imgSwiper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imgSwiper']
        }], _styleSwiper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['styleSwiper']
        }] }); })();


/***/ }),

/***/ "./src/app/components/create/components/response-modal/response-modal.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/create/components/response-modal/response-modal.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ResponseModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseModalComponent", function() { return ResponseModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ResponseModalComponent {
    constructor() {
        this.hasCreatedNewDocument = false;
        this.submittedImagesCount = 0;
        this.maxSubmittedImagesCount = 3;
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clickSendAnotherButton = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
ResponseModalComponent.ɵfac = function ResponseModalComponent_Factory(t) { return new (t || ResponseModalComponent)(); };
ResponseModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResponseModalComponent, selectors: [["create-response-modal"]], inputs: { hasCreatedNewDocument: "hasCreatedNewDocument", submittedImagesCount: "submittedImagesCount", maxSubmittedImagesCount: "maxSubmittedImagesCount" }, outputs: { closeModal: "closeModal", clickSendAnotherButton: "clickSendAnotherButton" }, decls: 10, vars: 4, consts: [[1, "header"], ["src", "/assets/icons/close.svg", "alt", "close button", 3, "click"], [3, "disabled", "click"]], template: function ResponseModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResponseModalComponent_Template_img_click_3_listener() { return ctx.closeModal.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResponseModalComponent_Template_button_click_6_listener() { return ctx.clickSendAnotherButton.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Send another ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hasCreatedNewDocument ? "Thank you" : "Ooops");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hasCreatedNewDocument ? "We will send you the stylized version within a few hours." : "You have already submitted the maximum number of images.", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submittedImagesCount >= ctx.maxSubmittedImagesCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.maxSubmittedImagesCount - ctx.submittedImagesCount, " remaining)");
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 80vh;\n  background-color: #1f2530;\n  position: fixed;\n  bottom: 0;\n  z-index: 5;\n  border-radius: 30px 30px 0 0;\n  padding: 2rem 1rem 0rem 1rem;\n  box-sizing: border-box;\n  overflow-y: scroll;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: pf-reg;\n  font-size: 2rem;\n  font-weight: 400;\n  text-align: center;\n  color: white;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  height: 2rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  cursor: pointer;\n}\n\np[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.2rem;\n  font-family: m-reg;\n  margin-bottom: 2rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 300px;\n  margin: 0 auto;\n  height: 3.5rem;\n  border-radius: 5px;\n  background-color: #ef233c;\n  font-family: m-bold;\n  font-size: 1.2rem;\n  text-align: center;\n  color: white;\n  border: none;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n\nbutton[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-family: m-reg;\n}\n\n.checkbox-container[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n@media (min-width: 1000px) {\n  [_nghost-%COMP%] {\n    width: calc(100% - 29rem);\n    height: 80vh;\n    right: calc((100% - 25rem) / 2 - calc(100% - 29rem) / 2);\n    overflow-y: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY29tcG9uZW50cy9yZXNwb25zZS1tb2RhbC9DOlxcVXNlcnNcXGpvbmFzXFxEb2N1bWVudHNcXGdpdC1wcm9qZWN0c1xcc3R5bGUtdHJhbnNmZXItdmFsaWRhdGlvbi1wcm90b3R5cGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNyZWF0ZVxcY29tcG9uZW50c1xccmVzcG9uc2UtbW9kYWxcXHJlc3BvbnNlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS9jb21wb25lbnRzL3Jlc3BvbnNlLW1vZGFsL0M6XFxVc2Vyc1xcam9uYXNcXERvY3VtZW50c1xcZ2l0LXByb2plY3RzXFxzdHlsZS10cmFuc2Zlci12YWxpZGF0aW9uLXByb3RvdHlwZS9zcmNcXGNvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS9jb21wb25lbnRzL3Jlc3BvbnNlLW1vZGFsL3Jlc3BvbnNlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNDbUI7RURBbkIsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUVERjs7QUZJQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FFREY7O0FGSUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FFREY7O0FGR0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUVESjs7QUZLQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUVGRjs7QUZLQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkN2RGM7RUR3RGQsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUVGRjs7QUZHRTtFQUNFLFlBQUE7QUVESjs7QUZHRTtFQUNFLGtCQUFBO0FFREo7O0FGS0E7RUFDRSxtQkFBQTtBRUZGOztBRktBO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLFlBQUE7SUFDQSx3REFBQTtJQUNBLGdCQUFBO0VFRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlL2NvbXBvbmVudHMvcmVzcG9uc2UtbW9kYWwvcmVzcG9uc2UtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vY29sb3JzLnNjc3NcIjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrZXN0LWZvbnQtY29sb3I7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiA1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwIDA7XHJcbiAgcGFkZGluZzogMnJlbSAxcmVtIDByZW0gMXJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtZmFtaWx5OiBwZi1yZWc7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LWZhbWlseTogbS1yZWc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICBmb250LWZhbWlseTogbS1ib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAmID4gc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogbS1yZWc7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hlY2tib3gtY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI5cmVtKTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHJpZ2h0OiBjYWxjKCgxMDAlIC0gMjVyZW0pIC8gMiAtIGNhbGMoMTAwJSAtIDI5cmVtKSAvIDIpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcbn1cclxuIiwiJGFsaWNlLWJsdWU6ICNlZGYyZjQ7XHJcbiRwcmltYXJ5LWNvbG9yOiAjZWYyMzNjO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMmIyZDQyO1xyXG4kbWFuYXRlZS1ncmV5OiAjOGQ5OWFlO1xyXG5cclxuJGxpZ2h0LWRhcmstZm9udC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbiRkYXJrLWZvbnQtY29sb3I6ICMyOTMyNDE7XHJcbiRkYXJrZXN0LWZvbnQtY29sb3I6ICMxZjI1MzA7XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjUzMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwIDA7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbSAwcmVtIDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogcGYtcmVnO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uaGVhZGVyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5wIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC1mYW1pbHk6IG0tcmVnO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMy41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjIzM2M7XG4gIGZvbnQtZmFtaWx5OiBtLWJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xufVxuYnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuYnV0dG9uID4gc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBtLXJlZztcbn1cblxuLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyOXJlbSk7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIHJpZ2h0OiBjYWxjKCgxMDAlIC0gMjVyZW0pIC8gMiAtIGNhbGMoMTAwJSAtIDI5cmVtKSAvIDIpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResponseModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'create-response-modal',
                templateUrl: './response-modal.component.html',
                styleUrls: ['./response-modal.component.scss'],
            }]
    }], null, { hasCreatedNewDocument: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submittedImagesCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSubmittedImagesCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], clickSendAnotherButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/create/components/submit/submit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/create/components/submit/submit.component.ts ***!
  \*************************************************************************/
/*! exports provided: SubmitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitComponent", function() { return SubmitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class SubmitComponent {
    constructor() {
        this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onChangeEmail(email) {
        this.email = email;
    }
    onSubmitForm(submitEvent) {
        submitEvent.preventDefault();
        this.submitForm.emit(this.email);
    }
}
SubmitComponent.ɵfac = function SubmitComponent_Factory(t) { return new (t || SubmitComponent)(); };
SubmitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubmitComponent, selectors: [["create-submit"]], inputs: { styleImageName: "styleImageName", styleImageUrl: "styleImageUrl" }, outputs: { submitForm: "submitForm" }, decls: 24, vars: 2, consts: [[1, "wrapper"], [1, "top-row"], [1, "style-image-container"], ["alt", "", 3, "src"], ["ngNativeValidate", "", 3, "submit"], ["type", "email", "placeholder", "E-Mail", "required", "", 3, "keyup"], ["email", ""], ["width", "24", "height", "24", "xmlns", "http://www.w3.org/2000/svg", "fill-rule", "evenodd", "clip-rule", "evenodd"], ["d", "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm.5 17h-1v-9h1v9zm-.5-12c.466 0 .845.378.845.845 0 .466-.379.844-.845.844-.466 0-.845-.378-.845-.844 0-.467.379-.845.845-.845z"], ["type", "submit"]], template: function SubmitComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SubmitComponent_Template_form_submit_6_listener($event) { return ctx.onSubmitForm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Where should we send your free artpiece?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SubmitComponent_Template_input_keyup_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.onChangeEmail(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The painting process can take up to two hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Max three artpieces per user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Apply this Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.styleImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.styleImageName, "-Style");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["div.wrapper[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-right: 1rem;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > div.top-row[_ngcontent-%COMP%] {\n  position: relative;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > div.top-row[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin-right: calc(9.5rem + 1rem);\n  text-align: right;\n  color: white;\n  font-family: m-reg;\n  font-size: 1.4rem;\n  line-height: 1;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > div.top-row[_ngcontent-%COMP%]    > div.style-image-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translateY(calc(-50% - 2rem));\n  width: 9.5rem;\n  height: 9.5rem;\n  box-sizing: border-box;\n  border: 2px solid white;\n  border-radius: 50%;\n  overflow: hidden;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > div.top-row[_ngcontent-%COMP%]    > div.style-image-container[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0.75rem 0;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  font-family: \"pf-reg\";\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: white;\n  font-weight: normal;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 1rem;\n  padding: 1rem 0.75rem;\n  background-color: #2b2d42;\n  border-radius: 5px;\n  border: none;\n  color: white;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.25rem;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%]    > path[_ngcontent-%COMP%] {\n  fill: white;\n}\ndiv.wrapper[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  flex: 1;\n  color: white;\n  font-family: m-reg;\n  font-size: 1.2rem;\n}\nbutton[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 100%;\n  max-width: 300px;\n  height: 3.5rem;\n  border-radius: 5px;\n  background-color: #ef233c;\n  font-family: m-bold;\n  font-size: 1.2rem;\n  text-align: center;\n  color: white;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY29tcG9uZW50cy9zdWJtaXQvQzpcXFVzZXJzXFxqb25hc1xcRG9jdW1lbnRzXFxnaXQtcHJvamVjdHNcXHN0eWxlLXRyYW5zZmVyLXZhbGlkYXRpb24tcHJvdG90eXBlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmVhdGVcXGNvbXBvbmVudHNcXHN1Ym1pdFxcc3VibWl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS9jb21wb25lbnRzL3N1Ym1pdC9zdWJtaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlL2NvbXBvbmVudHMvc3VibWl0L0M6XFxVc2Vyc1xcam9uYXNcXERvY3VtZW50c1xcZ2l0LXByb2plY3RzXFxzdHlsZS10cmFuc2Zlci12YWxpZGF0aW9uLXByb3RvdHlwZS9zcmNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNERjtBREdFO0VBQ0UsY0FBQTtBQ0RKO0FER0k7RUFDRSxhQUFBO0FDRE47QURHSTtFQUNFLGdCQUFBO0FDRE47QURLRTtFQUNFLGtCQUFBO0FDSEo7QURLSTtFQUNFLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNITjtBRE1JO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFFQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0xOO0FET007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNMUjtBRFVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDUko7QURVSTtFQUNFLGlCQUFBO0FDUk47QURVTTtFQUNFLGFBQUE7QUNSUjtBRFVNO0VBQ0UsZ0JBQUE7QUNSUjtBRFlJO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNWTjtBRGFJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCRWpGWTtFRmtGWixrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDWE47QURjSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDWk47QURjTTtFQUNFLGdCQUFBO0FDWlI7QURjUTtFQUNFLGFBQUE7QUNaVjtBRGNRO0VBQ0UsZ0JBQUE7QUNaVjtBRGdCTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ2RSO0FEZ0JRO0VBQ0UsaUJBQUE7QUNkVjtBRGdCVTtFQUNFLGNBQUE7QUNkWjtBRGdCVTtFQUNFLGVBQUE7QUNkWjtBRGtCUTtFQUNFLFdBQUE7QUNoQlY7QURtQlE7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNqQlY7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRTVJYztFRjZJZCxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3JCRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlL2NvbXBvbmVudHMvc3VibWl0L3N1Ym1pdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9jb2xvcnMuc2Nzc1wiO1xyXG5cclxuZGl2LndyYXBwZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG5cclxuICAmID4gKiB7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gZGl2LnRvcC1yb3cge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICYgPiBwIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDkuNXJlbSArIDFyZW0pO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LWZhbWlseTogbS1yZWc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gZGl2LnN0eWxlLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoLTUwJSAtIDJyZW0pKTtcclxuICAgICAgd2lkdGg6IDkuNXJlbTtcclxuICAgICAgaGVpZ2h0OiA5LjVyZW07XHJcblxyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgJiA+IGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAmID4gKiB7XHJcbiAgICAgIG1hcmdpbjogMC43NXJlbSAwO1xyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgfVxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gaDIge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgICBmb250LWZhbWlseTogXCJwZi1yZWdcIjtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gaW5wdXQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgcGFkZGluZzogMXJlbSAwLjc1cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiB1bCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHJcbiAgICAgICYgPiAqIHtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJiA+ICoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAuMjVyZW07XHJcblxyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+IHN2ZyA+IHBhdGgge1xyXG4gICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmID4gcCB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IG0tcmVnO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICBmb250LWZhbWlseTogbS1ib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbiIsImRpdi53cmFwcGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuZGl2LndyYXBwZXIgPiAqIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5kaXYud3JhcHBlciA+ICo6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuZGl2LndyYXBwZXIgPiAqOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuZGl2LndyYXBwZXIgPiBkaXYudG9wLXJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmRpdi53cmFwcGVyID4gZGl2LnRvcC1yb3cgPiBwIHtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKDkuNXJlbSArIDFyZW0pO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogbS1yZWc7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbmRpdi53cmFwcGVyID4gZGl2LnRvcC1yb3cgPiBkaXYuc3R5bGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygtNTAlIC0gMnJlbSkpO1xuICB3aWR0aDogOS41cmVtO1xuICBoZWlnaHQ6IDkuNXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmRpdi53cmFwcGVyID4gZGl2LnRvcC1yb3cgPiBkaXYuc3R5bGUtaW1hZ2UtY29udGFpbmVyID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5kaXYud3JhcHBlciA+IGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZGl2LndyYXBwZXIgPiBmb3JtID4gKiB7XG4gIG1hcmdpbjogMC43NXJlbSAwO1xufVxuZGl2LndyYXBwZXIgPiBmb3JtID4gKjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5kaXYud3JhcHBlciA+IGZvcm0gPiAqOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuZGl2LndyYXBwZXIgPiBmb3JtID4gaDIge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBmb250LWZhbWlseTogXCJwZi1yZWdcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbmRpdi53cmFwcGVyID4gZm9ybSA+IGlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW0gMC43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmQ0MjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmRpdi53cmFwcGVyID4gZm9ybSA+IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuZGl2LndyYXBwZXIgPiBmb3JtID4gdWwgPiAqIHtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cbmRpdi53cmFwcGVyID4gZm9ybSA+IHVsID4gKjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5kaXYud3JhcHBlciA+IGZvcm0gPiB1bCA+ICo6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5kaXYud3JhcHBlciA+IGZvcm0gPiB1bCBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5kaXYud3JhcHBlciA+IGZvcm0gPiB1bCBsaSA+ICoge1xuICBtYXJnaW46IDAgMC4yNXJlbTtcbn1cbmRpdi53cmFwcGVyID4gZm9ybSA+IHVsIGxpID4gKjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuZGl2LndyYXBwZXIgPiBmb3JtID4gdWwgbGkgPiAqOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5kaXYud3JhcHBlciA+IGZvcm0gPiB1bCBsaSA+IHN2ZyA+IHBhdGgge1xuICBmaWxsOiB3aGl0ZTtcbn1cbmRpdi53cmFwcGVyID4gZm9ybSA+IHVsIGxpID4gcCB7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IG0tcmVnO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuYnV0dG9uIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMjMzYztcbiAgZm9udC1mYW1pbHk6IG0tYm9sZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59IiwiJGFsaWNlLWJsdWU6ICNlZGYyZjQ7XHJcbiRwcmltYXJ5LWNvbG9yOiAjZWYyMzNjO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMmIyZDQyO1xyXG4kbWFuYXRlZS1ncmV5OiAjOGQ5OWFlO1xyXG5cclxuJGxpZ2h0LWRhcmstZm9udC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbiRkYXJrLWZvbnQtY29sb3I6ICMyOTMyNDE7XHJcbiRkYXJrZXN0LWZvbnQtY29sb3I6ICMxZjI1MzA7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'create-submit',
                templateUrl: './submit.component.html',
                styleUrls: ['./submit.component.scss'],
            }]
    }], function () { return []; }, { styleImageName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styleImageUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submitForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/create/components/upload-modal/upload-modal.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/create/components/upload-modal/upload-modal.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UploadModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModalComponent", function() { return UploadModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class UploadModalComponent {
    constructor() {
        this.selectFile = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataProtectionChecked = false;
    }
}
UploadModalComponent.ɵfac = function UploadModalComponent_Factory(t) { return new (t || UploadModalComponent)(); };
UploadModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadModalComponent, selectors: [["create-upload-modal"]], outputs: { selectFile: "selectFile", closeModal: "closeModal" }, decls: 13, vars: 4, consts: [[1, "image-upload"], [1, "header"], ["src", "/assets/icons/close.svg", "alt", "close button", 3, "click"], [1, "input-file-upload-wrapper"], ["type", "file", "accept", "image/*", 3, "disabled", "change"], ["fileInput", ""], ["for", "data-protection", 1, "checkbox-container"], ["type", "checkbox", "name", "data-protection", "id", "data-protection", 3, "ngModel", "ngModelChange"], [1, "checkmark"]], template: function UploadModalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bild hochladen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadModalComponent_Template_img_click_4_listener() { return ctx.closeModal.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadModalComponent_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.selectFile.emit(_r0.files[0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ich akzeptiere die Datenschutzerkl\u00E4rung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadModalComponent_Template_input_ngModelChange_11_listener($event) { return ctx.dataProtectionChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.dataProtectionChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.dataProtectionChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dataProtectionChecked);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 80vh;\n  background-color: #1f2530;\n  position: fixed;\n  bottom: 0;\n  z-index: 5;\n  border-radius: 30px 30px 0 0;\n  padding: 2rem 1rem 0rem 1rem;\n  box-sizing: border-box;\n  overflow-y: scroll;\n}\n\n.image-upload[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  color: white;\n}\n\n.image-upload[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: pf-reg;\n  font-size: 2rem;\n  font-weight: 400;\n  text-align: center;\n}\n\n.image-upload[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n\n.image-upload[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  height: 2rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  cursor: pointer;\n}\n\n.image-upload[_ngcontent-%COMP%]   .input-file-upload-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 300px;\n  cursor: pointer;\n  margin-left: auto;\n  margin-right: auto;\n  height: 3.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  position: relative;\n  background-color: #ef233c;\n  font-family: m-bold;\n  font-size: 1.2rem;\n  text-align: center;\n  margin-bottom: 2.5rem;\n  transition: 300ms;\n}\n\n.image-upload[_ngcontent-%COMP%]   .input-file-upload-wrapper.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.image-upload[_ngcontent-%COMP%]   .input-file-upload-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  opacity: 0;\n}\n\n.image-upload[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n@media (min-width: 1000px) {\n  [_nghost-%COMP%] {\n    width: calc(100% - 29rem);\n    height: 80vh;\n    right: calc((100% - 25rem) / 2 - calc(100% - 29rem) / 2);\n    overflow-y: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY29tcG9uZW50cy91cGxvYWQtbW9kYWwvQzpcXFVzZXJzXFxqb25hc1xcRG9jdW1lbnRzXFxnaXQtcHJvamVjdHNcXHN0eWxlLXRyYW5zZmVyLXZhbGlkYXRpb24tcHJvdG90eXBlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmVhdGVcXGNvbXBvbmVudHNcXHVwbG9hZC1tb2RhbFxcdXBsb2FkLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS9jb21wb25lbnRzL3VwbG9hZC1tb2RhbC9DOlxcVXNlcnNcXGpvbmFzXFxEb2N1bWVudHNcXGdpdC1wcm9qZWN0c1xcc3R5bGUtdHJhbnNmZXItdmFsaWRhdGlvbi1wcm90b3R5cGUvc3JjXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY29tcG9uZW50cy91cGxvYWQtbW9kYWwvdXBsb2FkLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNDbUI7RURBbkIsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUVERjs7QUZJQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FFREY7O0FGR0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FFREo7O0FGSUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FFRko7O0FGSUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUVGTjs7QUZNRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDNURZO0VENkRaLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUVKSjs7QUZLSTtFQUNFLFlBQUE7QUVITjs7QUZLSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUVITjs7QUZPRTtFQUNFLG1CQUFBO0FFTEo7O0FGU0E7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLHdEQUFBO0lBQ0EsZ0JBQUE7RUVORjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY29tcG9uZW50cy91cGxvYWQtbW9kYWwvdXBsb2FkLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2NvbG9ycy5zY3NzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2VzdC1mb250LWNvbG9yO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogNTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMCAwO1xyXG4gIHBhZGRpbmc6IDJyZW0gMXJlbSAwcmVtIDFyZW07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5pbWFnZS11cGxvYWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBwZi1yZWc7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDFyZW07XHJcbiAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlucHV0LWZpbGUtdXBsb2FkLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBmb250LWZhbWlseTogbS1ib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2hlY2tib3gtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI5cmVtKTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHJpZ2h0OiBjYWxjKCgxMDAlIC0gMjVyZW0pIC8gMiAtIGNhbGMoMTAwJSAtIDI5cmVtKSAvIDIpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcbn1cclxuIiwiJGFsaWNlLWJsdWU6ICNlZGYyZjQ7XHJcbiRwcmltYXJ5LWNvbG9yOiAjZWYyMzNjO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMmIyZDQyO1xyXG4kbWFuYXRlZS1ncmV5OiAjOGQ5OWFlO1xyXG5cclxuJGxpZ2h0LWRhcmstZm9udC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbiRkYXJrLWZvbnQtY29sb3I6ICMyOTMyNDE7XHJcbiRkYXJrZXN0LWZvbnQtY29sb3I6ICMxZjI1MzA7XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjUzMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwIDA7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbSAwcmVtIDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmltYWdlLXVwbG9hZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaW1hZ2UtdXBsb2FkIGgyIHtcbiAgZm9udC1mYW1pbHk6IHBmLXJlZztcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW1hZ2UtdXBsb2FkIC5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5pbWFnZS11cGxvYWQgLmhlYWRlciBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbWFnZS11cGxvYWQgLmlucHV0LWZpbGUtdXBsb2FkLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYyMzNjO1xuICBmb250LWZhbWlseTogbS1ib2xkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIHRyYW5zaXRpb246IDMwMG1zO1xufVxuLmltYWdlLXVwbG9hZCAuaW5wdXQtZmlsZS11cGxvYWQtd3JhcHBlci5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5pbWFnZS11cGxvYWQgLmlucHV0LWZpbGUtdXBsb2FkLXdyYXBwZXIgaW5wdXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xufVxuLmltYWdlLXVwbG9hZCAuY2hlY2tib3gtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI5cmVtKTtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgcmlnaHQ6IGNhbGMoKDEwMCUgLSAyNXJlbSkgLyAyIC0gY2FsYygxMDAlIC0gMjlyZW0pIC8gMik7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'create-upload-modal',
                templateUrl: './upload-modal.component.html',
                styleUrls: ['./upload-modal.component.scss'],
            }]
    }], null, { selectFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], closeModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_components_shared_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/shared/animations */ "./src/app/components/shared/animations.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/analytics */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_image_style_slider_image_style_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/image-style-slider/image-style-slider.component */ "./src/app/components/create/components/image-style-slider/image-style-slider.component.ts");
/* harmony import */ var _components_upload_modal_upload_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/upload-modal/upload-modal.component */ "./src/app/components/create/components/upload-modal/upload-modal.component.ts");
/* harmony import */ var _components_response_modal_response_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/response-modal/response-modal.component */ "./src/app/components/create/components/response-modal/response-modal.component.ts");













function CreateComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
} }
function CreateComponent_create_upload_modal_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "create-upload-modal", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectFile", function CreateComponent_create_upload_modal_8_Template_create_upload_modal_selectFile_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onSelectFile($event); })("closeModal", function CreateComponent_create_upload_modal_8_Template_create_upload_modal_closeModal_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.toggleUploadModal(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInOutBottom", undefined);
} }
function CreateComponent_create_response_modal_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "create-response-modal", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closeModal", function CreateComponent_create_response_modal_9_Template_create_response_modal_closeModal_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.toggleResponseModal(false); })("clickSendAnotherButton", function CreateComponent_create_response_modal_9_Template_create_response_modal_clickSendAnotherButton_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onClickSendAnotherButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hasCreatedNewDocument", ctx_r2.hasCreatedNewDocument)("submittedImagesCount", ctx_r2.submittedImagesCount)("maxSubmittedImagesCount", ctx_r2.maxSubmittedImagesCount)("@slideInOutBottom", undefined);
} }
class CreateComponent {
    constructor(auth, firestore, storage, analytics) {
        this.auth = auth;
        this.firestore = firestore;
        this.storage = storage;
        this.analytics = analytics;
        this.imageSrc = '/assets/images/upload-picture.svg';
        this.shouldShowUploadModal = false;
        this.shouldShowResponseModal = false;
        this.shouldShowFitStyleView = false;
        this.contentImages = [];
        this.selectedContentImageIndex = 0;
        this.stylizedImages = [
            {
                image: {
                    publicUrl: '/assets/images/husky-styled.jpg',
                    appliedStyle: 'Abstract',
                },
            },
            {
                image: {
                    publicUrl: '/assets/images/husky-unstyled.jpg',
                    appliedStyle: 'Abstract',
                },
            },
            {
                image: {
                    publicUrl: '/assets/images/canvas-demo.png',
                    appliedStyle: 'Abstract2',
                },
            },
            {
                image: {
                    publicUrl: '/assets/images/alu-demo.png',
                    appliedStyle: 'Abstract2',
                },
            },
        ];
        this.styleImages = [
            {
                image: {
                    filename: 'abstract.jpg',
                    size: 703080,
                    publicUrl: 'https://storage.googleapis.com/petai-bdd53.appspot.com/style-images/abstract.jpg',
                    width: 1000,
                    height: 1000,
                    timestamp: {
                        _seconds: 1617092862,
                        _nanoseconds: 547000000,
                    },
                },
                artist: 'Abstract',
                name: 'Abstract',
                id: 'yG571A7o01wabNulmA3K',
            },
            {
                image: {
                    filename: 'abstract.jpg',
                    size: 703080,
                    publicUrl: 'https://storage.googleapis.com/petai-bdd53.appspot.com/style-images/abstract.jpg',
                    width: 1000,
                    height: 1000,
                    timestamp: {
                        _seconds: 1617092862,
                        _nanoseconds: 547000000,
                    },
                },
                artist: 'Abstract2',
                name: 'Abstract',
                id: 'yG571A7o01wabNulmA3K',
            },
        ];
        this.selectedStyleImageIndex = 0;
        this.isUploadingImage = false;
        this.isApplyingStyle = false;
        this.submittedImagesCount = 0;
        this.maxSubmittedImagesCount = 3;
        this.hasCreatedNewDocument = false;
    }
    ngOnInit() {
        this.contentImages = this.stylizedImages;
    }
    toggleUploadModal(shouldShow) {
        this.shouldShowUploadModal = shouldShow;
    }
    onSelectFile(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.toggleUploadModal(false);
                this.selectedFile = file;
                this.imageSrc = yield this.readFile(file);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    readFile(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.addEventListener('load', () => {
                resolve(fileReader.result);
            });
            fileReader.addEventListener('error', reject);
            fileReader.readAsDataURL(file);
        });
    }
    onChangeSelectedStyleIndex(index) {
        this.selectedStyleImageIndex = index;
        this.contentImages = this.stylizedImages.filter((image) => {
            return (image.image.appliedStyle ===
                this.styleImages[this.selectedStyleImageIndex].artist);
        });
    }
    onSubmitForm(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const userId = yield this.getUserId();
                const colRef = this.firestore.collection('stylization-jobs').ref;
                const query = yield colRef.where('userId', '==', userId).get();
                const querySize = query.size;
                if (querySize < 3) {
                    this.isApplyingStyle = true;
                    const contentImagePublicUrl = yield this.uploadFile(this.selectedFile);
                    const selectedStyleImage = this.styleImages[this.selectedStyleImageIndex];
                    const stylizationJob = {
                        userId,
                        email,
                        contentImagePublicUrl,
                        styleImagePublicUrl: selectedStyleImage.image.publicUrl,
                    };
                    yield colRef.add(stylizationJob);
                    this.hasCreatedNewDocument = true;
                    this.submittedImagesCount = querySize + 1;
                    this.isApplyingStyle = false;
                    this.analytics.logEvent('purchase', {
                        value: selectedStyleImage.artist,
                    });
                }
                else {
                    this.hasCreatedNewDocument = false;
                    this.submittedImagesCount = querySize;
                }
                this.toggleResponseModal(true);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    uploadFile(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const filePath = `content-images/${Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])()}`;
            const fileRef = this.storage.ref(filePath);
            yield fileRef.put(file);
            const publicUrl = yield fileRef.getDownloadURL().toPromise();
            return publicUrl;
        });
    }
    getUserId() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let user = yield this.auth.currentUser;
            // If the user deletes all application data after the site has been loaded
            if (user === null) {
                user = (yield this.auth.signInAnonymously()).user;
            }
            return user.uid;
        });
    }
    toggleResponseModal(shouldShow) {
        this.shouldShowResponseModal = shouldShow;
    }
    onClickSendAnotherButton() {
        this.toggleResponseModal(false);
        this.toggleFitStyleView(false);
    }
    toggleFitStyleView(shouldShow) {
        this.shouldShowFitStyleView = shouldShow;
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_7__["AngularFireAnalytics"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["page-create"]], decls: 13, vars: 11, consts: [[1, "gray-background-box"], [1, "container"], [1, "square-ratio"], ["alt", "", 1, "selected-image", 3, "src"], ["src", "/assets/icons/loading-spinner.svg", "alt", "", 4, "ngIf"], [1, "finished-btn"], [1, "slider", 3, "contentImages", "styleImages", "isUploadingImage", "uploadedImage", "shouldShowFitStyleView", "changeSelectedStyleIndex", "clickAddImageButton", "submitForm", "changeShouldShowFitStyleView"], [3, "selectFile", "closeModal", 4, "ngIf"], [3, "hasCreatedNewDocument", "submittedImagesCount", "maxSubmittedImagesCount", "closeModal", "clickSendAnotherButton", 4, "ngIf"], [1, "only-mobile-info"], ["src", "/assets/icons/loading-spinner.svg", "alt", ""], [3, "selectFile", "closeModal"], [3, "hasCreatedNewDocument", "submittedImagesCount", "maxSubmittedImagesCount", "closeModal", "clickSendAnotherButton"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CreateComponent_img_4_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Fertig");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "create-image-style-slider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changeSelectedStyleIndex", function CreateComponent_Template_create_image_style_slider_changeSelectedStyleIndex_7_listener($event) { return ctx.onChangeSelectedStyleIndex($event); })("clickAddImageButton", function CreateComponent_Template_create_image_style_slider_clickAddImageButton_7_listener() { return ctx.toggleUploadModal(true); })("submitForm", function CreateComponent_Template_create_image_style_slider_submitForm_7_listener($event) { return ctx.onSubmitForm($event); })("changeShouldShowFitStyleView", function CreateComponent_Template_create_image_style_slider_changeShouldShowFitStyleView_7_listener($event) { return ctx.toggleFitStyleView($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CreateComponent_create_upload_modal_8_Template, 1, 1, "create-upload-modal", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CreateComponent_create_response_modal_9_Template, 1, 4, "create-response-modal", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Sorry, this website is only available for mobile devices at the moment :/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("applying-style", ctx.isApplyingStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isApplyingStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("contentImages", ctx.contentImages)("styleImages", ctx.styleImages)("isUploadingImage", ctx.isUploadingImage)("uploadedImage", "/assets/images/upload-picture.svg" != ctx.imageSrc)("shouldShowFitStyleView", ctx.shouldShowFitStyleView);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.shouldShowUploadModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.shouldShowResponseModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_image_style_slider_image_style_slider_component__WEBPACK_IMPORTED_MODULE_9__["ImageStyleSliderComponent"], _components_upload_modal_upload_modal_component__WEBPACK_IMPORTED_MODULE_10__["UploadModalComponent"], _components_response_modal_response_modal_component__WEBPACK_IMPORTED_MODULE_11__["ResponseModalComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  background-color: #1f2530;\n}\n\n.slider[_ngcontent-%COMP%] {\n  display: block;\n  flex: 1;\n  transform: translateY(-15px);\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 0;\n  background-color: white;\n}\n\nbutton.finished-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.applying-style[_ngcontent-%COMP%] {\n  transition: 500ms;\n  background-color: black;\n}\n\n.applying-style[_ngcontent-%COMP%]   .selected-image[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.only-mobile-info[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (min-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    padding-left: 10%;\n    padding-right: 10%;\n  }\n}\n\n@media (min-width: 1000px) {\n  [_nghost-%COMP%] {\n    flex-direction: row;\n  }\n\n  .only-mobile-info[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    background-color: #000000af;\n    -webkit-backdrop-filter: blur(5px);\n            backdrop-filter: blur(5px);\n    left: 0;\n    top: 0;\n  }\n  .only-mobile-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 80%;\n    font-size: 3rem;\n    color: white;\n    font-family: m-bold;\n  }\n\n  .gray-background-box[_ngcontent-%COMP%] {\n    width: calc(100% - 25rem);\n    height: 40%;\n    position: absolute;\n    background-color: #edf2f4;\n    bottom: 0;\n    right: 0;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    order: 2;\n    padding-left: 2rem;\n    padding-right: 2rem;\n    width: calc(100% - 25rem);\n    margin: auto;\n    max-width: 720px;\n    position: relative;\n    right: 0;\n  }\n\n  .slider[_ngcontent-%COMP%] {\n    flex: none;\n    width: 40%;\n    max-width: 25rem;\n    order: 1;\n  }\n\n  .square-ratio[_ngcontent-%COMP%] {\n    border-radius: 5px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    box-shadow: 0px 3px 6px #00000029;\n  }\n\n  button.finished-btn[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 2rem;\n    outline: none;\n    background-color: #ef233c;\n    border: none;\n    font-family: m-bold;\n    border-radius: 3px;\n    font-size: 1.2rem;\n    color: aliceblue;\n    padding: 0.8rem;\n    cursor: pointer;\n    transition: 200ms;\n    height: unset;\n    width: 100%;\n  }\n  button.finished-btn.low-visibility[_ngcontent-%COMP%] {\n    opacity: 0.5;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvQzpcXFVzZXJzXFxqb25hc1xcRG9jdW1lbnRzXFxnaXQtcHJvamVjdHNcXHN0eWxlLXRyYW5zZmVyLXZhbGlkYXRpb24tcHJvdG90eXBlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjcmVhdGVcXGNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS9DOlxcVXNlcnNcXGpvbmFzXFxEb2N1bWVudHNcXGdpdC1wcm9qZWN0c1xcc3R5bGUtdHJhbnNmZXItdmFsaWRhdGlvbi1wcm90b3R5cGUvc3JjXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLE9BQUE7RUFDQSw0QkFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FDREY7O0FERUU7RUFDRSxZQUFBO0FDQUo7O0FESUE7RUFDRSxhQUFBO0FDREY7O0FESUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUNERjtBQUNGOztBRElBO0VBQ0U7SUFDRSxtQkFBQTtFQ0ZGOztFREtBO0lBQ0UsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSwyQkFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxPQUFBO0lBQ0EsTUFBQTtFQ0ZGO0VER0U7SUFDRSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VDREo7O0VES0E7SUFDRSx5QkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLHlCRTFFUztJRjJFVCxTQUFBO0lBQ0EsUUFBQTtFQ0ZGOztFREtBO0lBQ0UsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtFQ0ZGOztFREtBO0lBQ0UsVUFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLFFBQUE7RUNGRjs7RURLQTtJQUNFLGtCQUFBO0VDRkY7O0VES0E7SUFDRSxrQkFBQTtJQUNBLGlDQUFBO0VDRkY7O0VES0E7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0lBQ0EseUJFN0dZO0lGOEdaLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQ0ZGO0VER0U7SUFDRSxZQUFBO0VDREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jb2xvcnMuc2Nzc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrZXN0LWZvbnQtY29sb3I7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXg6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYnV0dG9uLmZpbmlzaGVkLWJ0biB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmFwcGx5aW5nLXN0eWxlIHtcclxuICB0cmFuc2l0aW9uOiA1MDBtcztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAuc2VsZWN0ZWQtaW1hZ2Uge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxufVxyXG5cclxuLm9ubHktbW9iaWxlLWluZm8ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcblxyXG4gIC5vbmx5LW1vYmlsZS1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhZjtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LWZhbWlseTogbS1ib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdyYXktYmFja2dyb3VuZC1ib3gge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cmVtKTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFsaWNlLWJsdWU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgb3JkZXI6IDI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cmVtKTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5zbGlkZXIge1xyXG4gICAgZmxleDogbm9uZTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXgtd2lkdGg6IDI1cmVtO1xyXG4gICAgb3JkZXI6IDE7XHJcbiAgfVxyXG5cclxuICAuc3F1YXJlLXJhdGlvIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgfVxyXG5cclxuICBidXR0b24uZmluaXNoZWQtYnRuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBtLWJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtcztcclxuICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICYubG93LXZpc2liaWxpdHkge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjUzMDtcbn1cblxuLnNsaWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmJ1dHRvbi5maW5pc2hlZC1idG4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXBwbHlpbmctc3R5bGUge1xuICB0cmFuc2l0aW9uOiA1MDBtcztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uYXBwbHlpbmctc3R5bGUgLnNlbGVjdGVkLWltYWdlIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ub25seS1tb2JpbGUtaW5mbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICAub25seS1tb2JpbGUtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGFmO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICB9XG4gIC5vbmx5LW1vYmlsZS1pbmZvIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IG0tYm9sZDtcbiAgfVxuXG4gIC5ncmF5LWJhY2tncm91bmQtYm94IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjVyZW0pO1xuICAgIGhlaWdodDogNDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMmY0O1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIG9yZGVyOiAyO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXJlbSk7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogNzIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLnNsaWRlciB7XG4gICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1heC13aWR0aDogMjVyZW07XG4gICAgb3JkZXI6IDE7XG4gIH1cblxuICAuc3F1YXJlLXJhdGlvIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIH1cblxuICBidXR0b24uZmluaXNoZWQtYnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmMjMzYztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IG0tYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDIwMG1zO1xuICAgIGhlaWdodDogdW5zZXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgYnV0dG9uLmZpbmlzaGVkLWJ0bi5sb3ctdmlzaWJpbGl0eSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59IiwiJGFsaWNlLWJsdWU6ICNlZGYyZjQ7XHJcbiRwcmltYXJ5LWNvbG9yOiAjZWYyMzNjO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMmIyZDQyO1xyXG4kbWFuYXRlZS1ncmV5OiAjOGQ5OWFlO1xyXG5cclxuJGxpZ2h0LWRhcmstZm9udC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbiRkYXJrLWZvbnQtY29sb3I6ICMyOTMyNDE7XHJcbiRkYXJrZXN0LWZvbnQtY29sb3I6ICMxZjI1MzA7XHJcbiJdfQ== */"], data: { animation: [src_app_components_shared_animations__WEBPACK_IMPORTED_MODULE_2__["slideInOutBottom"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'page-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.scss'],
                animations: [src_app_components_shared_animations__WEBPACK_IMPORTED_MODULE_2__["slideInOutBottom"]],
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] }, { type: _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_7__["AngularFireAnalytics"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/create/create.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/create/create.module.ts ***!
  \****************************************************/
/*! exports provided: CreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateModule", function() { return CreateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/angular */ "./node_modules/swiper/__ivy_ngcc__/angular/fesm2015/swiper_angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _components_image_style_slider_image_style_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/image-style-slider/image-style-slider.component */ "./src/app/components/create/components/image-style-slider/image-style-slider.component.ts");
/* harmony import */ var _components_submit_submit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/submit/submit.component */ "./src/app/components/create/components/submit/submit.component.ts");
/* harmony import */ var _components_upload_modal_upload_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/upload-modal/upload-modal.component */ "./src/app/components/create/components/upload-modal/upload-modal.component.ts");
/* harmony import */ var _components_response_modal_response_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/response-modal/response-modal.component */ "./src/app/components/create/components/response-modal/response-modal.component.ts");








const declarations = [
    _components_image_style_slider_image_style_slider_component__WEBPACK_IMPORTED_MODULE_3__["ImageStyleSliderComponent"],
    _components_upload_modal_upload_modal_component__WEBPACK_IMPORTED_MODULE_5__["UploadModalComponent"],
    _components_submit_submit_component__WEBPACK_IMPORTED_MODULE_4__["SubmitComponent"],
    _components_response_modal_response_modal_component__WEBPACK_IMPORTED_MODULE_6__["ResponseModalComponent"],
];
class CreateModule {
}
CreateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateModule });
CreateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateModule_Factory(t) { return new (t || CreateModule)(); }, imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], swiper_angular__WEBPACK_IMPORTED_MODULE_1__["SwiperModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateModule, { declarations: [_components_image_style_slider_image_style_slider_component__WEBPACK_IMPORTED_MODULE_3__["ImageStyleSliderComponent"],
        _components_upload_modal_upload_modal_component__WEBPACK_IMPORTED_MODULE_5__["UploadModalComponent"],
        _components_submit_submit_component__WEBPACK_IMPORTED_MODULE_4__["SubmitComponent"],
        _components_response_modal_response_modal_component__WEBPACK_IMPORTED_MODULE_6__["ResponseModalComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], swiper_angular__WEBPACK_IMPORTED_MODULE_1__["SwiperModule"]], exports: [_components_image_style_slider_image_style_slider_component__WEBPACK_IMPORTED_MODULE_3__["ImageStyleSliderComponent"],
        _components_upload_modal_upload_modal_component__WEBPACK_IMPORTED_MODULE_5__["UploadModalComponent"],
        _components_submit_submit_component__WEBPACK_IMPORTED_MODULE_4__["SubmitComponent"],
        _components_response_modal_response_modal_component__WEBPACK_IMPORTED_MODULE_6__["ResponseModalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations,
                imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], swiper_angular__WEBPACK_IMPORTED_MODULE_1__["SwiperModule"]],
                exports: declarations,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/shared/animations.ts":
/*!*************************************************!*\
  !*** ./src/app/components/shared/animations.ts ***!
  \*************************************************/
/*! exports provided: slideInOutLeft, slideInOutRight, slideInOutBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInOutLeft", function() { return slideInOutLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInOutRight", function() { return slideInOutRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInOutBottom", function() { return slideInOutBottom; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const slideInOutLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOutLeft', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.7s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' })),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.7s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' })),
    ]),
]);
const slideInOutRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOutRight', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.7s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' })),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.7s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' })),
    ]),
]);
const slideInOutBottom = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOutBottom', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.7s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' })),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.7s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' })),
    ]),
]);


/***/ }),

/***/ "./src/app/components/shared/components/headline/headline.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/shared/components/headline/headline.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HeadlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlineComponent", function() { return HeadlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class HeadlineComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeadlineComponent.ɵfac = function HeadlineComponent_Factory(t) { return new (t || HeadlineComponent)(); };
HeadlineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadlineComponent, selectors: [["shared-headline"]], ngContentSelectors: _c0, decls: 3, vars: 0, template: function HeadlineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-family: pf-reg;\n  text-align: center;\n  color: #2b2d42;\n  font-size: 2.2rem;\n}\n\nhr[_ngcontent-%COMP%] {\n  width: 50px;\n  border: 1px solid #ef233c;\n  margin-right: auto;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29tcG9uZW50cy9oZWFkbGluZS9DOlxcVXNlcnNcXGpvbmFzXFxEb2N1bWVudHNcXGdpdC1wcm9qZWN0c1xcc3R5bGUtdHJhbnNmZXItdmFsaWRhdGlvbi1wcm90b3R5cGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcY29tcG9uZW50c1xcaGVhZGxpbmVcXGhlYWRsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb21wb25lbnRzL2hlYWRsaW5lL2hlYWRsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb21wb25lbnRzL2hlYWRsaW5lL0M6XFxVc2Vyc1xcam9uYXNcXERvY3VtZW50c1xcZ2l0LXByb2plY3RzXFxzdHlsZS10cmFuc2Zlci12YWxpZGF0aW9uLXByb3RvdHlwZS9zcmNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNFVGdCO0VGVWhCLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb21wb25lbnRzL2hlYWRsaW5lL2hlYWRsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2NvbG9ycy5zY3NzXCI7XHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6IHBmLXJlZztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgZm9udC1zaXplOiAyLjJyZW07XHJcbn1cclxuXHJcbmhyIHtcclxuICB3aWR0aDogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuaDEge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBwZi1yZWc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyYjJkNDI7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG5ociB7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWYyMzNjO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIiRhbGljZS1ibHVlOiAjZWRmMmY0O1xyXG4kcHJpbWFyeS1jb2xvcjogI2VmMjMzYztcclxuJHNlY29uZGFyeS1jb2xvcjogIzJiMmQ0MjtcclxuJG1hbmF0ZWUtZ3JleTogIzhkOTlhZTtcclxuXHJcbiRsaWdodC1kYXJrLWZvbnQtY29sb3I6ICNjYmNiY2I7XHJcblxyXG4kZGFyay1mb250LWNvbG9yOiAjMjkzMjQxO1xyXG4kZGFya2VzdC1mb250LWNvbG9yOiAjMWYyNTMwO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadlineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'shared-headline',
                templateUrl: './headline.component.html',
                styleUrls: ['./headline.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/shared/components/photo-guide/photo-guide.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/shared/components/photo-guide/photo-guide.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PhotoGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGuideComponent", function() { return PhotoGuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function PhotoGuideComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} }
function PhotoGuideComponent_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ein paar Tipps f\u00FCr das perfekte Foto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PhotoGuideComponent {
    constructor() {
        this.displayExampleImage = true;
        this.displayHeader = true;
    }
    ngOnInit() { }
}
PhotoGuideComponent.ɵfac = function PhotoGuideComponent_Factory(t) { return new (t || PhotoGuideComponent)(); };
PhotoGuideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoGuideComponent, selectors: [["shared-photo-guide"]], inputs: { displayExampleImage: "displayExampleImage", displayHeader: "displayHeader" }, decls: 20, vars: 4, consts: [[1, "photo-guide-wrapper"], ["class", "demo-image", "src", "/assets/images/photo-guide-dog.jpg", "alt", "", 4, "ngIf"], [1, "info-text"], [4, "ngIf"], ["src", "/assets/icons/green-checkmark.svg", "alt", "", 1, "decorater"], ["src", "/assets/icons/red-x.svg", "alt", "", 1, "decorater"], ["src", "/assets/icons/info-white-light.svg", "alt", "", 1, "decorater"], ["src", "/assets/images/photo-guide-dog.jpg", "alt", "", 1, "demo-image"]], template: function PhotoGuideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhotoGuideComponent_img_1_Template, 1, 0, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PhotoGuideComponent_h2_4_Template, 2, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Nimm das Foto auf Augenh\u00F6he mit deinem Tier auf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Es funktioniert am besten, wenn nur der Kopf zu sehen ist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Verhindere schlechte Belichtung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Versuche unscharfe oder verwackelte Bilder zu verhindern ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Bilder auf WhatsApp werden runterskaliert ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("withImage", ctx.displayExampleImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayExampleImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayHeader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".photo-guide-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  width: 100%;\n  background-color: #1f2530;\n  align-items: center;\n}\n.photo-guide-wrapper[_ngcontent-%COMP%]   img.demo-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.photo-guide-wrapper[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.photo-guide-wrapper[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n.photo-guide-wrapper[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: pf-reg;\n  font-weight: 500;\n  font-size: 2.4rem;\n  margin-bottom: 3rem;\n}\n.photo-guide-wrapper[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: m-light;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n.photo-guide-wrapper[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.photo-guide-wrapper[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img.decorater[_ngcontent-%COMP%] {\n  height: 3rem;\n  margin-right: 1rem;\n}\n@media (min-width: 1500px) {\n  .photo-guide-wrapper.withImage[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .photo-guide-wrapper.withImage[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 5rem;\n  }\n  .photo-guide-wrapper[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    max-width: 1000px;\n    padding-left: 5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29tcG9uZW50cy9waG90by1ndWlkZS9DOlxcVXNlcnNcXGpvbmFzXFxEb2N1bWVudHNcXGdpdC1wcm9qZWN0c1xcc3R5bGUtdHJhbnNmZXItdmFsaWRhdGlvbi1wcm90b3R5cGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcY29tcG9uZW50c1xccGhvdG8tZ3VpZGVcXHBob3RvLWd1aWRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb21wb25lbnRzL3Bob3RvLWd1aWRlL0M6XFxVc2Vyc1xcam9uYXNcXERvY3VtZW50c1xcZ2l0LXByb2plY3RzXFxzdHlsZS10cmFuc2Zlci12YWxpZGF0aW9uLXByb3RvdHlwZS9zcmNcXGNvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb21wb25lbnRzL3Bob3RvLWd1aWRlL3Bob3RvLWd1aWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQ0VtQjtFRERuQixtQkFBQTtBRURGO0FGRUU7RUFDRSxXQUFBO0FFQUo7QUZFRTtFQUNFLFlBQUE7QUVBSjtBRkNJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBRUNOO0FGQU07RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRUVSO0FGQU07RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUVFUjtBRkFRO0VBQ0UsZ0JBQUE7QUVFVjtBRkFRO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FFRVY7QUZLQTtFQUVJO0lBQ0UsOEJBQUE7RUVISjtFRktJO0lBQ0Usa0JBQUE7RUVITjtFRk9JO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFRUxOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb21wb25lbnRzL3Bob3RvLWd1aWRlL3Bob3RvLWd1aWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2NvbG9ycy5zY3NzXCI7XHJcblxyXG4ucGhvdG8tZ3VpZGUtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2VzdC1mb250LWNvbG9yO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW1nLmRlbW8taW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5pbmZvLXRleHQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdWwge1xyXG4gICAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LWZhbWlseTogcGYtcmVnO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgICAgfVxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG0tbGlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZy5kZWNvcmF0ZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gIC5waG90by1ndWlkZS13cmFwcGVyIHtcclxuICAgICYud2l0aEltYWdlIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG5cclxuICAgICAgLmluZm8tdGV4dCB1bCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5mby10ZXh0IHtcclxuICAgICAgdWwge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkYWxpY2UtYmx1ZTogI2VkZjJmNDtcclxuJHByaW1hcnktY29sb3I6ICNlZjIzM2M7XHJcbiRzZWNvbmRhcnktY29sb3I6ICMyYjJkNDI7XHJcbiRtYW5hdGVlLWdyZXk6ICM4ZDk5YWU7XHJcblxyXG4kbGlnaHQtZGFyay1mb250LWNvbG9yOiAjY2JjYmNiO1xyXG5cclxuJGRhcmstZm9udC1jb2xvcjogIzI5MzI0MTtcclxuJGRhcmtlc3QtZm9udC1jb2xvcjogIzFmMjUzMDtcclxuIiwiLnBob3RvLWd1aWRlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjI1MzA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGhvdG8tZ3VpZGUtd3JhcHBlciBpbWcuZGVtby1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBob3RvLWd1aWRlLXdyYXBwZXIgLmluZm8tdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5waG90by1ndWlkZS13cmFwcGVyIC5pbmZvLXRleHQgdWwge1xuICBwYWRkaW5nOiAycmVtIDFyZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogODAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ucGhvdG8tZ3VpZGUtd3JhcHBlciAuaW5mby10ZXh0IHVsIGgyIHtcbiAgZm9udC1mYW1pbHk6IHBmLXJlZztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4ucGhvdG8tZ3VpZGUtd3JhcHBlciAuaW5mby10ZXh0IHVsIGxpIHtcbiAgZm9udC1mYW1pbHk6IG0tbGlnaHQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG4ucGhvdG8tZ3VpZGUtd3JhcHBlciAuaW5mby10ZXh0IHVsIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnBob3RvLWd1aWRlLXdyYXBwZXIgLmluZm8tdGV4dCB1bCBsaSBpbWcuZGVjb3JhdGVyIHtcbiAgaGVpZ2h0OiAzcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxNTAwcHgpIHtcbiAgLnBob3RvLWd1aWRlLXdyYXBwZXIud2l0aEltYWdlIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cbiAgLnBob3RvLWd1aWRlLXdyYXBwZXIud2l0aEltYWdlIC5pbmZvLXRleHQgdWwge1xuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcbiAgfVxuICAucGhvdG8tZ3VpZGUtd3JhcHBlciAuaW5mby10ZXh0IHVsIHtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoGuideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'shared-photo-guide',
                templateUrl: './photo-guide.component.html',
                styleUrls: ['./photo-guide.component.scss'],
            }]
    }], function () { return []; }, { displayExampleImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displayHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/shared/components/product-box/product-box.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/shared/components/product-box/product-box.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBoxComponent", function() { return ProductBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _style_circle_style_circle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style-circle/style-circle.component */ "./src/app/components/shared/components/style-circle/style-circle.component.ts");




class ProductBoxComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    openDetail(event) {
        const selectedElement = event.target.className;
        if (selectedElement == 'style-image') {
            console.log('style selected');
        }
        else if (selectedElement == 'product-image' || selectedElement == 'arrow') {
            this.router.navigate(['shop/1']);
        }
    }
}
ProductBoxComponent.ɵfac = function ProductBoxComponent_Factory(t) { return new (t || ProductBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ProductBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductBoxComponent, selectors: [["shared-product-box"]], decls: 14, vars: 0, consts: [[1, "product-box-wrapper", 3, "click"], [1, "product-image"], ["src", "/assets/images/golden-styled.jpg", "alt", "", 1, "styled-image"], ["src", "/assets/icons/arrow-down.svg", "alt", "", 1, "arrow"], [1, "product-info"], [1, "styles"], ["verticalLayout", "true", 1, "style"], [1, "product-title"], [1, "price"]], template: function ProductBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductBoxComponent_Template_div_click_0_listener($event) { return ctx.openDetail($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "shared-style-circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "shared-style-circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "shared-style-circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The Dog Look");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Poster ab 19.99\u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_style_circle_style_circle_component__WEBPACK_IMPORTED_MODULE_2__["StyleCircleComponent"]], styles: ["div.product-box-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  margin-left: auto;\n  margin-right: auto;\n  overflow: hidden;\n  background-color: #2b2d42;\n  border-radius: 2rem;\n  box-shadow: 0px 3px 6px #00000029;\n}\ndiv.product-box-wrapper[_ngcontent-%COMP%]   img.styled-image[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\ndiv.product-box-wrapper[_ngcontent-%COMP%]   div.product-image[_ngcontent-%COMP%] {\n  height: 17rem;\n  width: 100%;\n  border-radius: 2rem;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n}\ndiv.product-box-wrapper[_ngcontent-%COMP%]   div.product-image[_ngcontent-%COMP%]   img.arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 0;\n  height: 3rem;\n  transform: rotate(-90deg);\n  z-index: 10;\n}\ndiv.product-box-wrapper[_ngcontent-%COMP%]   div.product-image[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  transition: all 0.3s;\n  -webkit-transition: all 0.3s;\n}\ndiv.product-box-wrapper[_ngcontent-%COMP%]   div.product-image[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n}\ndiv.product-box-wrapper[_ngcontent-%COMP%]   div.product-info[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  background-color: #2b2d42;\n  width: 100%;\n  padding: 0rem 2rem 2rem 2rem;\n  box-sizing: border-box;\n  text-align: center;\n}\ndiv.product-box-wrapper[_ngcontent-%COMP%]   div.product-info[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  font-family: pf-reg;\n  padding-top: 30%;\n  font-size: 2rem;\n  font-weight: 400;\n  color: white;\n}\ndiv.product-box-wrapper[_ngcontent-%COMP%]   div.product-info[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 3rem;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n  border: #ef233c solid 1px;\n  background-color: #ef233c;\n  margin-left: auto;\n  margin-right: auto;\n  box-sizing: border-box;\n}\ndiv.product-box-wrapper[_ngcontent-%COMP%]   div.product-info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-family: m-reg;\n  font-size: 1.2rem;\n  color: white;\n  margin-bottom: 2rem;\n}\ndiv.product-box-wrapper[_ngcontent-%COMP%]   .styles[_ngcontent-%COMP%] {\n  display: grid;\n  position: absolute;\n  left: 0;\n  box-sizing: border-box;\n  padding: inherit;\n  z-index: 5;\n  transform: translateY(-35%);\n  grid-gap: 1.5rem;\n  grid-template-columns: repeat(3, minmax(50px, 1fr));\n  width: 100%;\n}\n@media (min-width: 1200px) {\n  div.product-box-wrapper[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29tcG9uZW50cy9wcm9kdWN0LWJveC9DOlxcVXNlcnNcXGpvbmFzXFxEb2N1bWVudHNcXGdpdC1wcm9qZWN0c1xcc3R5bGUtdHJhbnNmZXItdmFsaWRhdGlvbi1wcm90b3R5cGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcY29tcG9uZW50c1xccHJvZHVjdC1ib3hcXHByb2R1Y3QtYm94LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QtYm94L0M6XFxVc2Vyc1xcam9uYXNcXERvY3VtZW50c1xcZ2l0LXByb2plY3RzXFxzdHlsZS10cmFuc2Zlci12YWxpZGF0aW9uLXByb3RvdHlwZS9zcmNcXGNvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QtYm94L3Byb2R1Y3QtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJDTmdCO0VET2hCLG1CQUFBO0VBQ0EsaUNBQUE7QUVERjtBRkdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FFREo7QUZJRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRUZKO0FGSUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBRUZOO0FGS0k7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0FFSE47QUZLSTtFQUNFLFVBQUE7QUVITjtBRk1FO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJDdERjO0VEdURkLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUVKSjtBRktJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUVITjtBRktJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQ3hFVTtFRHlFVixpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUVITjtBRktJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRUhOO0FGT0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbURBQUE7RUFDQSxXQUFBO0FFTEo7QUZVQTtFQUNFO0lBQ0UsZUFBQTtFRVBGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QtYm94L3Byb2R1Y3QtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2NvbG9ycy5zY3NzXCI7XHJcblxyXG5kaXYucHJvZHVjdC1ib3gtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG5cclxuICBpbWcuc3R5bGVkLWltYWdlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICBkaXYucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDE3cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBpbWcuYXJyb3cge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMXJlbTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRpdi5wcm9kdWN0LWluZm8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDByZW0gMnJlbSAycmVtIDJyZW07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgICBmb250LWZhbWlseTogcGYtcmVnO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMzAlO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIGhyIHtcclxuICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgYm9yZGVyOiAkcHJpbWFyeS1jb2xvciBzb2xpZCAxcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgLnByaWNlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IG0tcmVnO1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN0eWxlcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiBpbmhlcml0O1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzUlKTtcclxuICAgIGdyaWQtZ2FwOiAxLjVyZW07XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoNTBweCwgMWZyKSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFgtTGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICBkaXYucHJvZHVjdC1ib3gtd3JhcHBlciB7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsIiRhbGljZS1ibHVlOiAjZWRmMmY0O1xyXG4kcHJpbWFyeS1jb2xvcjogI2VmMjMzYztcclxuJHNlY29uZGFyeS1jb2xvcjogIzJiMmQ0MjtcclxuJG1hbmF0ZWUtZ3JleTogIzhkOTlhZTtcclxuXHJcbiRsaWdodC1kYXJrLWZvbnQtY29sb3I6ICNjYmNiY2I7XHJcblxyXG4kZGFyay1mb250LWNvbG9yOiAjMjkzMjQxO1xyXG4kZGFya2VzdC1mb250LWNvbG9yOiAjMWYyNTMwO1xyXG4iLCJkaXYucHJvZHVjdC1ib3gtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyZDQyO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG59XG5kaXYucHJvZHVjdC1ib3gtd3JhcHBlciBpbWcuc3R5bGVkLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5kaXYucHJvZHVjdC1ib3gtd3JhcHBlciBkaXYucHJvZHVjdC1pbWFnZSB7XG4gIGhlaWdodDogMTdyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmRpdi5wcm9kdWN0LWJveC13cmFwcGVyIGRpdi5wcm9kdWN0LWltYWdlIGltZy5hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAzcmVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB6LWluZGV4OiAxMDtcbn1cbmRpdi5wcm9kdWN0LWJveC13cmFwcGVyIGRpdi5wcm9kdWN0LWltYWdlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbmRpdi5wcm9kdWN0LWJveC13cmFwcGVyIGRpdi5wcm9kdWN0LWltYWdlOmhvdmVyOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5kaXYucHJvZHVjdC1ib3gtd3JhcHBlciBkaXYucHJvZHVjdC1pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyZDQyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHJlbSAycmVtIDJyZW0gMnJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZGl2LnByb2R1Y3QtYm94LXdyYXBwZXIgZGl2LnByb2R1Y3QtaW5mbyAucHJvZHVjdC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBwZi1yZWc7XG4gIHBhZGRpbmctdG9wOiAzMCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuZGl2LnByb2R1Y3QtYm94LXdyYXBwZXIgZGl2LnByb2R1Y3QtaW5mbyBociB7XG4gIHdpZHRoOiAzcmVtO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJvcmRlcjogI2VmMjMzYyBzb2xpZCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjIzM2M7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5kaXYucHJvZHVjdC1ib3gtd3JhcHBlciBkaXYucHJvZHVjdC1pbmZvIC5wcmljZSB7XG4gIGZvbnQtZmFtaWx5OiBtLXJlZztcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbmRpdi5wcm9kdWN0LWJveC13cmFwcGVyIC5zdHlsZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IGluaGVyaXQ7XG4gIHotaW5kZXg6IDU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzUlKTtcbiAgZ3JpZC1nYXA6IDEuNXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDUwcHgsIDFmcikpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICBkaXYucHJvZHVjdC1ib3gtd3JhcHBlciB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'shared-product-box',
                templateUrl: './product-box.component.html',
                styleUrls: ['./product-box.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/shared/components/product-flow/product-flow.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/shared/components/product-flow/product-flow.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFlowComponent", function() { return ProductFlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductFlowComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductFlowComponent.ɵfac = function ProductFlowComponent_Factory(t) { return new (t || ProductFlowComponent)(); };
ProductFlowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductFlowComponent, selectors: [["shared-product-flow"]], decls: 31, vars: 0, consts: [[1, "product-flow-wrapper"], [1, "flow-step"], [1, "link", "info"], ["src", "/assets/icons/info-dark.svg", "alt", "info-icon"], [1, "link", "design"], ["src", "/assets/icons/paint.svg", "alt", "info-icon"]], template: function ProductFlowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lade dein Foto hoch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Such dir ein Bild deines Haustiers aus und lade es auf die Webseite hoch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "FOTO GUIDE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "W\u00E4hle einen Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " W\u00E4hle einen aus vielen K\u00FCnstlern und wende Ihren Art-Style auf dein Bild an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "DESIGN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Bestelle dein Meisterwerk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Wo willst du deinen Vierbeiner verewigen? In der K\u00FCche? Im Schlafzimmer? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ANGEBOT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  position: relative;\n  background-color: #2b2d42;\n}\n\n.product-flow-wrapper[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 2rem 2rem 0 0;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  max-width: 1980px;\n  padding: 4rem 0 4rem 0;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  align-items: center;\n}\n\n.product-flow-wrapper[_ngcontent-%COMP%]   .flow-step[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 400px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.product-flow-wrapper[_ngcontent-%COMP%]   .flow-step[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  line-height: 48px;\n  font-size: 1.2rem;\n  font-family: m-bold;\n  background-color: #1f2530;\n  color: aliceblue;\n  margin-bottom: 1rem;\n}\n\n.product-flow-wrapper[_ngcontent-%COMP%]   .flow-step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: m-bold;\n  color: #1f2530;\n  margin-bottom: 8px;\n  font-size: 1.2rem;\n}\n\n.product-flow-wrapper[_ngcontent-%COMP%]   .flow-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-family: m-reg;\n  color: #1f2530;\n  margin-bottom: 0.5rem;\n}\n\n.product-flow-wrapper[_ngcontent-%COMP%]   .flow-step[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  color: #ef233c;\n  position: relative;\n}\n\n.product-flow-wrapper[_ngcontent-%COMP%]   .flow-step[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-left: 0.5rem;\n  right: 0;\n  transform: translateX(100%);\n  height: 1.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29tcG9uZW50cy9wcm9kdWN0LWZsb3cvQzpcXFVzZXJzXFxqb25hc1xcRG9jdW1lbnRzXFxnaXQtcHJvamVjdHNcXHN0eWxlLXRyYW5zZmVyLXZhbGlkYXRpb24tcHJvdG90eXBlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaGFyZWRcXGNvbXBvbmVudHNcXHByb2R1Y3QtZmxvd1xccHJvZHVjdC1mbG93LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QtZmxvdy9DOlxcVXNlcnNcXGpvbmFzXFxEb2N1bWVudHNcXGdpdC1wcm9qZWN0c1xcc3R5bGUtdHJhbnNmZXItdmFsaWRhdGlvbi1wcm90b3R5cGUvc3JjXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29tcG9uZW50cy9wcm9kdWN0LWZsb3cvcHJvZHVjdC1mbG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ0hnQjtBQ0dsQjs7QUZHQTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUVBRjs7QUZFRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUVBSjs7QUZFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUVBTjs7QUZHSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUVETjs7QUZJSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBRUZOOztBRktJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNDN0RVO0VEOERWLGtCQUFBO0FFSE47O0FGSU07RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBRUZSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29tcG9uZW50cy9wcm9kdWN0LWZsb3cvcHJvZHVjdC1mbG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2NvbG9ycy5zY3NzXCI7XHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxufVxyXG5cclxuLnByb2R1Y3QtZmxvdy13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTk4MHB4O1xyXG4gIHBhZGRpbmc6IDRyZW0gMCA0cmVtIDA7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5mbG93LXN0ZXAge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtLWJvbGQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjI1MzA7XHJcbiAgICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LWZhbWlseTogbS1ib2xkO1xyXG4gICAgICBjb2xvcjogIzFmMjUzMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBmb250LWZhbWlseTogbS1yZWc7XHJcbiAgICAgIGNvbG9yOiAjMWYyNTMwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICBoZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gLndhdmUge1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBsZWZ0OiAwO1xyXG4vLyAgIHotaW5kZXg6IC0xO1xyXG4vLyAgIG9iamVjdC1maXQ6IGZpbGw7XHJcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05NSUpO1xyXG4vLyAgICY6bGFzdC1jaGlsZCB7XHJcbi8vICAgICB0b3A6IHVuc2V0O1xyXG4vLyAgICAgYm90dG9tOiAtMTAwO1xyXG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZykgdHJhbnNsYXRlWSgycHgpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMjRweCkge1xyXG59XHJcbiIsIiRhbGljZS1ibHVlOiAjZWRmMmY0O1xyXG4kcHJpbWFyeS1jb2xvcjogI2VmMjMzYztcclxuJHNlY29uZGFyeS1jb2xvcjogIzJiMmQ0MjtcclxuJG1hbmF0ZWUtZ3JleTogIzhkOTlhZTtcclxuXHJcbiRsaWdodC1kYXJrLWZvbnQtY29sb3I6ICNjYmNiY2I7XHJcblxyXG4kZGFyay1mb250LWNvbG9yOiAjMjkzMjQxO1xyXG4kZGFya2VzdC1mb250LWNvbG9yOiAjMWYyNTMwO1xyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyZDQyO1xufVxuXG4ucHJvZHVjdC1mbG93LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDAgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxOTgwcHg7XG4gIHBhZGRpbmc6IDRyZW0gMCA0cmVtIDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2R1Y3QtZmxvdy13cmFwcGVyIC5mbG93LXN0ZXAge1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnByb2R1Y3QtZmxvdy13cmFwcGVyIC5mbG93LXN0ZXAgaDIge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC1mYW1pbHk6IG0tYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjUzMDtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5wcm9kdWN0LWZsb3ctd3JhcHBlciAuZmxvdy1zdGVwIGgzIHtcbiAgZm9udC1mYW1pbHk6IG0tYm9sZDtcbiAgY29sb3I6ICMxZjI1MzA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4ucHJvZHVjdC1mbG93LXdyYXBwZXIgLmZsb3ctc3RlcCBwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogbS1yZWc7XG4gIGNvbG9yOiAjMWYyNTMwO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ucHJvZHVjdC1mbG93LXdyYXBwZXIgLmZsb3ctc3RlcCBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogI2VmMjMzYztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2R1Y3QtZmxvdy13cmFwcGVyIC5mbG93LXN0ZXAgYSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICBoZWlnaHQ6IDEuM3JlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductFlowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'shared-product-flow',
                templateUrl: './product-flow.component.html',
                styleUrls: ['./product-flow.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/shared/components/style-circle/style-circle.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/shared/components/style-circle/style-circle.component.ts ***!
  \*************************************************************************************/
/*! exports provided: StyleCircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleCircleComponent", function() { return StyleCircleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StyleCircleComponent {
    constructor() {
        this.isSelected = false;
        this.verticalLayout = false;
    }
    ngOnInit() { }
}
StyleCircleComponent.ɵfac = function StyleCircleComponent_Factory(t) { return new (t || StyleCircleComponent)(); };
StyleCircleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StyleCircleComponent, selectors: [["shared-style-circle"]], inputs: { isSelected: "isSelected", styleImage: "styleImage", verticalLayout: "verticalLayout" }, decls: 4, vars: 6, consts: [[1, "circle"], ["alt", "", 1, "style-image", 3, "src"], [1, "style-title"]], template: function StyleCircleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx.isSelected)("vertical-layout", ctx.verticalLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.styleImage == null ? null : ctx.styleImage.image == null ? null : ctx.styleImage.image.publicUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.styleImage == null ? null : ctx.styleImage.artist);
    } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n  align-items: center;\n  box-sizing: border-box;\n  padding-bottom: 1.5rem;\n  display: flex;\n  justify-content: center;\n}\n\n.circle[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 100ms;\n  width: auto;\n  height: 100%;\n}\n\n.circle[_ngcontent-%COMP%]   .style-image[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 50%;\n  height: 100%;\n  width: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n  box-sizing: border-box;\n}\n\n.circle.selected[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n\n.style-title[_ngcontent-%COMP%] {\n  font-family: m-bold;\n  font-size: 12px;\n  color: white;\n  margin-top: 0.3rem;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n}\n\n.circle.vertical-layout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.circle.vertical-layout[_ngcontent-%COMP%]   .style-image[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n}\n\n@media (min-width: 1024px) {\n  .circle[_ngcontent-%COMP%]:hover::before {\n    opacity: 1;\n    content: \"\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29tcG9uZW50cy9zdHlsZS1jaXJjbGUvQzpcXFVzZXJzXFxqb25hc1xcRG9jdW1lbnRzXFxnaXQtcHJvamVjdHNcXHN0eWxlLXRyYW5zZmVyLXZhbGlkYXRpb24tcHJvdG90eXBlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaGFyZWRcXGNvbXBvbmVudHNcXHN0eWxlLWNpcmNsZVxcc3R5bGUtY2lyY2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb21wb25lbnRzL3N0eWxlLWNpcmNsZS9zdHlsZS1jaXJjbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNERjs7QURHRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLHNCQUFBO0FDREo7O0FEMkJFO0VBQ0UsVUFBQTtBQ3hCSjs7QUQ0QkE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ3pCRjs7QUQ0QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ3pCRjs7QUQwQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ3hCSjs7QUQ0QkE7RUFFSTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VDMUJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jb21wb25lbnRzL3N0eWxlLWNpcmNsZS9zdHlsZS1jaXJjbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vY29sb3JzLnNjc3NcIjtcclxuXHJcbjpob3N0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDEwMG1zO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLnN0eWxlLWltYWdlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLy8gJjo6YmVmb3JlIHtcclxuICAvLyAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gICB3aWR0aDogMTAwJTtcclxuICAvLyAgIGhlaWdodDogMTAwJTtcclxuICAvLyAgIHRvcDogMDtcclxuICAvLyAgIGxlZnQ6IDA7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgLy8gICBvcGFjaXR5OiAwO1xyXG4gIC8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC8vICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgLy8gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC8vIH1cclxufVxyXG5cclxuLy8gLmhvb2sge1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICBoZWlnaHQ6IDJyZW07XHJcbi8vICAgdG9wOiA1MCU7XHJcbi8vICAgcmlnaHQ6IDUwJTtcclxuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG4vLyB9XHJcblxyXG4uY2lyY2xlLnNlbGVjdGVkIHtcclxuICAmOjpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5zdHlsZS10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IG0tYm9sZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLmNpcmNsZS52ZXJ0aWNhbC1sYXlvdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICAuc3R5bGUtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNpcmNsZSB7XHJcbiAgICAmOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jaXJjbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDEwMG1zO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNpcmNsZSAuc3R5bGUtaW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2lyY2xlLnNlbGVjdGVkOjpiZWZvcmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc3R5bGUtdGl0bGUge1xuICBmb250LWZhbWlseTogbS1ib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuXG4uY2lyY2xlLnZlcnRpY2FsLWxheW91dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY2lyY2xlLnZlcnRpY2FsLWxheW91dCAuc3R5bGUtaW1hZ2Uge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5jaXJjbGU6aG92ZXI6OmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjb250ZW50OiBcIlwiO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleCircleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'shared-style-circle',
                templateUrl: './style-circle.component.html',
                styleUrls: ['./style-circle.component.scss'],
            }]
    }], function () { return []; }, { isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styleImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], verticalLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/shared/shared.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/shared/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_product_box_product_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product-box/product-box.component */ "./src/app/components/shared/components/product-box/product-box.component.ts");
/* harmony import */ var _components_style_circle_style_circle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/style-circle/style-circle.component */ "./src/app/components/shared/components/style-circle/style-circle.component.ts");
/* harmony import */ var _components_product_flow_product_flow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-flow/product-flow.component */ "./src/app/components/shared/components/product-flow/product-flow.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_headline_headline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/headline/headline.component */ "./src/app/components/shared/components/headline/headline.component.ts");
/* harmony import */ var _components_photo_guide_photo_guide_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/photo-guide/photo-guide.component */ "./src/app/components/shared/components/photo-guide/photo-guide.component.ts");









const declarations = [
    _components_product_box_product_box_component__WEBPACK_IMPORTED_MODULE_2__["ProductBoxComponent"],
    _components_style_circle_style_circle_component__WEBPACK_IMPORTED_MODULE_3__["StyleCircleComponent"],
    _components_product_flow_product_flow_component__WEBPACK_IMPORTED_MODULE_4__["ProductFlowComponent"],
    _components_headline_headline_component__WEBPACK_IMPORTED_MODULE_6__["HeadlineComponent"],
    _components_photo_guide_photo_guide_component__WEBPACK_IMPORTED_MODULE_7__["PhotoGuideComponent"],
];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_product_box_product_box_component__WEBPACK_IMPORTED_MODULE_2__["ProductBoxComponent"],
        _components_style_circle_style_circle_component__WEBPACK_IMPORTED_MODULE_3__["StyleCircleComponent"],
        _components_product_flow_product_flow_component__WEBPACK_IMPORTED_MODULE_4__["ProductFlowComponent"],
        _components_headline_headline_component__WEBPACK_IMPORTED_MODULE_6__["HeadlineComponent"],
        _components_photo_guide_photo_guide_component__WEBPACK_IMPORTED_MODULE_7__["PhotoGuideComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]], exports: [_components_product_box_product_box_component__WEBPACK_IMPORTED_MODULE_2__["ProductBoxComponent"],
        _components_style_circle_style_circle_component__WEBPACK_IMPORTED_MODULE_3__["StyleCircleComponent"],
        _components_product_flow_product_flow_component__WEBPACK_IMPORTED_MODULE_4__["ProductFlowComponent"],
        _components_headline_headline_component__WEBPACK_IMPORTED_MODULE_6__["HeadlineComponent"],
        _components_photo_guide_photo_guide_component__WEBPACK_IMPORTED_MODULE_7__["PhotoGuideComponent"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: declarations,
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
                exports: [declarations, _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyA9E-cTrRAzeIkZFo-0-6pBX-RPorz-t3Y',
        authDomain: 'petai-validation.firebaseapp.com',
        projectId: 'petai-validation',
        storageBucket: 'petai-validation.appspot.com',
        messagingSenderId: '557454141908',
        appId: '1:557454141908:web:334fa81265bf7f62ba0e41',
        measurementId: 'G-4YT6SZ8HP9',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jonas\Documents\git-projects\style-transfer-validation-prototype\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map