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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header> </app-header>\n<router-outlet style=\"width:84%; margin-left:16%; margin-right:0;\" ></router-outlet>\n<!-- search form -->\n<hr>\n<div id=\"search\">   \n   <h1 style=\"text-align:center;\">Find A Product</h1>\n    <form>\n        <input id=\"search\" type = \"text\"placeholder=\"search for a product\">\n        <button class =\"btn btn-danger\" style=\"border-radius:0px 9px 9px 0px\">search</button>\n    </form>\n</div>\n<hr>\n<app-category></app-category>  \n\n<app-footer> </app-footer>\n   \n               "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/login/login.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/login/login.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid bg-dark\">\n        <div class=\"container\">\n                <div class=\"dp\"></div>\n                <h1> Login </h1>\n                <form method=\"POST\" action=\"#\">\n                    <!-- still to write an import image function so it can enable users import thier image or maybe choose from a dropdown -->\n                    <p>UserName</p>\n                    <input type=\"text\" placeholder=\"Enter your username\" />\n                    <p>Password</p>\n                    <input type=\"password\" placeholder=\"Enter password\" />\n                    <section>\n            <button><input type=\"submit\" class=\"btn btn-primary\"  > Submit</button>\n                        \n                    </section>\n                </form>\n            </div>\n        </div>\n        "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/signup/signup.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/signup/signup.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid bg-dark\">\n        <div class=\"container\">\n                <div class=\"dp\"></div>\n                <h1> Signup </h1>\n                <form method=\"POST\" action=\"#\">\n                    <!-- still to write an import image function so it can enable users import thier image or maybe choose from a dropdown -->\n                    <p>Import Image <Button class=\"text-white\">Browse</Button> </p>\n                    <p>UserName</p>\n                    <input type=\"text\" placeholder=\"Username\" />\n                    <p>Email</p>\n                    <input type=\"email\" placeholder=\"Email\" />\n                    <p>Password</p>\n                    <input type=\"password\" placeholder=\"Password\" />\n                    <p>Retype Password</p>\n                    <input type=\"password\" placeholder=\"Password\" />\n                    <section>\n            <button><input type=\"submit\" class=\"btn btn-warning\" > signup</button>\n                        \n                    </section>\n                </form>\n            </div>\n        </div>\n        "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/category/add-category/add-category.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category/add-category/add-category.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid bg-light\">\n<div class=\"container\">\n\t\t<div class=\"dp\"></div>\n\t\t<h1> Add a Category </h1>\n\t\t<form (ngSubmit)=\"onSubmit(add)\" #add=\"ngForm\">\n           <!-- still to write an import image function so it can enable users import thier image or maybe choose from a dropdown -->\n\t\t\t<p>Import Image <Button class=\"text-white\">Browse</Button> </p>\n\t\t\t<label>Name</label>\n\t\t\t<input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Category name\" required [(ngModel)]=\"categories.name\" name=\"name\"/>\n\t\t\t<!-- <label> Description </label>\n\t\t\t<input type=\"text\"id=\"description\" placeholder=\"Describe your Categry\" class=\"form-control\" [(ngModel)]=\"categoryModel.description\" name=\"Description\"/> -->\n\t\t\t<!-- <small class=\"text-danger\" [class.d-none]=\"name.valid || name.untouched\">Name is empty </small> -->\n\t\t\t<section>\n\t<button type=\"submit\" class=\"btn btn-primary\"  > Add Category</button>\n\t\t\t\t\n\t\t\t</section>\n\t\t</form>\n    </div>\n</div>\n\n\n\n<!-- <div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12\">\n\t\t\t<form>\n\t\t\t\t<div id=\"user-date\">\n\t\t\t\t\t<div class=\"from-group\">\n\t\t\t\t\t\t<label for=\"username\">Username</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"username\"class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"secret \">secret Questions </label>\n\t\t\t\t\t<select id=\"secret\" class=\"form-control\">\n\t\t\t\t\t\t<option value=\"pet\"your first pet></option>\n\t\t\t\t\t\t<option value=\"teacher\"\n\t\t\t\t\t\t\t\t\t\t\t>your first teacher</option>\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"btn btn-primary\"type=\"sugmit\">Submit</button>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/category/category-list/category-details/category-details.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category/category-list/category-details/category-details.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:84%; margin-left:16%; margin-right:0;\" class=\"jumbotron jumbotron-fluid bg-dark text-primary\" height=\"600px\" width=\"500px\">\n  <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-mg\">\n         <h2 id=\"head\">{{ 'category.name' }}</h2>\n         <img src=\"../../../../assets/images/0002.jpg\" alt=\"details\" height=\"300px\" width=\"500px\">\n        </div>\n         <div class=\"col-mg\">\n           <h1>Description</h1>\n           <p>This is how you make breakfast to taste like puden</p>\n         </div>\n      </div>\n  <div>\n    <button style=\"float:right;\" class=\"btn btn-danger\">Delete</button>\n    <button style=\"float:right;\" class=\"btn btn-success \">Edit</button>\n    &nbsp;\n    <button  class=\"btn btn-primary\">View All Products</button>\n    </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/category/category-list/category-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category/category-list/category-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n    <h1 id='head'>Product Categories</h1>\n    <a routerLink=\"/addCategory\" ><button id=\"btn\" class=\"btn btn-primary text-light\" style=\"font-weight: 100; padding:10px;font-size:20px;\">New Category</button></a>\n    <!--  use an ngfor wnen listing all categories since they are morethan one -->\n    <table>\n          <tr  id =\"table\" class=\"text-primary\" *ngFor =\"let category of categories\"> \n           <a routerLink= \"categoryDetails\" >\n               <td>\n               {{ category.name }} \n              <a  > <button id=\"delete\"  (click)=\"delete(category.id)\" class=\"btn gtn-sm btn-danger\"> Delete  </button> </a>\n              &nbsp;\n              <a routerLink=\"/edit\" ><button  class=\"btn btn-success \">Edit</button> </a>\n              </td> </a>\n          </tr>\n      </table>\n   </div>\n  \n      \n      \n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/category/category.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category/category.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-category-list></app-category-list>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/category/edit-category/edit-category.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category/edit-category/edit-category.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  style=\"width:84%; margin-left:16%; margin-right:0;\"cclass=\"jumbotron jumbotron-fluid bg-light\">\n    <div class=\"container\">\n            <div class=\"dp\"></div>\n            <h1> Edit Category </h1>\n            <form (ngSubmit)=\"onSubmit(add)\" #add=\"ngForm\">\n               <!-- still to write an import image function so it can enable users import thier image or maybe choose from a dropdown -->\n                <p>Import Image <Button class=\"text-white\">Browse</Button> </p>\n                <label>Name</label>\n                <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Category's new name\" required [(ngModel)]=\"categories.name\" name=\"name\"/>\n                <!-- <label> Description </label>\n                <input type=\"text\"id=\"description\" placeholder=\"Describe your Categry\" class=\"form-control\" [(ngModel)]=\"categoryModel.description\" name=\"Description\"/> -->\n                <!-- <small class=\"text-danger\" [class.d-none]=\"name.valid || name.untouched\">Name is empty </small> -->\n                <section>\n        <button type=\"submit\" class=\"btn btn-primary\"  > Save </button>\n                    \n                </section>\n            </form>\n        </div>\n    </div>\n    \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id='go'>\n   <li class= \"fa fa-facebook-square\" href=\"\">facebook</li>\n    <hr>\n    POWERED BY GO-BUYER/GO-GROUPS&copy;2019 \n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:84%; margin-left:16%; margin-right:0;\"class=\"bg-primary\">\n  <h1 class=\"text-light bg-primary\">\n  <marquee style=\"text-shadow: 0px 0px 15px #000000; font-family:italic;margin-bottom:0px;\">\n    GO-BUYER Welcome To The Online Shop\n  </marquee></h1>\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a routerLink=\"home\" class=\"navbar-brand\" >\n<div id=\"svg\">\n      <a  id =\"onclick\" >\n          <svg href=\"#\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" \n          class=\"style-scope yt-icon\" style=\"pointer-events: none; display: block;\n             width: 80px; height: 60px;\"><g class=\"style-scope yt-icon\">\n          <path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\" class=\"style-scope yt-icon\"></path>\n        </g></svg></a>\n      </div></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\"\n   aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/about\">About </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/Category\"> Categories</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/product\">Products</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/feedback\">Feedback</a>\n      </li>\n    </ul>\n    <span class=\"navbar-text\">\n      <button class=\"btn-primary\"><a routerLink=\"/signup\"><h1>Signup</h1></a></button>\n  \n      <button class=\"btn-primary\"><a routerLink=\"/login\">\"<h1>Login</h1></a></button>\n    </span>\n  </div>\n</nav>\n\n       </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/add-product/add-product.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/add-product/add-product.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid bg-light\">\n    <div class=\"container\">\n            <div class=\"dp\"></div>\n            <h1> Add Product </h1>\n            <form (ngSubmit)=\"onSubmit(add)\" #add=\"ngForm\">\n               <!-- still to write an import image function so it can enable users import thier image or maybe choose from a dropdown -->\n                <p>Import Image <Button class=\"text-white\">Browse</Button> </p>\n                <label>Name:</label>\n                <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Product name\" required [(ngModel)]=\"products.name\" name=\"name\"/>\n                \n                <label>Quantity:</label>\n                <input type=\"text\" id=\"quantity\" class=\"form-control\" placeholder=\"\" required [(ngModel)]=\"products.name\" name=\"name\"/>\n                 \n                <label> Price:</label>\n                <input type=\"text\"id=\"price\"  class=\"form-control\" [(ngModel)]=\"productModel.price\" name=\"Price\"/>\n                <select class=\"custom-select\">\n                    <label>Category:</label>\n                        <option selected> Choose Category </option> \n                        <option *ngFor=\"let category of categories\"> {{ Category.name }} </option>\n                        </select>\n                <section>\n        <button type=\"submit\" class=\"btn btn-primary\"  > Save </button>\n                    \n                </section>\n            </form>\n        </div>\n    \n    </div>\n    \n    \n   \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/edit-product/edit-product.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/edit-product/edit-product.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid bg-dark\">\n    <div class=\"container\">\n            <div class=\"dp\"></div>\n            <h1> Edit Product </h1>\n            <form (ngSubmit)=\"onSubmit(add)\" #add=\"ngForm\">\n               <!-- still to write an import image function so it can enable users import thier image or maybe choose from a dropdown -->\n                <p>Import Image <Button class=\"text-white\">Browse</Button> </p>\n                <label>Product Name</label>\n                <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"product name\" required [(ngModel)]=\"products.name\" name=\"name\"/>\n                <label> price</label>\n                <input type=\"text\"id=\"price\"  class=\"form-control\" [(ngModel)]=\"productModel.price\" name=\"price\"/>\n                <label> Quantity</label>\n                <input type=\"text\"id=\"quantity\"  class=\"form-control\" [(ngModel)]=\"productModel.quantity\" name=\"quantity\"/>\n                <!-- <small class=\"text-danger\" [class.d-none]=\"name.valid || name.untouched\">Name is empty </small> -->\n                <section>\n        <button type=\"submit\" class=\"btn btn-primary\"  > Save </button>\n                    \n                </section>\n            </form>\n        </div>\n    </div>\n    \n    \n    \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product-details/product-details.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product-details/product-details.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>product-details works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button class=\"btn btn-primary\" routerLink=\"/addproduct\"> Add New Product </button>\n<div style=\"width:84%; margin-left:16%; margin-right:0;\">\n<div  class=\"card\" *ngFor=\"let product of products\" style=\"width: 18rem;\">\n    <h1> {{ product.category.name }} </h1>\n    <img src=\"../../assets/images/0005.jpg\" class=\"card-img-top\" alt=\"\">\n    <div class=\"card-body\">\n      <div class=\"class-text\">\n        <h2>Name:</h2>{{ product.name }}\n      <h3>Price:</h3>{{ product.price }}\n      <h3>Quantity:</h3>{{ product.quantity }}\n      </div>\n    <a><button routerLink=\"/editproduct\" (click)=\"edit(product.id)\"class=\"btn btn-primary\">Edit</button></a> &nbsp;\n    <a><button class=\"btn btn-danger\"(click)=\"delete(product.id)\" >Delete Product</button></a>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category/add-category/add-category.component */ "./src/app/category/add-category/add-category.component.ts");
/* harmony import */ var _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _category_category_list_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category/category-list/category-details/category-details.component */ "./src/app/category/category-list/category-details/category-details.component.ts");
/* harmony import */ var _category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category/edit-category/edit-category.component */ "./src/app/category/edit-category/edit-category.component.ts");
/* harmony import */ var _product_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/add-product/add-product.component */ "./src/app/product/add-product/add-product.component.ts");
/* harmony import */ var _product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product/edit-product/edit-product.component */ "./src/app/product/edit-product/edit-product.component.ts");













