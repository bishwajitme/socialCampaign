webpackJsonp([2],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_gift__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__giftcards_giftcards__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GiftcardPage = (function () {
    function GiftcardPage(navCtrl, navParams, screenshot, placesService, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.screenshot = screenshot;
        this.placesService = placesService;
        this.file = file;
        this.qrData = null;
        this.createdCode = null;
        this.state = false;
        this.stShow = true;
        this.imageUrl = '';
        this.giftCardNumber = '';
    }
    GiftcardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GiftcardPage');
    };
    GiftcardPage.prototype.createCode = function () {
        this.giftCardNumber = this.qrData.trim() + Math.floor((Math.random() * 10000000) + 1);
        this.createdCode = this.giftCardNumber;
        this.hideNav();
        this.reset();
    };
    GiftcardPage.prototype.hideNav = function () {
        var self = this;
        setTimeout(function () {
            self.stShow = false;
        }, 1000);
    };
    GiftcardPage.prototype.reset = function () {
        var self = this;
        setTimeout(function () {
            self.stShow = false;
            self.screenShotURI();
        }, 2000);
    };
    GiftcardPage.prototype.screenShot = function () {
        var _this = this;
        this.stShow = false;
        this.screenshot.save('jpg', 100, 'myscreenshot').then(function (res) {
            _this.screen = res.filePath;
            _this.state = true;
            //this.screenShotURI();
            var currentName = _this.screen.replace(/^.*[\\\/]/, '');
            var path = _this.screen.replace(/[^\/]*$/, '');
            var newFileName = new Date().getUTCMilliseconds() + '.jpg';
            console.log('Path: ' + path + ' dd:' + currentName);
            console.log('dir: ' + cordova.file.dataDirectory);
            _this.file.moveFile(path, currentName, cordova.file.dataDirectory, newFileName)
                .then(function (data) {
                // this.imageUrl = normalizeURL(data.nativeURL);
                _this.imageUrl = data.nativeURL;
                console.log('Place Two: ' + _this.imageUrl);
                // File.removeFile(path, currentName);
            })
                .catch(function (err) {
                console.log(err);
            });
            _this.imageUrl = _this.screen;
            _this.onSubmit();
            //this.reset();
        });
    };
    GiftcardPage.prototype.screenShotURI = function () {
        var _this = this;
        this.screenshot.URI(80).then(function (res) {
            _this.screen = res.URI;
            _this.state = true;
            _this.stShow = false;
            var currentName = _this.screen.replace(/^.*[\\\/]/, '');
            var path = _this.screen.replace(/[^\/]*$/, '');
            var newFileName = new Date().getUTCMilliseconds() + '.jpg';
            console.log('Path: ' + path + ' dd:' + currentName);
            console.log('dir: ' + cordova.file.dataDirectory);
            _this.file.moveFile(path, currentName, cordova.file.dataDirectory, newFileName)
                .then(function (data) {
                // this.imageUrl = normalizeURL(data.nativeURL);
                _this.imageUrl = data.nativeURL;
                console.log('Place Two: ' + _this.imageUrl);
                // File.removeFile(path, currentName);
            })
                .catch(function (err) {
                console.log(err);
            });
            _this.imageUrl = _this.screen;
            _this.onSubmit();
            //this.reset();
        });
    };
    GiftcardPage.prototype.onSubmit = function () {
        this.placesService
            .addPlace('Gift Card', 'Enjoy Discount at ABC Company', this.screen);
    };
    GiftcardPage.prototype.goToOtherPage = function () {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__giftcards_giftcards__["a" /* GiftcardsPage */]);
    };
    GiftcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-giftcard',template:/*ion-inline-start:"/Users/bishwajithalder/ionic/campaign/src/pages/giftcard/giftcard.html"*/'<ion-header *ngIf="stShow">\n  <ion-navbar >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Gift Card Generator</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="gift_card">\n  <ion-item *ngIf="stShow">\n    <ion-input type="number" min="7" required placeholder="Enter your Phone Number" [(ngModel)]="qrData">\n    </ion-input>\n  </ion-item>\n  <button ion-button full icon-left (click)="createCode()" *ngIf="stShow"><ion-icon name="barcode"></ion-icon>Generate Gift Card</button>\n\n  <ion-item *ngIf="createdCode" style="background: transparent;">\n   <h2 padding text-center>Enjoy Discount at ABC</h2>\n  </ion-item>\n\n  <ion-card *ngIf="createdCode">\n    <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n    <ion-card-content>\n     <!-- <img src="{{ screen }}" *ngIf="state">-->\n    </ion-card-content>\n  </ion-card>\n  <ion-item *ngIf="createdCode" style="background: transparent;">\n    <p padding text-center>AbC Coffee Shop</p>\n  </ion-item>\n\n  <ion-row *ngIf="state">\n    <ion-col>\n      <button\n              class="button"\n              ion-button\n              icon-right\n              block\n              padding-vertical\n              color="primary"\n              (click)="goToOtherPage()">\n        Go to GiftCard Page\n\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/bishwajithalder/ionic/campaign/src/pages/giftcard/giftcard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__["a" /* Screenshot */],
            __WEBPACK_IMPORTED_MODULE_3__services_gift__["a" /* PlacesService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */]])
    ], GiftcardPage);
    return GiftcardPage;
}());

