"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_landing-page_landing-page_module_ts"],{

/***/ 4501:
/*!*******************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPagePageRoutingModule": () => (/* binding */ LandingPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _landing_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page.page */ 2731);




const routes = [
    {
        path: '',
        component: _landing_page_page__WEBPACK_IMPORTED_MODULE_0__.LandingPagePage
    }
];
let LandingPagePageRoutingModule = class LandingPagePageRoutingModule {
};
LandingPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LandingPagePageRoutingModule);



/***/ }),

/***/ 3567:
/*!***********************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPagePageModule": () => (/* binding */ LandingPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page-routing.module */ 4501);
/* harmony import */ var _landing_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page.page */ 2731);







let LandingPagePageModule = class LandingPagePageModule {
};
LandingPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingPagePageRoutingModule
        ],
        declarations: [_landing_page_page__WEBPACK_IMPORTED_MODULE_1__.LandingPagePage]
    })
], LandingPagePageModule);



/***/ }),

/***/ 2731:
/*!*********************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPagePage": () => (/* binding */ LandingPagePage)
/* harmony export */ });
/* harmony import */ var _Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _landing_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page.page.html?ngResource */ 9958);
/* harmony import */ var _landing_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page.page.scss?ngResource */ 481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/diagnostic/ngx */ 7666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);