const routes = [
    // { path: '',redirectTo: '/category', pathMatch:'full'},
    { path: 'category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"] },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"] },
    { path: 'addCategory', component: _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_6__["AddCategoryComponent"] },
    { path: 'signup', component: _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
    { path: 'login', component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'categoryDetails', component: _category_category_list_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_9__["CategoryDetailsComponent"] },
    { path: 'edit', component: _category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_10__["EditCategoryComponent"] },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"] },
    { path: 'addproduct', component: _product_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__["AddProductComponent"] },
    { path: 'editproduct', component: _product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_12__["EditProductComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search{\r\n    margin-left:10%;\r\n    margin-right:0;\r\n    width:90%;\r\n\r\n}\r\n#search form{\r\n    display:flex;\r\n    flex-direction:row;\r\n}\r\n#search form input[type=\"text\"]{\r\n    border:8px solid #dc3545;\r\n    border-radius:9px 0px 0px 9px;\r\n    background-color:rgb(233, 223, 223);\r\n    border-right: none;\r\n}\r\n.btn{\r\n    float:right;\r\n}\r\nbody {\r\n    background:aqua;\r\n\r\n     }\r\n@media screen and (min-width:576px)\r\n      {\r\n     /*576px and above screen sizes*/\r\n     body{\r\n         background:blue;\r\n     }\r\n  }\r\n@media screen and (min-width:768px)\r\n      {\r\n     /*768px and above screen sizes*/\r\n     body{\r\n         background:red;\r\n     }\r\n      }\r\n@media screen and (min-width:992px)\r\n      {\r\n     /*992px and above screen sizes*/\r\n     body{\r\n         background:orange;\r\n     } \r\n  }\r\n@media screen and (min-width:1200px)\r\n      {\r\n     /*1200px and above screen sizes*/\r\n     body{\r\n         background:purple;\r\n     }\r\n      } \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFNBQVM7O0FBRWI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsbUNBQW1DO0lBQ25DLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlOztLQUVkO0FBQ0E7O0tBRUEsK0JBQStCO0tBQy9CO1NBQ0ksZUFBZTtLQUNuQjtFQUNIO0FBQ087O0tBRUosK0JBQStCO0tBQy9CO1NBQ0ksY0FBYztLQUNsQjtNQUNDO0FBRUQ7O0tBRUEsK0JBQStCO0tBQy9CO1NBQ0ksaUJBQWlCO0tBQ3JCO0VBQ0g7QUFFRzs7S0FFQSxnQ0FBZ0M7S0FDaEM7U0FDSSxpQkFBaUI7S0FDckI7TUFDQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaHtcclxuICAgIG1hcmdpbi1sZWZ0OjEwJTtcclxuICAgIG1hcmdpbi1yaWdodDowO1xyXG4gICAgd2lkdGg6OTAlO1xyXG5cclxufVxyXG4jc2VhcmNoIGZvcm17XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbn1cclxuI3NlYXJjaCBmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gICAgYm9yZGVyOjhweCBzb2xpZCAjZGMzNTQ1O1xyXG4gICAgYm9yZGVyLXJhZGl1czo5cHggMHB4IDBweCA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMzMsIDIyMywgMjIzKTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG4uYnRue1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOmFxdWE7XHJcblxyXG4gICAgIH1cclxuICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjU3NnB4KVxyXG4gICAgICB7XHJcbiAgICAgLyo1NzZweCBhbmQgYWJvdmUgc2NyZWVuIHNpemVzKi9cclxuICAgICBib2R5e1xyXG4gICAgICAgICBiYWNrZ3JvdW5kOmJsdWU7XHJcbiAgICAgfVxyXG4gIH1cclxuICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweClcclxuICAgICAge1xyXG4gICAgIC8qNzY4cHggYW5kIGFib3ZlIHNjcmVlbiBzaXplcyovXHJcbiAgICAgYm9keXtcclxuICAgICAgICAgYmFja2dyb3VuZDpyZWQ7XHJcbiAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkycHgpXHJcbiAgICAgIHtcclxuICAgICAvKjk5MnB4IGFuZCBhYm92ZSBzY3JlZW4gc2l6ZXMqL1xyXG4gICAgIGJvZHl7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6b3JhbmdlO1xyXG4gICAgIH0gXHJcbiAgfVxyXG5cclxuICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMDBweClcclxuICAgICAge1xyXG4gICAgIC8qMTIwMHB4IGFuZCBhYm92ZSBzY3JlZW4gc2l6ZXMqL1xyXG4gICAgIGJvZHl7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6cHVycGxlO1xyXG4gICAgIH1cclxuICAgICAgfSAiXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ProductCatalog';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product-details/product-details.component */ "./src/app/product/product-details/product-details.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./category/category-list/category-list.component */ "./src/app/category/category-list/category-list.component.ts");
/* harmony import */ var _category_category_list_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./category/category-list/category-details/category-details.component */ "./src/app/category/category-list/category-details/category-details.component.ts");
/* harmony import */ var _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./category/add-category/add-category.component */ "./src/app/category/add-category/add-category.component.ts");
/* harmony import */ var _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./authentication/signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./category/edit-category/edit-category.component */ "./src/app/category/edit-category/edit-category.component.ts");
/* harmony import */ var _product_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product/add-product/add-product.component */ "./src/app/product/add-product/add-product.component.ts");
/* harmony import */ var _product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product/edit-product/edit-product.component */ "./src/app/product/edit-product/edit-product.component.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
            _product_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailsComponent"],
            _category_category_component__WEBPACK_IMPORTED_MODULE_11__["CategoryComponent"],
            _category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_12__["CategoryListComponent"],
            _category_category_list_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_13__["CategoryDetailsComponent"],
            _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_14__["AddCategoryComponent"],
            _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
            _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_17__["EditCategoryComponent"],
            _product_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_18__["AddProductComponent"],
            _product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_19__["EditProductComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/authentication/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/authentication/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin:0px;\r\n    padding:0px;\r\n    background-image: url('0005.jpg');\r\n    background-size:cover;\r\n    text-transform:capitalize;\r\n}\r\n.container{\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    background-size:cover;\r\n    background-position:center;\r\n    width:300px;\r\n    height:500px;\r\n    margin-top:0px;\r\n}\r\nh1{\r\n    color:blue;\r\n    text-shadow:1px 1px 1px white;\r\n    font-weight:bold;\r\n}\r\np{\r\n    color:#fff;\r\n    font-size:1.5em;\r\n}\r\n.container input[type=\"email\"]{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:9px;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    color:white;\r\n}\r\n.container input[type=\"password\"]{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:9px;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    color:white;\r\n}\r\nbutton{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:5px;\r\n    background-color:blue;\r\n    margin-top:7px;\r\n    color:blue;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUNBQXdEO0lBQ3hELHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLFVBQVU7O0FBRWQiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvMDAwNS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBoZWlnaHQ6NTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxufVxyXG5oMXtcclxuICAgIGNvbG9yOmJsdWU7XHJcbiAgICB0ZXh0LXNoYWRvdzoxcHggMXB4IDFweCB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxucHtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LXNpemU6MS41ZW07XHJcbn1cclxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVwiZW1haWxcIl17XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6OXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4uY29udGFpbmVyIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXXtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsdWU7XHJcbiAgICBtYXJnaW4tdG9wOjdweDtcclxuICAgIGNvbG9yOmJsdWU7XHJcbiAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/authentication/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/authentication/signup/signup.component.css":
/*!************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin:0px;\r\n    padding:0px;\r\n    background-image: url('0005.jpg');\r\n    background-size:cover;\r\n    text-transform:capitalize;\r\n}\r\n.container{\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    background-size:cover;\r\n    background-position:center;\r\n    width:300px;\r\n    height:500px;\r\n    margin-top:0px;\r\n}\r\nh1{\r\n    color:blue;\r\n    text-shadow:1px 1px 1px white;\r\n    font-weight:bold;\r\n}\r\np{\r\n    color:#fff;\r\n    font-size:1.5em;\r\n}\r\n.container input[type=\"email\"]{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:9px;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    color:white;\r\n}\r\n.container input[type=\"password\"]{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:9px;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    color:white;\r\n}\r\nbutton{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:5px;\r\n    background-color:blue;\r\n    margin-top:7px;\r\n    color:blue;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQ0FBd0Q7SUFDeEQscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsVUFBVTs7QUFFZCIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLzAwMDUuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbn1cclxuaDF7XHJcbiAgICBjb2xvcjpibHVlO1xyXG4gICAgdGV4dC1zaGFkb3c6MXB4IDFweCAxcHggd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC1zaXplOjEuNWVtO1xyXG59XHJcbi5jb250YWluZXIgaW5wdXRbdHlwZT1cImVtYWlsXCJde1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl17XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6OXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5idXR0b257XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibHVlO1xyXG4gICAgbWFyZ2luLXRvcDo3cHg7XHJcbiAgICBjb2xvcjpibHVlO1xyXG4gIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SignupComponent = class SignupComponent {
    constructor() { }
    ngOnInit() {
    }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/authentication/signup/signup.component.css")]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/category/add-category/add-category.component.css":
/*!******************************************************************!*\
  !*** ./src/app/category/add-category/add-category.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin:0px;\r\n    padding:0px;\r\n    background-image: url('0005.jpg');\r\n    background-size:cover;\r\n    text-transform:capitalize;\r\n}\r\n.container{\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    background-size:cover;\r\n    background-position:center;\r\n    width:300px;\r\n    height:500px;\r\n    margin-top:0px;\r\n}\r\nh1{\r\n    color:blue;\r\n    text-shadow:1px 1px 1px white;\r\n    font-weight:bold;\r\n}\r\np{\r\n    color:#fff;\r\n    font-size:1.5em;\r\n}\r\n.container input[type=\"email\"]{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:9px;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    color:white;\r\n}\r\n.container input[type=\"password\"]{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:9px;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    color:white;\r\n}\r\nbutton{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:5px;\r\n    background-color:blue;\r\n    margin-top:7px;\r\n    color:blue;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvYWRkLWNhdGVnb3J5L2FkZC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQ0FBd0Q7SUFDeEQscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsVUFBVTs7QUFFZCIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2FkZC1jYXRlZ29yeS9hZGQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLzAwMDUuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbn1cclxuaDF7XHJcbiAgICBjb2xvcjpibHVlO1xyXG4gICAgdGV4dC1zaGFkb3c6MXB4IDFweCAxcHggd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC1zaXplOjEuNWVtO1xyXG59XHJcbi5jb250YWluZXIgaW5wdXRbdHlwZT1cImVtYWlsXCJde1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl17XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6OXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5idXR0b257XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibHVlO1xyXG4gICAgbWFyZ2luLXRvcDo3cHg7XHJcbiAgICBjb2xvcjpibHVlO1xyXG4gIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/category/add-category/add-category.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/category/add-category/add-category.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _category_category_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../category/category.model */ "./src/app/category/category.model.ts");
