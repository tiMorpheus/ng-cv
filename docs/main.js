(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n\n\n<section>\n  <router-outlet></router-outlet>\n</section>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R5bXVyL0RvY3VtZW50cy9hbmd1bGFyLXR1dG9yaWFsL3R5bXVyLWN2L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHlDQUF5QztFQUN6QyxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIGNvbG9yOiAjMzY5O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNTAlO1xufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



// import * as responsiveNav from "node_modules/responsive-nav/responsive-nav.js";
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Tymur Tolochko';
    }
    AppComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            // var nav = responsiveNav(".nav-collapse");
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _site_detail_site_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./site-detail/site-detail.component */ "./src/app/site-detail/site-detail.component.ts");
/* harmony import */ var _site_site_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./site/site.component */ "./src/app/site/site.component.ts");



 // <-- NgModel lives here









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _site_detail_site_detail_component__WEBPACK_IMPORTED_MODULE_11__["SiteDetailComponent"],
                _site_site_component__WEBPACK_IMPORTED_MODULE_12__["SiteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"about-me-home\">\n\n\n  <div class=\"flex-container\">\n\n\n    <div class=\"my-img-wrap\">\n\n      <img class=\"me-img\" src=\"assets/img/me.jpeg\" alt=\"\">\n\n    </div>\n\n\n    <div class=\"about-me-home-block\">\n\n      <div class=\"block-header\">\n\n        <h4 class=\"about-me-title\"> Tymur Tolochko</h4>\n        <h5 class=\"my-job-title\">Web Developer</h5>\n      </div>\n\n\n      <div class=\"block-content\">\n\n\n        <p class=\"my-text\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda, autem dignissimos eaque fuga laudantium libero maiores optio quia reiciendis suscipit, totam, voluptatem? A dolorum fuga incidunt laborum reprehenderit. Exercitationem harum non praesentium quas ullam! Aliquid earum, illo, laboriosam magnam molestias optio possimus quas quia reprehenderit, sint veniam veritatis vero!\n        </p>\n      </div>\n\n\n\n    </div>\n\n\n  </div>\n\n</div>\n\n\n<div class=\"sites-home-section\">\n\n\n\n  <div class=\"wrapper\">\n\n      <div class=\"sites-block-nav\">\n\n\n        <div class=\"flex-blocks\">\n          <div class=\"left-list-block\">\n            <h2 class=\"block-title\">Sites I've been working with:</h2>\n            <h3 class=\"block-subtitle\">Click to see the description</h3>\n\n\n            <ul class=\"sites\">\n              <li *ngFor=\"let site of sites\"\n                  [class.selected]=\"site === selectedSite\"\n                  (click)=\"onSelect(site)\">\n                {{site.name}}\n              </li>\n            </ul>\n          </div>\n\n\n          <div class=\"right-description-block\">\n            <app-site-detail [site]=\"selectedSite\"></app-site-detail>\n          </div>\n        </div>\n\n\n\n\n\n      </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-me-home .flex-container {\n  padding: 0 15px;\n  display: flex;\n  flex-wrap: wrap; }\n  .about-me-home .flex-container .my-img-wrap {\n    width: 100%; }\n  .about-me-home .flex-container .my-img-wrap .me-img {\n      width: 100%; }\n  @media screen and (min-width: 991px) {\n  .about-me-home {\n    max-width: 1440px;\n    margin: 0 auto; }\n    .about-me-home .flex-container {\n      padding: 0;\n      flex-wrap: nowrap;\n      align-items: center; }\n      .about-me-home .flex-container .my-img-wrap {\n        width: 300px;\n        margin-right: 100px; }\n        .about-me-home .flex-container .my-img-wrap .me-img {\n          width: 300px;\n          border-radius: 50%; }\n      .about-me-home .flex-container .about-me-home-block .block-header .about-me-title {\n        margin-top: 0;\n        font-size: 36px;\n        margin-bottom: 8px;\n        font-weight: bold; }\n      .about-me-home .flex-container .about-me-home-block .block-header .my-job-title {\n        margin-top: 0;\n        font-size: 18px;\n        color: #999999;\n        margin-bottom: 40px; }\n      .about-me-home .flex-container .about-me-home-block .block-content .my-text {\n        font-size: 14px;\n        line-height: 30px;\n        max-width: 725px; } }\n  .sites-home-section .wrapper {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 3em 0; }\n  .sites-home-section .wrapper .sites-block-nav .flex-blocks {\n    display: flex; }\n  .sites-home-section .wrapper .sites-block-nav .flex-blocks .left-list-block .block-title {\n      font-size: 21px;\n      line-height: 24px;\n      font-weight: bold;\n      width: 400px; }\n  .sites-home-section .wrapper .sites-block-nav .flex-blocks .left-list-block .block-subtitle {\n      margin-top: 0;\n      font-size: 18px;\n      color: #999999;\n      margin-bottom: 20px; }\n  .sites-home-section .wrapper .sites-block-nav .flex-blocks .left-list-block .sites li {\n      font-size: 16px;\n      line-height: 18px;\n      margin-bottom: 8px;\n      font-weight: bold;\n      cursor: pointer; }\n  .sites-home-section .wrapper .sites-block-nav .flex-blocks .left-list-block .sites li:hover {\n        color: #7700FF; }\n  .sites-home-section .wrapper .sites-block-nav .flex-blocks .left-list-block .sites li.selected {\n        color: #8E2BFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R5bXVyL0RvY3VtZW50cy9hbmd1bGFyLXR1dG9yaWFsL3R5bXVyLWN2L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBSUksZUFBZTtFQUVmLGFBQWE7RUFDYixlQUFlLEVBQUE7RUFQbkI7SUFVTSxXQUFXLEVBQUE7RUFWakI7TUFhUSxXQUFXLEVBQUE7RUFXbkI7RUFLRTtJQUVFLGlCQUFpQjtJQUNqQixjQUFjLEVBQUE7SUFIaEI7TUFPSSxVQUFXO01BRVgsaUJBQWlCO01BQ2pCLG1CQUFtQixFQUFBO01BVnZCO1FBY00sWUFBWTtRQUNaLG1CQUFtQixFQUFBO1FBZnpCO1VBa0JRLFlBQVk7VUFFWixrQkFBa0IsRUFBQTtNQXBCMUI7UUE2QlUsYUFBYTtRQUNiLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsaUJBQWlCLEVBQUE7TUFoQzNCO1FBb0NVLGFBQWE7UUFDYixlQUFlO1FBQ2YsY0FBYztRQUNkLG1CQUFtQixFQUFBO01BdkM3QjtRQStDVSxlQUFlO1FBRWYsaUJBQWlCO1FBQ2pCLGdCQUFnQixFQUFBLEVBRWpCO0VBc0JYO0VBR0ksaUJBQWlCO0VBQ2pCLGNBQWM7RUFFZCxjQUFjLEVBQUE7RUFObEI7SUFjUSxhQUFhLEVBQUE7RUFkckI7TUFxQlksZUFBZTtNQUNmLGlCQUFpQjtNQUVqQixpQkFBaUI7TUFDakIsWUFBWSxFQUFBO0VBekJ4QjtNQTZCWSxhQUFhO01BQ2IsZUFBZTtNQUNmLGNBQWM7TUFDZCxtQkFBbUIsRUFBQTtFQWhDL0I7TUF3Q2MsZUFBZTtNQUNmLGlCQUFpQjtNQUVqQixrQkFBa0I7TUFDbEIsaUJBQWlCO01BRWpCLGVBQWUsRUFBQTtFQTlDN0I7UUFpRGdCLGNBQWMsRUFBQTtFQWpEOUI7UUF1RGdCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi5hYm91dC1tZS1ob21le1xuXG4gIC5mbGV4LWNvbnRhaW5lcntcblxuICAgIHBhZGRpbmc6IDAgMTVweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLm15LWltZy13cmFwe1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5tZS1pbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuXG4gIH1cblxuXG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpe1xuXG5cblxuXG4gIC5hYm91dC1tZS1ob21le1xuXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAuZmxleC1jb250YWluZXJ7XG5cbiAgICAgIHBhZGRpbmc6IDAgO1xuXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblxuICAgICAgLm15LWltZy13cmFwe1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG5cbiAgICAgICAgLm1lLWltZ3tcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XG5cbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICAuYWJvdXQtbWUtaG9tZS1ibG9ja3tcblxuICAgICAgICAuYmxvY2staGVhZGVye1xuICAgICAgICAgIC5hYm91dC1tZS10aXRsZXtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubXktam9iLXRpdGxle1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLmJsb2NrLWNvbnRlbnR7XG4gICAgICAgICAgLm15LXRleHR7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MjVweDtcblxuICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuXG5cbiAgICAgIH1cblxuXG5cblxuICAgIH1cblxuXG5cbiAgfVxuXG59XG5cblxuXG4uc2l0ZXMtaG9tZS1zZWN0aW9ue1xuXG4gIC53cmFwcGVye1xuICAgIG1heC13aWR0aDogMTQ0MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgcGFkZGluZzogM2VtIDA7XG5cbiAgICAuc2l0ZXMtYmxvY2stbmF2e1xuXG5cblxuXG4gICAgICAuZmxleC1ibG9ja3N7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLmxlZnQtbGlzdC1ibG9ja3tcblxuXG4gICAgICAgICAgLmJsb2NrLXRpdGxle1xuXG4gICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcblxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJsb2NrLXN1YnRpdGxle1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC5zaXRlc3tcblxuICAgICAgICAgICAgbGl7XG5cbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcblxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzcwMEZGO1xuICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAmLnNlbGVjdGVke1xuXG4gICAgICAgICAgICAgICAgY29sb3I6ICM4RTJCRkY7XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yaWdodC1kZXNjcmlwdGlvbi1ibG9jayB7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-sites */ "./src/app/mock-sites.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.sites = _mock_sites__WEBPACK_IMPORTED_MODULE_2__["SITES"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.selectedSite = _mock_sites__WEBPACK_IMPORTED_MODULE_2__["SITES"][0];
    };
    HomeComponent.prototype.onSelect = function (site) {
        this.selectedSite = site;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mock-sites.ts":
/*!*******************************!*\
  !*** ./src/app/mock-sites.ts ***!
  \*******************************/
/*! exports provided: SITES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITES", function() { return SITES; });
var SITES = [
    {
        id: 11,
        name: 'blazingseollc.com',
        excerpt: 'Proxy, Hosting and other product Wordpress',
        description: '1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi corporis cupiditate delectus doloribus eaque facilis fugit laudantium libero magni molestiae natus necessitatibus neque nisi optio porro quia quidem quisquam ratione, rem soluta tempora tenetur vel vitae voluptates! Beatae consectetur culpa dicta distinctio doloribus ea eligendi nulla numquam saepe veritatis!'
    },
    {
        id: 12,
        name: 'blazingseollc.com/proxy',
        excerpt: 'Proxy Wordpress',
        description: '2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi corporis cupiditate delectus doloribus eaque facilis fugit laudantium libero magni molestiae natus necessitatibus neque nisi optio porro quia quidem quisquam ratione, rem soluta tempora tenetur vel vitae voluptates! Beatae consectetur culpa dicta distinctio doloribus ea eligendi nulla numquam saepe veritatis!'
    },
    {
        id: 13,
        name: 'blazingseollc.com/proxy/dashboard',
        excerpt: 'Proxy Dashboard',
        description: ' 3.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi corporis cupiditate delectus doloribus eaque facilis fugit laudantium libero magni molestiae natus necessitatibus neque nisi optio porro quia quidem quisquam ratione, rem soluta tempora tenetur vel vitae voluptates! Beatae consectetur culpa dicta distinctio doloribus ea eligendi nulla numquam saepe veritatis!'
    },
    {
        id: 14,
        name: 'blazingseollc.com/hosting',
        excerpt: 'Hosting Wordpress',
        description: '4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi corporis cupiditate delectus doloribus eaque facilis fugit laudantium libero magni molestiae natus necessitatibus neque nisi optio porro quia quidem quisquam ratione, rem soluta tempora tenetur vel vitae voluptates! Beatae consectetur culpa dicta distinctio doloribus ea eligendi nulla numquam saepe veritatis!'
    },
    {
        id: 15,
        name: 'blazingseollc.com/hosting/dashboard',
        excerpt: 'Hosting Dashboard',
        description: '5. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi corporis cupiditate delectus doloribus eaque facilis fugit laudantium libero magni molestiae natus necessitatibus neque nisi optio porro quia quidem quisquam ratione, rem soluta tempora tenetur vel vitae voluptates! Beatae consectetur culpa dicta distinctio doloribus ea eligendi nulla numquam saepe veritatis!'
    },
    {
        id: 16,
        name: 'serpgrab.com',
        excerpt: 'SerpGrab Wordpress',
        description: '6. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi corporis cupiditate delectus doloribus eaque facilis fugit laudantium libero magni molestiae natus necessitatibus neque nisi optio porro quia quidem quisquam ratione, rem soluta tempora tenetur vel vitae voluptates! Beatae consectetur culpa dicta distinctio doloribus ea eligendi nulla numquam saepe veritatis!'
    },
    {
        id: 17,
        name: 'supersonicproxies.com',
        excerpt: 'SuperSonicProxies Wordpress',
        description: '7. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi corporis cupiditate delectus doloribus eaque facilis fugit laudantium libero magni molestiae natus necessitatibus neque nisi optio porro quia quidem quisquam ratione, rem soluta tempora tenetur vel vitae voluptates! Beatae consectetur culpa dicta distinctio doloribus ea eligendi nulla numquam saepe veritatis!'
    },
];


/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"logo\">{{appTitle}}</a>\n    <nav class=\"nav-collapse\">\n      <ul>\n        <li><a routerLink=\"/resume\">Resume</a></li>\n        <li><a routerLink=\"/about\">About me</a></li>\n        <li><a routerLink=\"/contact\">Contact me</a></li>\n      </ul>\n    </nav>\n  </div>\n</header>\n\n\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: #7700FF; }\n  header .logo {\n    font-weight: bold; }\n  header nav {\n    justify-self: right; }\n  header nav ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n  header nav ul li {\n        float: left; }\n  header nav ul li a {\n          padding: 1.5em;\n          text-transform: uppercase;\n          font-size: .8em; }\n  header nav ul li a:hover {\n            background: #8E2BFF; }\n  @media screen and (min-width: 991px) {\n  header .container {\n    max-width: 1440px;\n    margin: 0 auto;\n    padding: 1.3em;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n    header .container a {\n      color: white; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R5bXVyL0RvY3VtZW50cy9hbmd1bGFyLXR1dG9yaWFsL3R5bXVyLWN2L3NyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBO0VBRHJCO0lBSUksaUJBQWlCLEVBQUE7RUFKckI7SUFhSSxtQkFBbUIsRUFBQTtFQWJ2QjtNQWdCTSxxQkFBcUI7TUFDckIsU0FBUztNQUFFLFVBQVUsRUFBQTtFQWpCM0I7UUFvQlEsV0FBVyxFQUFBO0VBcEJuQjtVQXVCVSxjQUFjO1VBQ2QseUJBQXlCO1VBQ3pCLGVBQWUsRUFBQTtFQXpCekI7WUE0QlksbUJBQW1CLEVBQUE7RUFVL0I7RUFHRTtJQUtJLGlCQUFpQjtJQUVqQixjQUFjO0lBRWQsY0FBYztJQUVkLGFBQWE7SUFFYiw4QkFBOEI7SUFDOUIsbUJBQW1CLEVBQUE7SUFkdkI7TUFpQk0sWUFBWSxFQUFBLEVBR2IiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzc3MDBGRjtcblxuICAubG9nbyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuY29udGFpbmVye1xuXG5cbiAgfVxuXG4gIG5hdiB7XG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcblxuICAgIHVsIHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgIG1hcmdpbjogMDsgcGFkZGluZzogMDtcblxuICAgICAgbGkge1xuICAgICAgICBmbG9hdDogbGVmdDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzhFMkJGRjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MXB4KXtcblxuXG4gIGhlYWRlcntcblxuXG4gICAgLmNvbnRhaW5lcntcblxuICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XG5cbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICBwYWRkaW5nOiAxLjNlbTtcblxuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgYXtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.appTitle = 'Tymur Tolochko';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  resume works!\n</p>\n"

/***/ }),

