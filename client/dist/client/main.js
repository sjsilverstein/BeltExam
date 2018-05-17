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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pet-list/pet-list.component */ "./src/app/pet-list/pet-list.component.ts");
/* harmony import */ var _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-pet/new-pet.component */ "./src/app/new-pet/new-pet.component.ts");
/* harmony import */ var _edit_pet_edit_pet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-pet/edit-pet.component */ "./src/app/edit-pet/edit-pet.component.ts");
/* harmony import */ var _petdetails_petdetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./petdetails/petdetails.component */ "./src/app/petdetails/petdetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_2__["PetListComponent"] },
    { path: 'new', component: _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_3__["NewPetComponent"] },
    // use a colon and parameter name to include a parameter in the url
    { path: 'edit/:id', component: _edit_pet_edit_pet_component__WEBPACK_IMPORTED_MODULE_4__["EditPetComponent"] },
    { path: 'details/:id', component: _petdetails_petdetails_component__WEBPACK_IMPORTED_MODULE_5__["PetdetailsComponent"] }
    // // the ** will catch anything that did not match any of the above routes
    // { path: '**', component: PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"row\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-11\">\n    <h1>{{ title }}</h1>\n  </div>\n</div>\n<br> \n \n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.title = 'Pet Shelter';
        this.getAuthors();
    }
    AppComponent.prototype.getAuthors = function () {
        //  console.log('Getting all of the Authors');
        //  let observable = this._httpService.getPets();
        //  observable.subscribe(data => {
        //    this.authors = data['authors'];
        //  })
    };
    AppComponent.prototype.ngOnInit = function () {
        this._router.navigate(['/']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pet-list/pet-list.component */ "./src/app/pet-list/pet-list.component.ts");
/* harmony import */ var _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-pet/new-pet.component */ "./src/app/new-pet/new-pet.component.ts");
/* harmony import */ var _edit_pet_edit_pet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-pet/edit-pet.component */ "./src/app/edit-pet/edit-pet.component.ts");
/* harmony import */ var _petdetails_petdetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./petdetails/petdetails.component */ "./src/app/petdetails/petdetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_7__["PetListComponent"],
                _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_8__["NewPetComponent"],
                _edit_pet_edit_pet_component__WEBPACK_IMPORTED_MODULE_9__["EditPetComponent"],
                _petdetails_petdetails_component__WEBPACK_IMPORTED_MODULE_10__["PetdetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-pet/edit-pet.component.css":
/*!*************************************************!*\
  !*** ./src/app/edit-pet/edit-pet.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red {\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/edit-pet/edit-pet.component.html":
/*!**************************************************!*\
  !*** ./src/app/edit-pet/edit-pet.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h4>Edit this pet.</h4>\n  </div>\n  \n  <form *ngIf=\"pet\" (submit)=editPetForm() method=\"POST\">\n    <div *ngIf=\"pet.name.length < 3\" class=\"row red\">\n        <p class=\"red\">A Pets name must be 3 characters longer.</p>\n    </div>\n    <div class=\"row\">\n      <p>Pet Name: <input type=\"text\" name=\"pet.name\" [(ngModel)]=\"pet.name\"></p>\n    </div>\n    <div *ngIf=\"pet.type.length < 3\" class=\"row red\">\n        <p class=\"red\">A Pets Type must be 3 characters or longer.</p>\n    </div>\n    <div class=\"row\">\n      <p>Pet Type: <input type=\"text\" name=\"pet.type\" [(ngModel)]=\"pet.type\"></p>\n    </div>\n    <div *ngIf=\"pet.description.length < 3\" class=\"row red\">\n        <p class=\"red\">A Pets Description must be 3 characters longer.</p>\n    </div>\n    <div class=\"row\">\n      <p>Description: <input type=\"text\" name=\"pet.description\" [(ngModel)]=\"pet.description\"></p>\n    </div>\n    <div class=\"row\">\n      <div class=\"p\">Skills:</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-1\"></div>\n      <p>Skill 1: <input type=\"text\" name=\"pet.skill1\" [(ngModel)]=\"pet.skill1\"></p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-1\"></div>\n      <p>Skill 2: <input type=\"text\" name=\"pet.skill2\" [(ngModel)]=\"pet.skill2\"></p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-1\"></div>\n      <p>Skill 3: <input type=\"text\" name=\"pet.skill3\" [(ngModel)]=\"pet.skill3\"></p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-2\"><input type=\"submit\" value=\"Edit Pet\"></div>\n      <div class=\"col-2\"><button [routerLink]=\"['/']\">Cancel</button></div>\n      \n    </div>  \n  </form>"

/***/ }),