/* harmony import */ var _product_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../product-catalog.service */ "./src/app/product-catalog.service.ts");




let AddCategoryComponent = class AddCategoryComponent {
    constructor(_productcatalogService) {
        this._productcatalogService = _productcatalogService;
        this.categories = new _category_category_model__WEBPACK_IMPORTED_MODULE_2__["Category"]();
    }
    //categoryModel = new Category("peggy","shes a fat and short girl" , " " , 1234);
    onSubmit(add) {
        this._productcatalogService.createCategory(add.value).subscribe(data => {
            this.categories = new _category_category_model__WEBPACK_IMPORTED_MODULE_2__["Category"]();
            console.log(this.categories);
        });
    }
    ngOnInit() {
    }
};
AddCategoryComponent.ctorParameters = () => [
    { type: _product_catalog_service__WEBPACK_IMPORTED_MODULE_3__["ProductCatalogService"] }
];
AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-category',
        template: __webpack_require__(/*! raw-loader!./add-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/category/add-category/add-category.component.html"),
        styles: [__webpack_require__(/*! ./add-category.component.css */ "./src/app/category/add-category/add-category.component.css")]
    })
], AddCategoryComponent);



/***/ }),

/***/ "./src/app/category/category-list/category-details/category-details.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/category/category-list/category-details/category-details.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    float:right;\r\n     border-radius:20px; \r\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n     font-size:25px; \r\n    text-shadow:0px  0px 15px green;\r\n    margin-left: 4;\r\n}\r\n.head{\r\n    background-color: aquamarine; \r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1kZXRhaWxzL2NhdGVnb3J5LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7S0FDVixrQkFBa0I7SUFDbkIscUhBQXFIO0tBQ3BILGNBQWM7SUFDZiwrQkFBK0I7SUFDL0IsY0FBYztBQUNsQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LWxpc3QvY2F0ZWdvcnktZGV0YWlscy9jYXRlZ29yeS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgICBib3JkZXItcmFkaXVzOjIwcHg7IFxyXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgIGZvbnQtc2l6ZToyNXB4OyBcclxuICAgIHRleHQtc2hhZG93OjBweCAgMHB4IDE1cHggZ3JlZW47XHJcbiAgICBtYXJnaW4tbGVmdDogNDtcclxufVxyXG4uaGVhZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/category/category-list/category-details/category-details.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/category/category-list/category-details/category-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CategoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailsComponent", function() { return CategoryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryDetailsComponent = class CategoryDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-details',
        template: __webpack_require__(/*! raw-loader!./category-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/category/category-list/category-details/category-details.component.html"),
        styles: [__webpack_require__(/*! ./category-details.component.css */ "./src/app/category/category-list/category-details/category-details.component.css")]
    })
], CategoryDetailsComponent);



