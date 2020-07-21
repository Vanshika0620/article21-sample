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




const routes = [];
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
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");




class AppComponent {
    constructor() {
        this.title = 'article21';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
        this.email = "naman.18bcs1103@abes.ac.in";
        this.number = 7017401169;
    }
    sendmail() {
        this.url = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=' + this.email + '&su=Your+Subject+here&body=&ui=2&tf=1&pli=1';
        window.open(this.url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 31, vars: 3, consts: [[1, "foot-main"], [1, "foot-top"], [1, "top1"], [1, "txt1"], [1, "foot-content"], [1, "top2"], ["id", "img4", "src", "data:image/jpeg;base64,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"], [1, "top3"], [1, "top4"], [3, "href"], ["src", "../../assets/icons8-phone-100.png", "id", "callimg"], ["src", "../../assets/email.png", "id", "mailimg", 3, "click"], [1, "foot-base"], ["id", "img1", "src", "../../assets/icons8-facebook-96.png"], ["id", "img2", "src", "../../assets/icons8-twitter-96 (1).png"], ["id", "img3", "src", "../../assets/google-plus.png"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ABOUT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Wordpandit is a product of Learning Inc., an alternate education and content company.We offer a unique learning approach,and stand for an exercise in 'LEARNING',for us as well as our users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LEARNING INC.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "RECENT POSTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Wordpandit is a product of Learning Inc., an alternate education and content company.We offer a unique learning approach,and stand for an exercise in 'LEARNING',for us as well as our users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_26_listener() { return ctx.sendmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Phone no:", ctx.number, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email:", ctx.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:+91", ctx.number, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".foot-main[_ngcontent-%COMP%]{\r\n    width:1280px;\r\n    height:350px;\r\n    position: relative;\r\n  \r\n    \r\n   \r\n}\r\n.foot-top[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height:300px;\r\n    position:absolute;\r\n    left:0px;\r\n    top:0px;\r\n    background-color: black;\r\n    opacity:60%;\r\n}\r\n#img1[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left:800px;\r\n    top:10px;\r\n    width:30px;\r\n    height: 30px;\r\n    \r\n}\r\n#img1[_ngcontent-%COMP%]:hover{\r\n    width:40px;\r\n    height: 40px;\r\n    left:800px;\r\n    top:5px;\r\n}\r\n#img2[_ngcontent-%COMP%]:hover{\r\n    width:40px;\r\n    height: 40px;\r\n    left:840px;\r\n    top:5px;\r\n}\r\n#img3[_ngcontent-%COMP%]:hover{\r\n    width:40px;\r\n    height: 40px;\r\n    left:880px;\r\n    top:5px;\r\n}\r\n#img2[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left:840px;\r\n    top:10px;\r\n    width:30px;\r\n    height: 30px;\r\n}\r\n#img3[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left:880px;\r\n    top:10px;\r\n    width:30px;\r\n    height: 30px;\r\n}\r\n#callimg[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left:-25px;\r\n    top:50px;\r\n    width:30px;\r\n    height: 30px;\r\n}\r\n#callimg[_ngcontent-%COMP%]:hover{\r\n    position: absolute;\r\n    left:-30px;\r\n    top:40px;\r\n    width:40px;\r\n    height: 40px;\r\n}\r\n#mailimg[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left:-25px;\r\n    top:85px;\r\n    width:30px;\r\n    height: 30px;\r\n}\r\n#mailimg[_ngcontent-%COMP%]:hover{\r\n    position: absolute;\r\n    left:-25px;\r\n    top:80px;\r\n    width:35px;\r\n    height: 35px;\r\n}\r\n#img4[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left:10px;\r\n    top:60px;\r\n    width:220px;\r\n    height: 150px;\r\n\r\n}\r\n.top1[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    width:270px;\r\n    height:250px;\r\n    top:30px;\r\n    left:60px;\r\n   \r\n}\r\n.top2[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    width:270px;\r\n    height:250px;\r\n    top:30px;\r\n    left:360px;\r\n    \r\n}\r\n.top3[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    width:270px;\r\n    height:250px;\r\n    top:30px;\r\n    left:660px;\r\n   \r\n}\r\n.top4[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    width:270px;\r\n    height:250px;\r\n    top:30px;\r\n    left:960px;\r\n    \r\n}\r\n.txt1[_ngcontent-%COMP%]{\r\n    color: rgb(73, 231, 73);\r\n    position: absolute;\r\n    left:10px;\r\n    top:0px;\r\n    text-align: left;\r\n    font-weight: 300;\r\n}\r\n.foot-content[_ngcontent-%COMP%]{\r\n    color: white;\r\n    position: absolute;\r\n    top:40px;\r\n    left:10px;\r\n}\r\n.foot-base[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height:50px;\r\n    position:absolute;\r\n    bottom:0px;\r\n    background-color: black;\r\n  opacity: 80%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7Ozs7QUFJdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixPQUFPO0FBQ1g7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLE9BQU87QUFDWDtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsT0FBTztBQUNYO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0lBQ1gsYUFBYTs7QUFFakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFFBQVE7SUFDUixTQUFTOztBQUViO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixRQUFRO0lBQ1IsVUFBVTs7QUFFZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtJQUNSLFVBQVU7O0FBRWQ7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFFBQVE7SUFDUixVQUFVOztBQUVkO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztBQUNiO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsdUJBQXVCO0VBQ3pCLFlBQVk7O0FBRWQiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdC1tYWlue1xyXG4gICAgd2lkdGg6MTI4MHB4O1xyXG4gICAgaGVpZ2h0OjM1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICAgXHJcbiAgIFxyXG59XHJcbi5mb290LXRvcHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgdG9wOjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTo2MCU7XHJcbn1cclxuI2ltZzF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjgwMHB4O1xyXG4gICAgdG9wOjEwcHg7XHJcbiAgICB3aWR0aDozMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgXHJcbn1cclxuI2ltZzE6aG92ZXJ7XHJcbiAgICB3aWR0aDo0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGVmdDo4MDBweDtcclxuICAgIHRvcDo1cHg7XHJcbn1cclxuI2ltZzI6aG92ZXJ7XHJcbiAgICB3aWR0aDo0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGVmdDo4NDBweDtcclxuICAgIHRvcDo1cHg7XHJcbn1cclxuI2ltZzM6aG92ZXJ7XHJcbiAgICB3aWR0aDo0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGVmdDo4ODBweDtcclxuICAgIHRvcDo1cHg7XHJcbn1cclxuI2ltZzJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0Ojg0MHB4O1xyXG4gICAgdG9wOjEwcHg7XHJcbiAgICB3aWR0aDozMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbiNpbWcze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDo4ODBweDtcclxuICAgIHRvcDoxMHB4O1xyXG4gICAgd2lkdGg6MzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4jY2FsbGltZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6LTI1cHg7XHJcbiAgICB0b3A6NTBweDtcclxuICAgIHdpZHRoOjMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuI2NhbGxpbWc6aG92ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0Oi0zMHB4O1xyXG4gICAgdG9wOjQwcHg7XHJcbiAgICB3aWR0aDo0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbiNtYWlsaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDotMjVweDtcclxuICAgIHRvcDo4NXB4O1xyXG4gICAgd2lkdGg6MzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4jbWFpbGltZzpob3ZlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6LTI1cHg7XHJcbiAgICB0b3A6ODBweDtcclxuICAgIHdpZHRoOjM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuI2ltZzR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjEwcHg7XHJcbiAgICB0b3A6NjBweDtcclxuICAgIHdpZHRoOjIyMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuXHJcbn1cclxuLnRvcDF7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjI3MHB4O1xyXG4gICAgaGVpZ2h0OjI1MHB4O1xyXG4gICAgdG9wOjMwcHg7XHJcbiAgICBsZWZ0OjYwcHg7XHJcbiAgIFxyXG59XHJcbi50b3Aye1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDoyNzBweDtcclxuICAgIGhlaWdodDoyNTBweDtcclxuICAgIHRvcDozMHB4O1xyXG4gICAgbGVmdDozNjBweDtcclxuICAgIFxyXG59XHJcbi50b3Aze1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDoyNzBweDtcclxuICAgIGhlaWdodDoyNTBweDtcclxuICAgIHRvcDozMHB4O1xyXG4gICAgbGVmdDo2NjBweDtcclxuICAgXHJcbn1cclxuLnRvcDR7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjI3MHB4O1xyXG4gICAgaGVpZ2h0OjI1MHB4O1xyXG4gICAgdG9wOjMwcHg7XHJcbiAgICBsZWZ0Ojk2MHB4O1xyXG4gICAgXHJcbn1cclxuLnR4dDF7XHJcbiAgICBjb2xvcjogcmdiKDczLCAyMzEsIDczKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MTBweDtcclxuICAgIHRvcDowcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4uZm9vdC1jb250ZW50e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjQwcHg7XHJcbiAgICBsZWZ0OjEwcHg7XHJcbn1cclxuLmZvb3QtYmFzZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDgwJTtcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 49, vars: 0, consts: [[1, "navbar", "navbar-expand-md", "bg-light", "navbar-light"], ["href", "#", 1, "navbar-brand"], ["href", "#", 1, "collapse-search"], [1, "fas", "fa-search"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavbar", 1, "navbar-toggler", "collapse-icon"], [1, "navbar-toggler-icon", 2, "background-color", "white"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "main-nav"], [1, "nav-item"], [1, "dropdown"], [1, "dropbtn", 2, "color", "#4a91f2", "border-bottom", "2px solid #4d4dff"], [1, "dropbtn"], [1, "fas", "fa-caret-down", 2, "margin-left", "5px"], [1, "dropdown-content", "dropdown-legal"], ["href", "#"], [1, "dropdown-content", "dropdown-gk"], [1, "nav-item", 2, "margin-top", "20px"], ["href", "#", 1, "search", 2, "color", "black", "height", "20px"], [1, "nav-hr"], [1, "dropdown", "login", 2, "left", "350%"], [1, "dropdown", "login", 2, "left", "300%"], [1, "btn-full"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Article21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "legal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "U.G.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "P.G.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "JUDICIARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "gk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "U.G.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "P.G.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "JUDICIARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "SIGNUP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.main[_ngcontent-%COMP%]{\r\n  position: relative;  \r\n  width:1280px;\r\n  height: auto;\r\n  \r\n  \r\n}\r\nnav[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  top: 0px;\r\n  height: 80px;\r\n  background-color: rgba(255, 255, 255, 0.781);\r\n}\r\n.main-nav[_ngcontent-%COMP%]{\r\n  float: right;\r\n  list-style: none;\r\n  margin-top: 17px;\r\n  margin-left: 35%;\r\n  margin-right: 20%;\r\n  background: none;\r\n  \r\n}\r\n.main-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  margin-left: 40px;\r\n}\r\n.collapse-search[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.dropbtn[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  padding: 8px 0;\r\n  color: rgba(0, 0, 0, 0.596);\r\n  font-family: \"Open Sans\",Arial,sans-serif;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-size: 17px;\r\n  font-weight: 500;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.dropdown[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #fff;\r\n  padding: 10px 10px 10px 10px;\r\n  font-family: \"Open Sans\",Arial,sans-serif;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  border-top: 2px solid #4a91f2;\r\n  font-weight: 300;\r\n  min-width: 100px;\r\n  z-index: 1;\r\n}\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(243, 243, 243);\r\n  color: rgba(27, 25, 25, 0.603);\r\n  transition: 0.3s;\r\n}\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n  transition: 0.2s;\r\n}\r\n.nav-hr[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.login[_ngcontent-%COMP%]{\r\n  float: right;\r\n  list-style: none;\r\n  margin-left: 10%;\r\n  margin-right: 5%;\r\n  background: none;\r\n}\r\n.btn-full[_ngcontent-%COMP%]{\r\n  background-color: #4a91f2;\r\n  border: 1px solid #066af7;\r\n  border-radius: 300px;\r\n  padding: 8px 5px;\r\n  color: #000;\r\n  font-family: 'Balsamiq Sans';\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-size: 17px;\r\n  font-weight: 500;\r\n  margin-top: 10px;\r\n}\r\n.btn-full[_ngcontent-%COMP%]:hover{\r\n  background-color: #066af7;\r\n  transition: 0.5s;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 1200px){\r\n  .main-nav[_ngcontent-%COMP%]{\r\n    margin-left: 30%;\r\n    \r\n  }\r\n  .main-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    margin-left: 33px;\r\n  }\r\n  .login[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin-right: 60%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1023px){\r\n  .main-nav[_ngcontent-%COMP%]{\r\n    margin-left: 20%;  \r\n  }\r\n  .main-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    margin-left: 30px;\r\n  }\r\n  .login[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin-left: 5%;\r\n    margin-right: 75%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 767px){\r\n  \r\n  .collapse-search[_ngcontent-%COMP%]{\r\n    display: block;\r\n    color: black;\r\n    height: 20px;\r\n    margin-left: 60%;\r\n    margin-top: 20px;\r\n  }\r\n  nav[_ngcontent-%COMP%]{\r\n    height: auto;\r\n  }\r\n  .collapse-icon[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    margin-right: 30px;\r\n  }\r\n  .login[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin-right: 370%;\r\n  }\r\n  .main-nav[_ngcontent-%COMP%]{\r\n    margin-right: 20px;\r\n  }\r\n  .dropdown[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(0, 0, 0, 0.075);\r\n  }\r\n  .dropdown-content[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    right: 70px;\r\n    top: 8px;\r\n  }\r\n  .dropdown-gk[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 40px;\r\n  }\r\n  .nav-item[_ngcontent-%COMP%]   .btn-full[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .nav-item[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .nav-hr[_ngcontent-%COMP%]{\r\n    display: block;\r\n  }\r\n\r\n \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTs7O0FBR2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVk7RUFDWiw0Q0FBNEM7QUFDOUM7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCOztBQUVsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IseUNBQXlDO0VBQ3pDLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBS0EseUJBQXlCO0FBRXpCLHdCQUF3QjtBQUN4QjtFQUNFO0lBQ0UsZ0JBQWdCOztFQUVsQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtBQUNGO0FBRUEsZ0NBQWdDO0FBQ2hDOztFQUVFO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHNDQUFzQztFQUN4QztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0VBQ1Y7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsY0FBYztFQUNoQjs7O0FBR0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4ubWFpbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcclxuICB3aWR0aDoxMjgwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIFxyXG4gIFxyXG59XHJcbm5hdntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43ODEpO1xyXG59XHJcblxyXG4ubWFpbi1uYXZ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgXHJcbn1cclxuLm1haW4tbmF2IGxpe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG4uY29sbGFwc2Utc2VhcmNoe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmRyb3BidG4ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDhweCAwO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTk2KTtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIixBcmlhbCxzYW5zLXNlcmlmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzRhOTFmMjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG4gIGNvbG9yOiByZ2JhKDI3LCAyNSwgMjUsIDAuNjAzKTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuLm5hdi1ocntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5sb2dpbntcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1mdWxse1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTkxZjI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzA2NmFmNztcclxuICBib3JkZXItcmFkaXVzOiAzMDBweDtcclxuICBwYWRkaW5nOiA4cHggNXB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnQmFsc2FtaXEgU2Fucyc7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uYnRuLWZ1bGw6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NmFmNztcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKi0tLS1NRURJQSBRVUVSSUVTLS0tLS0qL1xyXG5cclxuLypCaWcgdGFibGV0cyB0byAxMjAwcHgqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgLm1haW4tbmF2e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIFxyXG4gIH1cclxuICAubWFpbi1uYXYgbGl7XHJcbiAgICBtYXJnaW4tbGVmdDogMzNweDtcclxuICB9XHJcbiAgLmxvZ2lue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKlNtYWxsIHRhYmxldHMgdG8gYmlnIHRhYmxldHMqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCl7XHJcbiAgLm1haW4tbmF2e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTsgIFxyXG4gIH1cclxuICAubWFpbi1uYXYgbGl7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICB9XHJcbiAgLmxvZ2lue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3NSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKlNtYWxsIHBob25lcyB0byBzbWFsbCB0YWJsZXRzKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgXHJcbiAgLmNvbGxhcHNlLXNlYXJjaHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIG5hdntcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLmNvbGxhcHNlLWljb257XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICAubG9naW57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM3MCU7XHJcbiAgfVxyXG4gIC5tYWluLW5hdntcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbiAgLmRyb3Bkb3duOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1jb250ZW50e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDcwcHg7XHJcbiAgICB0b3A6IDhweDtcclxuICB9XHJcbiAgLmRyb3Bkb3duLWdre1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogNDBweDtcclxuICB9XHJcbiAgLm5hdi1pdGVtIC5idG4tZnVsbHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5uYXYtaXRlbSAuc2VhcmNoe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLm5hdi1ocntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiBcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 2, vars: 0, consts: [[1, "loader"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loader[_ngcontent-%COMP%] {\r\n    -webkit-animation:spin 1s infinite linear;\r\n            animation:spin 1s infinite linear;\r\n    border:solid 2vmin transparent;\r\n    border-radius:50%;\r\n    border-right-color:#09f;\r\n    border-top-color:#09f;\r\n    box-sizing:border-box;\r\n    height:20vmin;\r\n    position: fixed;\r\n    top:270px;\r\n    left:550px;\r\n    width:20vmin;\r\n    z-index:1;}\r\n    .loader[_ngcontent-%COMP%]:before {\r\n      -webkit-animation:spin 2s infinite linear;\r\n              animation:spin 2s infinite linear;\r\n      border:solid 2vmin transparent;\r\n      border-radius:50%;\r\n      border-right-color:#3cf;\r\n      border-top-color:#3cf;\r\n      box-sizing:border-box;\r\n      content:\"\";\r\n      height:16vmin;\r\n      left:0;\r\n      position:absolute;\r\n      top:0;\r\n      width:16vmin;\r\n    }\r\n    .loader[_ngcontent-%COMP%]:after {\r\n      -webkit-animation:spin 3s infinite linear;\r\n              animation:spin 3s infinite linear;\r\n      border:solid 2vmin transparent;\r\n      border-radius:50%;\r\n      border-right-color:#6ff;\r\n      border-top-color:#6ff;\r\n      box-sizing:border-box;\r\n      content:\"\";\r\n      height:12vmin;\r\n      left:2vmin;\r\n      position:absolute;\r\n      top:2vmin;\r\n      width:12vmin;\r\n    }\r\n    @-webkit-keyframes spin {\r\n    100% {\r\n      transform:rotate(360deg);\r\n    }\r\n  }\r\n    @keyframes spin {\r\n    100% {\r\n      transform:rotate(360deg);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osU0FBUyxDQUFDO0lBQ1Y7TUFDRSx5Q0FBaUM7Y0FBakMsaUNBQWlDO01BQ2pDLDhCQUE4QjtNQUM5QixpQkFBaUI7TUFDakIsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQixxQkFBcUI7TUFDckIsVUFBVTtNQUNWLGFBQWE7TUFDYixNQUFNO01BQ04saUJBQWlCO01BQ2pCLEtBQUs7TUFDTCxZQUFZO0lBQ2Q7SUFDQTtNQUNFLHlDQUFpQztjQUFqQyxpQ0FBaUM7TUFDakMsOEJBQThCO01BQzlCLGlCQUFpQjtNQUNqQix1QkFBdUI7TUFDdkIscUJBQXFCO01BQ3JCLHFCQUFxQjtNQUNyQixVQUFVO01BQ1YsYUFBYTtNQUNiLFVBQVU7TUFDVixpQkFBaUI7TUFDakIsU0FBUztNQUNULFlBQVk7SUFDZDtJQUdGO0lBQ0U7TUFDRSx3QkFBd0I7SUFDMUI7RUFDRjtJQUpBO0lBQ0U7TUFDRSx3QkFBd0I7SUFDMUI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xyXG4gICAgYW5pbWF0aW9uOnNwaW4gMXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgYm9yZGVyOnNvbGlkIDJ2bWluIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IzA5ZjtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IzA5ZjtcclxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgIGhlaWdodDoyMHZtaW47XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6MjcwcHg7XHJcbiAgICBsZWZ0OjU1MHB4O1xyXG4gICAgd2lkdGg6MjB2bWluO1xyXG4gICAgei1pbmRleDoxO31cclxuICAgIC5sb2FkZXI6YmVmb3JlIHtcclxuICAgICAgYW5pbWF0aW9uOnNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICBib3JkZXI6c29saWQgMnZtaW4gdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6IzNjZjtcclxuICAgICAgYm9yZGVyLXRvcC1jb2xvcjojM2NmO1xyXG4gICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgaGVpZ2h0OjE2dm1pbjtcclxuICAgICAgbGVmdDowO1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgdG9wOjA7XHJcbiAgICAgIHdpZHRoOjE2dm1pbjtcclxuICAgIH1cclxuICAgIC5sb2FkZXI6YWZ0ZXIge1xyXG4gICAgICBhbmltYXRpb246c3BpbiAzcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgIGJvcmRlcjpzb2xpZCAydm1pbiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjojNmZmO1xyXG4gICAgICBib3JkZXItdG9wLWNvbG9yOiM2ZmY7XHJcbiAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICBoZWlnaHQ6MTJ2bWluO1xyXG4gICAgICBsZWZ0OjJ2bWluO1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgdG9wOjJ2bWluO1xyXG4gICAgICB3aWR0aDoxMnZtaW47XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.css']
            }]
    }], function () { return []; }, null); })();


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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\vansh\Desktop\demo\article21-sample\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map