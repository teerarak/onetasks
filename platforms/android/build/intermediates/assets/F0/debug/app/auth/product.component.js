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
        console.log(args.index);
        console.log("id = " + this.id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwwQ0FBaUQ7QUFJakQscURBQW1EO0FBUW5ELElBQWEsaUJBQWlCO0lBRzFCLDJCQUFvQixXQUEyQixFQUFVLEtBQXFCO1FBQTFELGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRjlFLE9BQUUsR0FBRyxDQUFDLENBQUM7SUFFMkUsQ0FBQztJQUNuRixvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCwyQ0FBZSxHQUFmLFVBQWdCLElBQXVCO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDdEMsQ0FBQztxQ0FJbUMsZ0NBQWMsRUFBaUIsdUJBQWM7R0FIckUsaUJBQWlCLENBYzdCO0FBZFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ1aS9saXN0LXBpY2tlclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTZXR1cEl0ZW1WaWV3QXJncyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vcHJvZHVjdFwiO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwiLi9wcm9kdWN0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiT25lQXBwcm92ZS1wcm9kdWN0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb2R1Y3QuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vYXV0aC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpZCA9IDA7XG4gICAgcHJvZHVjdHM6IFByb2R1Y3RbXTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1Qcm9kdWN0OiBQcm9kdWN0U2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5pdGVtUHJvZHVjdC5nZXRQcm9kdWN0cygpO1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcbiAgICB9XG5cbiAgICBvblNldHVwSXRlbVZpZXcoYXJnczogU2V0dXBJdGVtVmlld0FyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcmdzLmluZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlkID0gXCIgKyB0aGlzLmlkKTtcclxuICAgICAgICBhcmdzLnZpZXcuY29udGV4dC5zZWxlY3QgPSAoYXJncy5pbmRleCArIDEgPT0gdGhpcy5pZCk7XHJcbiAgICB9XG59Il19