/***/ }),

/***/ "./src/app/category/category-list/category-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/category/category-list/category-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    font-size: 30px;\r\n    font-family: bold;\r\n}\r\n\r\nbody {\r\n  font-family: italic;\r\n}\r\n\r\n.sidebar {\r\n  height: 100%;\r\n  width: 16%;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: aqua;\r\n  overflow-x: hidden;\r\n  padding-top: 16px;\r\n  z-index:1;\r\n}\r\n\r\n.sidebar a {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n  color: black;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n\r\n.sidebar a:hover {\r\n  color: gold;\r\n\r\n}\r\n\r\n/* \r\n.main {\r\n  margin-left: 160px; //Same as the width of the sidenav */\r\n\r\n/* padding: 2px 10px;\r\n}\r\n\r\n#phones { */\r\n\r\n/* margin-left: 160px;// Same as the width of the sidenav */\r\n\r\n/* padding: 0px 10px;\r\n  } */\r\n\r\n/* #televisions {\r\n    margin-left: 160px; // Same as the width of the sidenav  */\r\n\r\n/* padding: 0px 10px;\r\n  }\r\n\r\n  #kitchen { */\r\n\r\n/* margin-left: 160px; Same as the width of the sidenav */\r\n\r\n/* padding: 0px 10px;\r\n  } */\r\n\r\n/* #btn {\r\n      padding:0px 10px;\r\n      color:orange;\r\n  }\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidebar {padding-top: 15px;}\r\n  .sidebar a {font-size: 18px;}\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVzs7QUFFYjs7QUFDQTs7MERBRTBEOztBQUN4RDs7O1dBR1M7O0FBQ1AsMkRBQTJEOztBQUMzRDtLQUNDOztBQUVIOzhEQUM0RDs7QUFDMUQ7OztjQUdVOztBQUNWLHlEQUF5RDs7QUFDekQ7S0FDQzs7QUFDSDs7Ozs7Ozs7R0FRQyIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LWxpc3QvY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogYm9sZDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IGl0YWxpYztcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTYlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHotaW5kZXg6MTtcclxufVxyXG5cclxuLnNpZGViYXIgYSB7XHJcbiAgcGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGE6aG92ZXIge1xyXG4gIGNvbG9yOiBnb2xkO1xyXG5cclxufVxyXG4vKiBcclxuLm1haW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNjBweDsgLy9TYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZW5hdiAqL1xyXG4gIC8qIHBhZGRpbmc6IDJweCAxMHB4O1xyXG59XHJcblxyXG4jcGhvbmVzIHsgKi9cclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAxNjBweDsvLyBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZW5hdiAqL1xyXG4gICAgLyogcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgfSAqL1xyXG5cclxuICAvKiAjdGVsZXZpc2lvbnMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2MHB4OyAvLyBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZW5hdiAgKi9cclxuICAgIC8qIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgI2tpdGNoZW4geyAqL1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDE2MHB4OyBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZW5hdiAqL1xyXG4gICAgLyogcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgfSAqL1xyXG4gIC8qICNidG4ge1xyXG4gICAgICBwYWRkaW5nOjBweCAxMHB4O1xyXG4gICAgICBjb2xvcjpvcmFuZ2U7XHJcbiAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgLnNpZGViYXIge3BhZGRpbmctdG9wOiAxNXB4O31cclxuICAuc2lkZWJhciBhIHtmb250LXNpemU6IDE4cHg7fVxyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/category/category-list/category-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/category/category-list/category-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../product-catalog.service */ "./src/app/product-catalog.service.ts");