/***/ "./src/app/edit-pet/edit-pet.component.ts":
/*!************************************************!*\
  !*** ./src/app/edit-pet/edit-pet.component.ts ***!
  \************************************************/
/*! exports provided: EditPetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPetComponent", function() { return EditPetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditPetComponent = /** @class */ (function () {
    function EditPetComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    EditPetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.id = params['id'];
            _this.getPetService(_this.id);
        });
    };
    EditPetComponent.prototype.getPetService = function (id) {
        var _this = this;
        var obversable = this._httpService.getPetBy(this.id);
        obversable.subscribe(function (data) {
            _this.pet = data;
            console.log(_this.pet);
        });
    };
    EditPetComponent.prototype.editPetForm = function () {
        var _this = this;
        var obversable = this._httpService.updatePet(this.pet);
        obversable.subscribe(function (data) {
            console.log(data);
            if (data['status'] == 'errors') {
                _this.errorL = data['errors'];
                console.log(_this.errorL);
            }
            else {
                _this._router.navigate(['/details/' + _this.id]);
            }
        });
    };
    EditPetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-pet',
            template: __webpack_require__(/*! ./edit-pet.component.html */ "./src/app/edit-pet/edit-pet.component.html"),
            styles: [__webpack_require__(/*! ./edit-pet.component.css */ "./src/app/edit-pet/edit-pet.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditPetComponent);
    return EditPetComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    //These routes match up with restful routing in the server / config / routing.js file.
    HttpService.prototype.getPets = function () {
        return this._http.get('/pets');
    };
    HttpService.prototype.getPetBy = function (id) {
        return this._http.get('/pet/' + id);
    };
    HttpService.prototype.createPet = function (newAuthorData) {
        console.log(newAuthorData);
        return this._http.post('/pets', newAuthorData);
    };
    HttpService.prototype.deletePet = function (id) {
        return this._http.delete('/pets/' + id);
    };
    HttpService.prototype.updatePet = function (data) {
        return this._http.put('/pets/edit/' + data._id, data);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new-pet/new-pet.component.css":
/*!***********************************************!*\
  !*** ./src/app/new-pet/new-pet.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red {\r\n    color: red;\r\n}\r\n.box {\r\n    border: 1px solid brown;\r\n}"

/***/ }),

/***/ "./src/app/new-pet/new-pet.component.html":
/*!************************************************!*\
  !*** ./src/app/new-pet/new-pet.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h4>Know of a pet need a home?</h4>\n</div>\n\n<form (submit)=newPetForm() method=\"POST\">\n    <div *ngIf=\"errorL\"class=\"row\">\n        <p *ngIf=\"errorL.errors.name\"class=\"red\">{{errorL.errors.name.message}}</p>\n    </div>\n  <div *ngIf=\"newPet.name\" class=\"row\">\n      <p *ngIf=\"newPet.name.length < 3\" class=\"red\">A Pets name must be 3 characters longer.</p>\n  </div>\n  <div class=\"row\">\n    <p>Pet Name: <input type=\"text\" name=\"newPet.name\" [(ngModel)]=\"newPet.name\"></p>\n  </div>\n  <div *ngIf=\"errorL\"class=\"row\">\n      <p *ngIf=\"errorL.errors.type\"class=\"red\">{{errorL.errors.type.message}}</p>\n  </div>\n  <div *ngIf=\"newPet.type\" class=\"row\">\n      <p *ngIf=\"newPet.type.length < 3\" class=\"red\">A Pets type must be 3 characters longer.</p>\n  </div>\n  <div class=\"row\">\n    <p>Pet Type: <input type=\"text\" name=\"newPet.type\" [(ngModel)]=\"newPet.type\"></p>\n  </div>\n  <div *ngIf=\"errorL\"class=\"row\">\n      <p *ngIf=\"errorL.errors.description\" class=\"red\">{{errorL.errors.description.message}}</p>\n  </div>\n  <div *ngIf=\"newPet.description\" class=\"row\">\n      <p *ngIf=\"newPet.description.length < 3\" class=\"red\">A Pets description must be 3 characters longer.</p>\n  </div>\n  <div class=\"row\">\n    <p>Description: <input type=\"text\" name=\"newPet.description\" [(ngModel)]=\"newPet.description\"></p>\n  </div>\n  <div class=\"row\">\n    <div class=\"p\">Skills:</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-1\"></div>\n    <p>Skill 1: <input type=\"text\" name=\"newPet.skill1\" [(ngModel)]=\"newPet.skill1\"></p>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-1\"></div>\n    <p>Skill 2: <input type=\"text\" name=\"newPet.skill2\" [(ngModel)]=\"newPet.skill2\"></p>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-1\"></div>\n    <p>Skill 3: <input type=\"text\" name=\"newPet.skill3\" [(ngModel)]=\"newPet.skill3\"></p>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-2\"><input type=\"submit\" value=\"Add Pet\"></div>\n    <div class=\"col-2\"><button [routerLink]=\"['/']\">Cancel</button></div>    \n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/new-pet/new-pet.component.ts":
/*!**********************************************!*\
  !*** ./src/app/new-pet/new-pet.component.ts ***!
  \**********************************************/
/*! exports provided: NewPetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPetComponent", function() { return NewPetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewPetComponent = /** @class */ (function () {
    function NewPetComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        //name: "", type: "" , description: "", skill1: "", skill2:"", skill3:""
        this.newPet = {};
    }
    NewPetComponent.prototype.ngOnInit = function () {
    };
    NewPetComponent.prototype.newPetForm = function () {
        var _this = this;
        var observable = this._httpService.createPet(this.newPet);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['status'] == 'errors') {
                _this.errorL = data['errors'];
                console.log(_this.errorL);
            }
            else {
                _this._router.navigate(['/']);
            }
        });
    };
    NewPetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-pet',
            template: __webpack_require__(/*! ./new-pet.component.html */ "./src/app/new-pet/new-pet.component.html"),
            styles: [__webpack_require__(/*! ./new-pet.component.css */ "./src/app/new-pet/new-pet.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewPetComponent);
    return NewPetComponent;
}());



