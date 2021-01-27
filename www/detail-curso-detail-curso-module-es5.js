(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-curso-detail-curso-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-curso/detail-curso.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-curso/detail-curso.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDetailCursoDetailCursoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>detail-curso</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n ad asd ad\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/detail-curso/detail-curso-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/detail-curso/detail-curso-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: DetailCursoPageRoutingModule */

    /***/
    function srcAppDetailCursoDetailCursoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailCursoPageRoutingModule", function () {
        return DetailCursoPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _detail_curso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detail-curso.page */
      "./src/app/detail-curso/detail-curso.page.ts");

      var routes = [{
        path: '',
        component: _detail_curso_page__WEBPACK_IMPORTED_MODULE_3__["DetailCursoPage"]
      }];

      var DetailCursoPageRoutingModule = function DetailCursoPageRoutingModule() {
        _classCallCheck(this, DetailCursoPageRoutingModule);
      };

      DetailCursoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailCursoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/detail-curso/detail-curso.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/detail-curso/detail-curso.module.ts ***!
      \*****************************************************/

    /*! exports provided: DetailCursoPageModule */

    /***/
    function srcAppDetailCursoDetailCursoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailCursoPageModule", function () {
        return DetailCursoPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _detail_curso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detail-curso-routing.module */
      "./src/app/detail-curso/detail-curso-routing.module.ts");
      /* harmony import */


      var _detail_curso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detail-curso.page */
      "./src/app/detail-curso/detail-curso.page.ts");

      var DetailCursoPageModule = function DetailCursoPageModule() {
        _classCallCheck(this, DetailCursoPageModule);
      };

      DetailCursoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_curso_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailCursoPageRoutingModule"]],
        declarations: [_detail_curso_page__WEBPACK_IMPORTED_MODULE_6__["DetailCursoPage"]]
      })], DetailCursoPageModule);
      /***/
    },

    /***/
    "./src/app/detail-curso/detail-curso.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/detail-curso/detail-curso.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDetailCursoDetailCursoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1jdXJzby9kZXRhaWwtY3Vyc28ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/detail-curso/detail-curso.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/detail-curso/detail-curso.page.ts ***!
      \***************************************************/

    /*! exports provided: DetailCursoPage */

    /***/
    function srcAppDetailCursoDetailCursoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailCursoPage", function () {
        return DetailCursoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DetailCursoPage = /*#__PURE__*/function () {
        function DetailCursoPage() {
          _classCallCheck(this, DetailCursoPage);
        }

        _createClass(DetailCursoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DetailCursoPage;
      }();

      DetailCursoPage.ctorParameters = function () {
        return [];
      };

      DetailCursoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-curso',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./detail-curso.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-curso/detail-curso.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./detail-curso.page.scss */
        "./src/app/detail-curso/detail-curso.page.scss"))["default"]]
      })], DetailCursoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=detail-curso-detail-curso-module-es5.js.map