let CategoryListComponent = class CategoryListComponent {
    constructor(productCatalog) {
        this.productCatalog = productCatalog;
    }
    ngOnInit() {
        //gets all categories
        this.productCatalog.getAllCategories()
            .subscribe((data) => {
            this.categories = data;
            console.log(this.categories);
        });
    }
    //delete's  a category
    delete(id) {
        this.productCatalog.deleteCategory(id)
            .subscribe((data) => {
            this.category = data;
            console.log(this.category);
        });
    }
};
CategoryListComponent.ctorParameters = () => [
    { type: _product_catalog_service__WEBPACK_IMPORTED_MODULE_2__["ProductCatalogService"] }
];
CategoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-list',
        template: __webpack_require__(/*! raw-loader!./category-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/category/category-list/category-list.component.html"),
        styles: [__webpack_require__(/*! ./category-list.component.css */ "./src/app/category/category-list/category-list.component.css")]
    })
], CategoryListComponent);



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryComponent = class CategoryComponent {
    constructor() {
        this.category = [];
    }
    ngOnInit() {
    }
};
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: __webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/index.js!./src/app/category/category.component.html"),
        styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
    })
], CategoryComponent);



/***/ }),

/***/ "./src/app/category/category.model.ts":
/*!********************************************!*\
  !*** ./src/app/category/category.model.ts ***!
  \********************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
    constructor() { }
}
// export class Category { 
//     constructor(
//     public name: string,
//    public description: string,
//   public  imagePath: string,
//    public id: number
//     )
//     {}
// }


/***/ }),