/***/ }),

/***/ "./src/app/pet-list/pet-list.component.css":
/*!*************************************************!*\
  !*** ./src/app/pet-list/pet-list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pet-list/pet-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/pet-list/pet-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h4>These Pets are looking for a home!</h4>\n</div>\n<div class=\"row\">\n  <button [routerLink]=\"['/new']\">Add a pet to the shelter</button>\n</div>\n<br>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Type</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let pet of pets\">\n        <td>{{pet.name}}</td>\n        <td>{{pet.type}}</td>\n        <td>\n          <button [routerLink]=\"['/details/'+pet._id]\">Details</button>\n          <button [routerLink]=\"['/edit/'+pet._id]\">Edit</button>\n        </td>\n      </tr>\n  </tbody>  \n</table>\n"

/***/ }),

/***/ "./src/app/pet-list/pet-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/pet-list/pet-list.component.ts ***!
  \************************************************/
/*! exports provided: PetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetListComponent", function() { return PetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PetListComponent = /** @class */ (function () {
    function PetListComponent(_httpService) {
        this._httpService = _httpService;
        this.getPets();
    }
    PetListComponent.prototype.ngOnInit = function () {
    };
    PetListComponent.prototype.getPets = function () {
        var _this = this;
        console.log("Get all the Pets");
        var observable = this._httpService.getPets();
        observable.subscribe(function (data) {
            _this.pets = data['pets'];
            console.log(_this.pets);
            _this.pets.sort(function (a, b) {
                var typeA = a.type.toLowerCase(), typeB = b.type.toLowerCase();
                if (typeA < typeB) {
                    return -1;
                }
                if (typeA > typeB) {
                    return 1;
                }
                return 0; //default return value (no sorting)
            });
            console.log(_this.pets);
        });
    };
    PetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-list',
            template: __webpack_require__(/*! ./pet-list.component.html */ "./src/app/pet-list/pet-list.component.html"),
            styles: [__webpack_require__(/*! ./pet-list.component.css */ "./src/app/pet-list/pet-list.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], PetListComponent);
    return PetListComponent;
}());



/***/ }),