/***/ "./src/app/resume/resume.component.scss":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.scss */ "./src/app/resume/resume.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/site-detail/site-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/site-detail/site-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"site\" class=\"site-info-block\">\n\n  <a class=\"site-link\" href=\"https://{{site.name}}\">{{site.name }} </a>\n\n  <p class=\"site-excerpt\">\n    {{site.excerpt}}\n  </p>\n\n  <p>\n    {{site.description}}\n  </p>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/site-detail/site-detail.component.scss":
/*!********************************************************!*\
  !*** ./src/app/site-detail/site-detail.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".site-info-block .site-link {\n  font-size: 21px;\n  line-height: 24px;\n  font-weight: bold;\n  color: #7700FF; }\n\n.site-info-block .site-excerpt {\n  margin-top: 0;\n  font-size: 18px;\n  color: #999999;\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R5bXVyL0RvY3VtZW50cy9hbmd1bGFyLXR1dG9yaWFsL3R5bXVyLWN2L3NyYy9hcHAvc2l0ZS1kZXRhaWwvc2l0ZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBTmxCO0VBVUksYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaXRlLWRldGFpbC9zaXRlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlLWluZm8tYmxvY2t7XG5cbiAgLnNpdGUtbGlua3tcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM3NzAwRkY7XG4gIH1cblxuICAuc2l0ZS1leGNlcnB0e1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/site-detail/site-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/site-detail/site-detail.component.ts ***!
  \******************************************************/