/***/ "./src/app/category/edit-category/edit-category.component.css":
/*!********************************************************************!*\
  !*** ./src/app/category/edit-category/edit-category.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin:0px;\r\n    padding:0px;\r\n    background-image: url('0005.jpg');\r\n    background-size:cover;\r\n    text-transform:capitalize;\r\n}\r\n.container{\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    background-size:cover;\r\n    background-position:center;\r\n    width:300px;\r\n    height:500px;\r\n    margin-top:0px;\r\n}\r\nh1{\r\n    color:blue;\r\n    text-shadow:1px 1px 1px white;\r\n    font-weight:bold;\r\n}\r\np{\r\n    color:#fff;\r\n    font-size:1.5em;\r\n}\r\n.container input[type=\"email\"]{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:9px;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    color:white;\r\n}\r\n.container input[type=\"password\"]{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:9px;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    color:white;\r\n}\r\nbutton{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:5px;\r\n    background-color:blue;\r\n    margin-top:7px;\r\n    color:blue;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS9lZGl0LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGlDQUF3RDtJQUN4RCxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxVQUFVOztBQUVkIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS9lZGl0LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8wMDA1LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGhlaWdodDo1MDBweDtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG59XHJcbmgxe1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgIHRleHQtc2hhZG93OjFweCAxcHggMXB4IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG5we1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtc2l6ZToxLjVlbTtcclxufVxyXG4uY29udGFpbmVyIGlucHV0W3R5cGU9XCJlbWFpbFwiXXtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbi5jb250YWluZXIgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJde1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Ymx1ZTtcclxuICAgIG1hcmdpbi10b3A6N3B4O1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/category/edit-category/edit-category.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/category/edit-category/edit-category.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _product_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../product-catalog.service */ "./src/app/product-catalog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let EditCategoryComponent = class EditCategoryComponent {
    constructor(_productcatalogService, router, formBuilder) {
        this._productcatalogService = _productcatalogService;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        //  //edit an existing category
        //    this._productcatalogService.updateCategory()
        //   .subscribe((data: Category[])=>{
        //     this.updatecategory = data;
        //     console.log(this.updatecategory);
        //   })
    }
};
EditCategoryComponent.ctorParameters = () => [
    { type: _product_catalog_service__WEBPACK_IMPORTED_MODULE_3__["ProductCatalogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
EditCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-category',
        template: __webpack_require__(/*! raw-loader!./edit-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/category/edit-category/edit-category.component.html"),
        styles: [__webpack_require__(/*! ./edit-category.component.css */ "./src/app/category/edit-category/edit-category.component.css")]
    })
], EditCategoryComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#go{\r\n    color:orange;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNnb3tcclxuICAgIGNvbG9yOm9yYW5nZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary{\r\n    float:left;\r\n    border-radius:50%;\r\n    color:red;\r\n}\r\n#head{\r\n    text-align: center;\r\n    color:orangered;\r\n    background-color: aquamarine;\r\n    border-radius:25% 25% 25% 25%; \r\n    width:84%;\r\n    margin-left:16%;\r\n    margin-right:0px;\r\n}\r\n#navbar #navbar-expand-lgnavbar-dark #bg-info{\r\n    margin-left:16%;\r\n    margin-right:0;\r\n    width:84%;\r\n}\r\n#svg{\r\n    z-index:4;\r\n}\r\n.navbar-nav > Li {\r\n    padding-right:9px;\r\n    font-size:25px;\r\n    font-weight:bold;\r\n    color:black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxTQUFTO0FBQ2I7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1wcmltYXJ5e1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbiNoZWFke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6b3JhbmdlcmVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MjUlIDI1JSAyNSUgMjUlOyBcclxuICAgIHdpZHRoOjg0JTtcclxuICAgIG1hcmdpbi1sZWZ0OjE2JTtcclxuICAgIG1hcmdpbi1yaWdodDowcHg7XHJcbn1cclxuI25hdmJhciAjbmF2YmFyLWV4cGFuZC1sZ25hdmJhci1kYXJrICNiZy1pbmZve1xyXG4gICAgbWFyZ2luLWxlZnQ6MTYlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjA7XHJcbiAgICB3aWR0aDo4NCU7XHJcbn1cclxuI3N2Z3tcclxuICAgIHotaW5kZXg6NDtcclxufVxyXG4ubmF2YmFyLW5hdiA+IExpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6OXB4O1xyXG4gICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/product-catalog.service.ts":
/*!********************************************!*\
  !*** ./src/app/product-catalog.service.ts ***!
  \********************************************/