//# sourceMappingURL=giftcard.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/giftcard/giftcard.module": [
		313,
		1
	],
	"../pages/giftcards/giftcards.module": [
		314,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screenshot__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_qrcode2__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_giftcard_giftcard__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_giftcards_giftcards__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_gift__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_giftcard_giftcard__["a" /* GiftcardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_giftcards_giftcards__["a" /* GiftcardsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/giftcard/giftcard.module#GiftcardPageModule', name: 'GiftcardPage', segment: 'giftcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/giftcards/giftcards.module#GiftcardsPageModule', name: 'GiftcardsPage', segment: 'giftcards', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_giftcard_giftcard__["a" /* GiftcardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_giftcards_giftcards__["a" /* GiftcardsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_screenshot__["a" /* Screenshot */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_15__services_gift__["a" /* PlacesService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Place; });
var Place = (function () {
    function Place(title, description, imageUrl, dateTime) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.dateTime = dateTime;
    }
    return Place;
}());

//# sourceMappingURL=giftmodel.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_giftcards_giftcards__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Giftcards', component: __WEBPACK_IMPORTED_MODULE_5__pages_giftcards_giftcards__["a" /* GiftcardsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bishwajithalder/ionic/campaign/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/bishwajithalder/ionic/campaign/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftcardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gift__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { PlacePage } from "../place/place";




/**
 * Generated class for the GiftcardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GiftcardsPage = (function () {
    function GiftcardsPage(placesService, alertCtrl, socialSharing, platform, navCtrl) {
        this.placesService = placesService;
        this.alertCtrl = alertCtrl;
        this.socialSharing = socialSharing;
        this.platform = platform;
        this.navCtrl = navCtrl;
        //addPlacePage = AddPlacePage;
        this.places = [];
    }
    GiftcardsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.placesService.fetchPlaces()
            .then(function (places) { return _this.places = places; });
    };
    GiftcardsPage.prototype.ionViewWillEnter = function () {
        this.places = this.placesService.loadPlaces();
    };
    GiftcardsPage.prototype.onDelete = function () {
        this.placesService.deletePlace(this.index);
    };
    GiftcardsPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete this Item',
            message: 'Do you want to delete this memory?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.onDelete();
                        console.log('Item Deleted');
                    }
                }
            ]
        });
        alert.present();
    };
    GiftcardsPage.prototype.sharetweets = function (message, image) {
        var _this = this;
        console.log(image);
        this.platform.ready()
            .then(function () {
            //this.socialSharing.shareViaFacebook( message, image, message)
            _this.socialSharing.share(message, message, image, null)
                .then(function (data) {
                console.log('Shared');
            })
                .catch(function (err) {
                console.log('Was not shared');
            });
        });
    };
    GiftcardsPage.prototype.goToOtherPage = function () {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    GiftcardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-giftcards',template:/*ion-inline-start:"/Users/bishwajithalder/ionic/campaign/src/pages/giftcards/giftcards.html"*/'<ion-header>\n  <ion-navbar>\n  <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n    <ion-title>Gigtcards</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg">\n  <ion-list>\n    <ion-card *ngFor="let place of places; let i = index">\n      <img [src]="place.imageUrl">\n      <ion-card-content text-center>\n        <ion-card-title class="title">\n          <h1>{{ place.title }}</h1>\n        </ion-card-title>\n        <p>{{ place.description }}</p>\n\n      </ion-card-content>\n      <ion-row>\n        <ion-col>\n          <button\n                  class="button"\n                  ion-button\n                  icon-right\n                  block\n                  padding-vertical\n                  color="primary"\n                  (click)="sharetweets(place.title, place.imageUrl)">\n            Share this\n            <ion-icon ios="ios-share" md="md-share"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col>\n\n      <button ion-button\n              block\n              (click)="presentConfirm()">\n        <ion-icon>Delete</ion-icon>\n      </button>\n\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/bishwajithalder/ionic/campaign/src/pages/giftcards/giftcards.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_gift__["a" /* PlacesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], GiftcardsPage);
    return GiftcardsPage;
}());

//# sourceMappingURL=giftcards.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_giftmodel__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlacesService = (function () {
    function PlacesService(storage, file) {
        this.storage = storage;
        this.file = file;
        this.places = [];
        this.result = '';
    }
    PlacesService.prototype.addPlace = function (title, description, imageUrl, dateTime) {
        var _this = this;
        if (dateTime === void 0) { dateTime = new Date().toISOString(); }
        var place = new __WEBPACK_IMPORTED_MODULE_3__models_giftmodel__["a" /* Place */](title, description, imageUrl, dateTime);
        this.places.push(place);
        this.storage.set('places', this.places)
            .then()
            .catch(function (err) {
            _this.places.splice(_this.places.indexOf(place), 1);
        });
    };
    PlacesService.prototype.loadPlaces = function () {
        return this.places.slice();
    };
    PlacesService.prototype.fetchPlaces = function () {
        var _this = this;
        return this.storage.get('places')
            .then(function (places) {
            _this.places = places != null ? places : [];
            return _this.places;
        })
            .catch(function (err) { return console.log(err); });
    };
    PlacesService.prototype.deletePlace = function (index) {
        var _this = this;
        var place = this.places[index];
        this.places.splice(index, 1);
        this.storage.set('places', this.places)
            .then(function () {
            _this.removeFile(place);
        })
            .catch(function (err) { return console.log(err); });
    };
    PlacesService.prototype.removeFile = function (place) {
        var _this = this;
        var currentName = place.imageUrl.replace(/^.*[\\\/]/, '');
        this.file.removeFile(cordova.file.dataDirectory, currentName)
            .then(function () { return console.log('Removed File'); })
            .catch(function () {
            console.log('Error while removing File');
            _this.addPlace(place.title, place.description, place.imageUrl, place.dateTime);
        });
    };
    PlacesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]])
    ], PlacesService);
    return PlacesService;
}());

//# sourceMappingURL=gift.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__giftcard_giftcard__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(barcodeScanner, navCtrl, alertCtrl) {
        this.barcodeScanner = barcodeScanner;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
    }
    HomePage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedCode = barcodeData.text;
            if (_this.scannedCode === '123456') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__giftcard_giftcard__["a" /* GiftcardPage */]);
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Wrong QR CODE',
                    message: 'Either you have already used this code or you are using wrong QR code',
                    buttons: [
                        {
                            text: 'Try Again',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/bishwajithalder/ionic/campaign/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>QR Code Scanner</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="vertical-align-content">\n  <button ion-button full icon-left (click)="scanCode()" color="secondary"><ion-icon name="qr-scanner"></ion-icon>Scan Code</button>\n</ion-content>'/*ion-inline-end:"/Users/bishwajithalder/ionic/campaign/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map