/*! exports provided: SiteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteDetailComponent", function() { return SiteDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site */ "./src/app/site.ts");



var SiteDetailComponent = /** @class */ (function () {
    function SiteDetailComponent() {
    }
    SiteDetailComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _site__WEBPACK_IMPORTED_MODULE_2__["Site"])
    ], SiteDetailComponent.prototype, "site", void 0);
    SiteDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-site-detail',
            template: __webpack_require__(/*! ./site-detail.component.html */ "./src/app/site-detail/site-detail.component.html"),
            styles: [__webpack_require__(/*! ./site-detail.component.scss */ "./src/app/site-detail/site-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SiteDetailComponent);
    return SiteDetailComponent;
}());



/***/ }),

/***/ "./src/app/site.ts":
/*!*************************!*\
  !*** ./src/app/site.ts ***!
  \*************************/
/*! exports provided: Site */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Site", function() { return Site; });
var Site = /** @class */ (function () {
    function Site() {
    }
    return Site;
}());



/***/ }),

/***/ "./src/app/site/site.component.html":
/*!******************************************!*\
  !*** ./src/app/site/site.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  site works!\n</p>\n"

/***/ }),

/***/ "./src/app/site/site.component.scss":
/*!******************************************!*\
  !*** ./src/app/site/site.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGUvc2l0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/site/site.component.ts":
/*!****************************************!*\
  !*** ./src/app/site/site.component.ts ***!
  \****************************************/
/*! exports provided: SiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteComponent", function() { return SiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SiteComponent = /** @class */ (function () {
    function SiteComponent() {
    }
    SiteComponent.prototype.ngOnInit = function () {
    };
    SiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-site',
            template: __webpack_require__(/*! ./site.component.html */ "./src/app/site/site.component.html"),
            styles: [__webpack_require__(/*! ./site.component.scss */ "./src/app/site/site.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SiteComponent);
    return SiteComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tymur/Documents/angular-tutorial/tymur-cv/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map