/*! exports provided: ProductCatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCatalogService", function() { return ProductCatalogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ProductCatalogService = class ProductCatalogService {
    constructor(http) {
        this.http = http;
        // //Get a single category
        // getCategory(id:number):observable<category>{
        //   const Url=`${apiUrl}/${id}`;
        //   return this.http.get<category>(url.pipe(tap(_console.log(`fetched category id=${id=&$id}`)))),
        // }
        //Create a category
        this._Url = "https://sheltered-falls-45349.herokuapp.com/api/category";
    }
    // //Error handler function
    // private handleError<T> (operation='operation',result?:T){
    //   return (error:any): Observable<T>=>{ 
    //     Console.error(error);
    //     return of(result as T);
    //   };
    // }
    //gets all categories
    getAllCategories() {
        return this.http.get("https://sheltered-falls-45349.herokuapp.com/api/category");
    }
    createCategory(category) {
        return this.http.post(this._Url, category);
    }
    //Edit a category
    updateCategory(categoryid, category) {
        const _Url = `${'https://sheltered-falls-45349.herokuapp.com/api/category/'}/${categoryid}`;
        return this.http.put(_Url, category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => console.log(`updated category categoryid=${categoryid}`)));
    }
    //delete a category
    deleteCategory(categoryid) {
        return this.http.delete('https://sheltered-falls-45349.herokuapp.com/api/category/' + categoryid);
    }
};
ProductCatalogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductCatalogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductCatalogService);



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        //create a product under a particular category
        this._Url = "https://sheltered-falls-45349.herokuapp.com/api/products/category/";
    }
    //get all products under their specified categories
    getAllproducts() {
        return this.http.get("https://sheltered-falls-45349.herokuapp.com/api/products/");
    }
    createProduct(product, categoryid) {
        return this.http.post(this._Url, product);
    }
    //delete a product under a particular catigory
    deleteProduct(productid) {
        return this.http.delete("https://sheltered-falls-45349.herokuapp.com/api/products/" + productid);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/product/add-product/add-product.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product/add-product/add-product.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin:0px;\r\n    padding:0px;\r\n    background-image: url('0005.jpg');\r\n    background-size:cover;\r\n    text-transform:capitalize;\r\n}\r\n.container{\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    background-size:cover;\r\n    background-position:center;\r\n    width:300px;\r\n    height:500px;\r\n    margin-top:0px;\r\n}\r\nh1{\r\n    color:blue;\r\n    text-shadow:1px 1px 1px white;\r\n    font-weight:bold;\r\n}\r\np{\r\n    color:#fff;\r\n    font-size:1.5em;\r\n}\r\n.container input[type=\"email\"]{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:9px;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    color:white;\r\n}\r\n.container input[type=\"password\"]{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:9px;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    color:white;\r\n}\r\nbutton{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:5px;\r\n    background-color:blue;\r\n    margin-top:7px;\r\n    color:blue;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQ0FBd0Q7SUFDeEQscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsVUFBVTs7QUFFZCIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLzAwMDUuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbn1cclxuaDF7XHJcbiAgICBjb2xvcjpibHVlO1xyXG4gICAgdGV4dC1zaGFkb3c6MXB4IDFweCAxcHggd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC1zaXplOjEuNWVtO1xyXG59XHJcbi5jb250YWluZXIgaW5wdXRbdHlwZT1cImVtYWlsXCJde1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl17XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6OXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5idXR0b257XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibHVlO1xyXG4gICAgbWFyZ2luLXRvcDo3cHg7XHJcbiAgICBjb2xvcjpibHVlO1xyXG4gIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/product/add-product/add-product.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product/add-product/add-product.component.ts ***!
  \**************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/product.service */ "./src/app/product.service.ts");



