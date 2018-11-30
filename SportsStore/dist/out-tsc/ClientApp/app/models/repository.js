"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var productsUrl = "/api/products";
var Repository = /** @class */ (function () {
    function Repository(http) {
        this.http = http;
        this.getProduct(1);
    }
    Repository.prototype.getProduct = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, productsUrl + "/" + id)
            .subscribe(function (response) { _this.productData = response; });
    };
    Repository.prototype.sendRequest = function (verb, url, data) {
        return this.http.request(new http_1.Request({
            method: verb, url: url, body: data
        })).map(function (response) { return response.json(); });
    };
    Object.defineProperty(Repository.prototype, "product", {
        get: function () {
            console.log("Product Data Requested");
            return this.productData;
        },
        enumerable: true,
        configurable: true
    });
    Repository = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], Repository);
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map