/***/ "./src/app/petdetails/petdetails.component.css":
/*!*****************************************************!*\
  !*** ./src/app/petdetails/petdetails.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/petdetails/petdetails.component.html":
/*!******************************************************!*\
  !*** ./src/app/petdetails/petdetails.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pet\">\n\n<div class=\"row\">\n  <div class=\"col-6\">\n    <h3>Details about {{pet.name}}</h3>\n  </div>\n  <div class=\"col-6\">\n    <button [routerLink]=\"['/']\">Home</button>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\">\n  <div class=\"col-2\">\n    <h5>Pet Type:</h5>\n  </div>\n  <div class=\"col-9\">\n    <p>{{pet.type}}</p>\n  </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-2\">\n      <h5>Description:</h5>\n    </div>\n    <div class=\"col-9\">\n      <p>{{pet.description}}</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-2\">\n      <h5>Skills:</h5>\n    </div>\n    <div class=\"col-9\">\n      <p>{{pet.skill1}}</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-2\"></div>\n    <div class=\"col-9\">\n      <p>{{pet.skill2}}</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-2\"></div>\n    <div class=\"col-9\">\n      <p>{{pet.skill3}}</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-2\">\n      <h5>Likes:</h5>\n    </div>\n    <div class=\"col-9\">\n      <p>{{pet.likes}}</p>\n    </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-2\">\n    <button [disabled]=\"isLiked\"(click)=\"likePet(pet)\">Like this pet</button>\n  </div>\n  <div class=\"col-2\">\n    <button (click)=\"deletePet(pet._id)\">Adopt this pet!</button>\n  </div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/petdetails/petdetails.component.ts":
/*!****************************************************!*\
  !*** ./src/app/petdetails/petdetails.component.ts ***!
  \****************************************************/
/*! exports provided: PetdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetdetailsComponent", function() { return PetdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetdetailsComponent = /** @class */ (function () {
    function PetdetailsComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.isLiked = false;
    }
    PetdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.id = params['id'];
            _this.getPetService(_this.id);
        });
    };
    PetdetailsComponent.prototype.getPetService = function (id) {
        var _this = this;
        var obversable = this._httpService.getPetBy(this.id);
        obversable.subscribe(function (data) {
            _this.pet = data;
            console.log(_this.pet);
        });
    };
    PetdetailsComponent.prototype.deletePet = function (id) {
        var _this = this;
        var observable = this._httpService.deletePet(id);
        observable.subscribe(function (data) {
            if (data['status'] == 'errors') {
                _this.errorL = data['errors'];
                console.log(_this.errorL);
            }
            else {
                _this._router.navigate(['/']);
            }
        });
    };
    PetdetailsComponent.prototype.likePet = function (likedPet) {
        var _this = this;
        likedPet.likes++;
        this.isLiked = true;
        var obversable = this._httpService.updatePet(likedPet);
        obversable.subscribe(function (data) {
            if (data['status'] == 'errors') {
                _this.errorL = data['errors'];
            }
        });
    };
    PetdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-petdetails',
            template: __webpack_require__(/*! ./petdetails.component.html */ "./src/app/petdetails/petdetails.component.html"),
            styles: [__webpack_require__(/*! ./petdetails.component.css */ "./src/app/petdetails/petdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PetdetailsComponent);
    return PetdetailsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Silverstein\Documents\Repos\CodingDojo\MEAN\BeltExam\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map