let AddProductComponent = class AddProductComponent {
    constructor(_productService) {
        this._productService = _productService;
    }
    // //adds a product
    // products:Product=new Product();
    // onSubmit(add:NgForm){
    //   this._productService.createProduct(add.value,categoryid:number).subscribe(data=>{
    //     this.products= new Product();
    //     console.log(this.products);
    //   })
    // } 
    ngOnInit() {
    }
};
AddProductComponent.ctorParameters = () => [
    { type: src_app_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product',
        template: __webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/add-product/add-product.component.html"),
        styles: [__webpack_require__(/*! ./add-product.component.css */ "./src/app/product/add-product/add-product.component.css")]
    })
], AddProductComponent);



/***/ }),

/***/ "./src/app/product/edit-product/edit-product.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/edit-product/edit-product.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin:0px;\r\n    padding:0px;\r\n    background-image: url('0005.jpg');\r\n    background-size:cover;\r\n    text-transform:capitalize;\r\n}\r\n.container{\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    background-size:cover;\r\n    background-position:center;\r\n    width:300px;\r\n    height:500px;\r\n    margin-top:0px;\r\n}\r\nh1{\r\n    color:blue;\r\n    text-shadow:1px 1px 1px white;\r\n    font-weight:bold;\r\n}\r\np{\r\n    color:#fff;\r\n    font-size:1.5em;\r\n}\r\n.container input[type=\"email\"]{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:9px;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    color:white;\r\n}\r\n.container input[type=\"password\"]{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:9px;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    color:white;\r\n}\r\nbutton{\r\n    border:none;\r\n    padding:10px;\r\n    border-radius:5px;\r\n    background-color:blue;\r\n    margin-top:7px;\r\n    color:blue;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGlDQUF3RDtJQUN4RCxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxVQUFVOztBQUVkIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8wMDA1LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGhlaWdodDo1MDBweDtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG59XHJcbmgxe1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgIHRleHQtc2hhZG93OjFweCAxcHggMXB4IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG5we1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtc2l6ZToxLjVlbTtcclxufVxyXG4uY29udGFpbmVyIGlucHV0W3R5cGU9XCJlbWFpbFwiXXtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbi5jb250YWluZXIgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJde1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Ymx1ZTtcclxuICAgIG1hcmdpbi10b3A6N3B4O1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/product/edit-product/edit-product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/edit-product/edit-product.component.ts ***!
  \****************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditProductComponent = class EditProductComponent {
    constructor() { }
    ngOnInit() {
    }
};
EditProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-product',
        template: __webpack_require__(/*! raw-loader!./edit-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/edit-product/edit-product.component.html"),
        styles: [__webpack_require__(/*! ./edit-product.component.css */ "./src/app/product/edit-product/edit-product.component.css")]
    })
], EditProductComponent);



/***/ }),

/***/ "./src/app/product/product-details/product-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/product/product-details/product-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product-details/product-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-details/product-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductDetailsComponent = class ProductDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: __webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product-details/product-details.component.html"),
        styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product/product-details/product-details.component.css")]
    })
], ProductDetailsComponent);



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");



let ProductComponent = class ProductComponent {
    constructor(product) {
        this.product = product;
    }
    ngOnInit() {
        //get all products under all categories.
        this.product.getAllproducts().subscribe((data) => {
            this.products = data;
            console.log(this.products);
        });
    }
    //delete a product.
    delete(id) {
        this.product.deleteProduct(id).subscribe((data) => {
            this.products = data;
            console.log(this.products);
        });
    }
};
ProductComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
    })
], ProductComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\peggy\Desktop\Peggy\product-catalog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map