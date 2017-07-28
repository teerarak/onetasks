"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var ProductsComponent = (function () {
    function ProductsComponent(itemProduct, route) {
        this.itemProduct = itemProduct;
        this.route = route;
        this.id = 0;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.products = this.itemProduct.getProducts();
        this.id = this.route.snapshot.params["id"];
    };
    ProductsComponent.prototype.onSetupItemView = function (args) {
        args.view.context.select = (args.index + 1 == this.id);
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        selector: "OneApprove-product",
        moduleId: module.id,
        templateUrl: "./product.component.html",
        styleUrls: ["./auth.component.css"]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, router_1.ActivatedRoute])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwwQ0FBaUQ7QUFJakQscURBQW1EO0FBUW5ELElBQWEsaUJBQWlCO0lBRzFCLDJCQUFvQixXQUEyQixFQUFVLEtBQXFCO1FBQTFELGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRjlFLE9BQUUsR0FBRyxDQUFDLENBQUM7SUFFMkUsQ0FBQztJQUNuRixvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCwyQ0FBZSxHQUFmLFVBQWdCLElBQXVCO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUN0QyxDQUFDO3FDQUltQyxnQ0FBYyxFQUFpQix1QkFBYztHQUhyRSxpQkFBaUIsQ0FZN0I7QUFaWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidWkvbGlzdC1waWNrZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNldHVwSXRlbVZpZXdBcmdzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gXCIuL3Byb2R1Y3Quc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJPbmVBcHByb3ZlLXByb2R1Y3RcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb2R1Y3QuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9hdXRoLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGlkID0gMDtcclxuICAgIHByb2R1Y3RzOiBQcm9kdWN0W107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1Qcm9kdWN0OiBQcm9kdWN0U2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHRoaXMuaXRlbVByb2R1Y3QuZ2V0UHJvZHVjdHMoKTtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcclxuICAgIH1cclxuXHJcbiAgICBvblNldHVwSXRlbVZpZXcoYXJnczogU2V0dXBJdGVtVmlld0FyZ3MpIHtcclxuICAgICAgICBhcmdzLnZpZXcuY29udGV4dC5zZWxlY3QgPSAoYXJncy5pbmRleCArIDEgPT0gdGhpcy5pZCk7XHJcbiAgICB9XHJcbn0iXX0=