let LandingPagePage = class LandingPagePage {
  constructor(diagnostic, platform, ref, router) {
    this.diagnostic = diagnostic;
    this.platform = platform;
    this.ref = ref;
    this.router = router;
    this.whileinappusebutton = false;
    this.locationbutton = false;
    this.allowallthetimebutton = false;
    this.whileinappusespinner = false;
    this.locationispinner = false;
    this.allowallthetimespinner = false;
    this.nextbutton = true; // total number of permissions required

    this.totalPermissionRequired = 3; // Permissions granted

    this.permissionsGranted = 0;
    this.enableNextInterval = setInterval(() => {
      this.enableNext();
    }, 1500);
  }

  ngOnInit() {
    var _this = this;

    this.ref.detectChanges();

    if (!this.platform.is("android")) {
      this.goToHome(true, "platform not android ");
    } else {
      this.platform.ready().then(() => {
        this.permissionsGranted = 0;
        this.diagnostic.isGpsLocationEnabled().then(succ => {
          this.locationispinner = true;
          console.log("location permission", succ);

          if (succ) {
            this.locationbutton = true;
            this.permissionsGranted++;
          } else {
            this.locationbutton = false;
          }
        });
        this.diagnostic.getLocationAuthorizationStatus().then( /*#__PURE__*/function () {
          var _ref = (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (suc) {
            console.log("getlocationauthorizationstatues", suc);
            _this.allowallthetimespinner = true;
            _this.whileinappusespinner = true;

            if (suc == "GRANTED") {
              console.log("getLocationAuthorizationStatuses() ", suc);
              _this.whileinappusebutton = true;
              _this.allowallthetimebutton = true;
              _this.permissionsGranted += 2;
            } else if (suc == "GRANTED_WHEN_IN_USE") {
              console.log("getLocationAuthorizationStatus() ", suc);
              _this.whileinappusebutton = true;
              _this.permissionsGranted++;
            } else {
              _this.whileinappusebutton = false;
              _this.allowallthetimebutton = false;
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).then(() => {
          setTimeout(() => {
            this.goToHome(false, "timeout");
          }, 1200);
        });
      });
    }
  }

  ionViewDidEnter() {
    // console.log("ionviewdidenter")
    this.goToHome(false, "didenter");
  }

  GetLocationPermission() {
    var _this2 = this;

    this.platform.ready().then(() => {
      this.diagnostic.switchToLocationSettings();
      this.diagnostic.registerLocationStateChangeHandler( /*#__PURE__*/function () {
        var _ref2 = (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          console.log("Change in state of location", res);

          if (res == "high_accuracy") {
            _this2.changeLocationbutton(); // this.permissionsGranted++;


            _this2.ngOnInit();
          } else {
            _this2.locationbutton = false;
          }
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    });
  }

  changeLocationbutton() {
    console.log("changelocation called");
    this.locationbutton = true;
    this.permissionsGranted++;
  }

  precision_WhileInUse() {
    this.platform.ready().then(() => {
      this.diagnostic.requestLocationAuthorization("when_in_use").then(succ => {
        console.log("precision while in use", succ);

        if (succ == "authorized_when_in_use" || succ == "GRANTED_WHEN_IN_USE") {
          this.whileinappusebutton = true;
          this.permissionsGranted++;
        } else {
          this.whileinappusebutton = false;
        }
      });
    });
  }

  precision_allowAllTheTime() {
    this.platform.ready().then(() => {
      console.log("preciseallowalltheime");
      this.diagnostic.requestLocationAuthorization("always").then(succ => {
        console.log("allowallthe time", succ);

        if (succ == "GRANTED") {
          this.allowallthetimebutton = true;
          this.permissionsGranted++;
        } else {
          this.allowallthetimebutton = false;
        }
      });
    });
  }

  enableNext() {
    if (this.permissionsGranted == this.totalPermissionRequired) {
      console.log("enabling next button");
      this.nextbutton = false;
      clearInterval(this.enableNextInterval); // ! go to home page automatically
    } else {
      this.nextbutton = true;
    }
  }

  goToHome(forced, callLevel) {
    console.log("going home permission granted", this.permissionsGranted, "call level", callLevel);

    if (forced) {
      this.router.navigateByUrl("/home").then(() => {
        console.log("succesfull navigation ");
      }, err => {
        console.log("Transition error from Tripproposal to home page", err);
        this.router.navigateByUrl("/home");
      });
    }

    if (this.permissionsGranted == this.totalPermissionRequired) {
      this.router.navigateByUrl("/home").then(() => {
        console.log("succesfull navigation ");
      }, err => {
        console.log("Transition error from landing to home page", err);
        this.router.navigateByUrl("/home");
      });
    }
  }

  ionViewWillLeave() {
    clearInterval(this.enableNextInterval);
  }

};

LandingPagePage.ctorParameters = () => [{
  type: _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__.Diagnostic
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];

LandingPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: "app-landing-page",
  template: _landing_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_landing_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LandingPagePage);


/***/ }),

/***/ 481:
/*!**********************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-background-color: orange;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-card {\n  --ion-background-color: white;\n  position: relative;\n  top: 10%;\n  justify-content: center;\n  align-items: center;\n}\n\nion-button {\n  display: flex;\n}\n\n.mainHeading {\n  top: 3%;\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n}\n\nion-item {\n  --padding-start: 0;\n}\n\n.continueBtn {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw2QkFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUVFLGFBQUE7QUFDRjs7QUFDQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtBQUdGIiwiZmlsZSI6ImxhbmRpbmctcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY2FyZCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvLyBkaXNwbGF5OiAgZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tYnV0dG9uIHtcbiAgLy8gLS1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbkhlYWRpbmcge1xuICB0b3A6IDMlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbi5jb250aW51ZUJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iXX0= */";

/***/ }),

/***/ 9958:
/*!**********************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <h1 class=\"mainHeading\">Welcome to bike Rider app</h1>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title\n        >Permissons Required\n        {{this.permissionsGranted}}/{{this.totalPermissionRequired}}\n        <sup>*</sup>\n      </ion-card-title>\n      <ion-card-subtitle\n        >Please allow all the permissions in order to use the\n        application</ion-card-subtitle\n      >\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list lines=\"none\">\n        <ion-item class=\"ion-text-wrap\">\n          <ion-label slot=\"start\"> Location Permission </ion-label>\n          <ion-button\n            fill=\"clear\"\n            shape=\"round\"\n            slot=\"end\"\n            [style.color]=\"locationbutton? 'green':'red'\"\n            [style.background]=\"locationbutton? 'black': 'grey' \"\n            (click)=\"GetLocationPermission()\"\n          >\n            <ion-icon\n              slot=\"end\"\n              [name]=\"locationbutton? 'checkmark-circle' :'close-circle'\"\n            ></ion-icon>\n            {{locationbutton ? \"Allowed\":\"Get Permission\"}}\n          </ion-button>\n        </ion-item>\n        <ion-item>\n          <ion-label slot=\"start\"> While in app use </ion-label>\n          <ion-button\n            fill=\"clear\"\n            shape=\"round\"\n            slot=\"end\"\n            [style.color]=\"whileinappusebutton? 'green':'red' \"\n            [style.background]=\"whileinappusebutton? 'black': 'grey' \"\n            (click)=\"precision_WhileInUse()\"\n            ><ion-icon\n              slot=\"end\"\n              [name]=\"whileinappusebutton? 'checkmark-circle' :'close-circle'\"\n            ></ion-icon>\n            {{whileinappusebutton ?\"Allowed\":\"Get Permission\"}}\n          </ion-button>\n        </ion-item>\n\n        <ion-item>\n          <ion-label slot=\"start\"> Allow all the time </ion-label>\n          <ion-button\n            fill=\"clear\"\n            shape=\"round\"\n            slot=\"end\"\n            [style.color]=\"allowallthetimebutton? 'green':'red'\"\n            [style.background]=\"allowallthetimebutton? 'black': 'grey' \"\n            (click)=\"precision_allowAllTheTime()\"\n            ><ion-icon\n              slot=\"end\"\n              [name]=\"allowallthetimebutton?'checkmark-circle' :'close-circle'\"\n            ></ion-icon>\n            {{allowallthetimebutton ?\"Allowed\":\"Get Permission\"}}\n          </ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-button\n  class=\"continueBtn\"\n  slot=\"end\"\n  [disabled]=\"nextbutton\"\n  background=\"black\"\n  (click)=\"goToHome()\"\n>\n  Continue\n</ion-button>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_landing-page_landing-page_module_ts.js.map