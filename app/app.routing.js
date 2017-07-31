"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_guard_service_1 = require("./auth/auth-guard.service");
var auth_component_1 = require("./auth/auth.component");
var auth_detail_component_1 = require("./auth/auth-detail.component");
var product_component_1 = require("./auth/product.component");
var routes = [
    { path: "", redirectTo: "/auth", pathMatch: "full" },
    { path: "auth", component: auth_component_1.AuthComponent },
    { path: "auth/:name/:check", component: auth_component_1.AuthComponent },
    { path: "auth-detail/:url/:product", component: auth_detail_component_1.AuthDetailComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    { path: "product/:id", component: product_component_1.ProductsComponent },
    { path: "user", component: product_component_1.ProductsComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forRoot(routes)
        ],
        exports: [
            router_1.NativeScriptRouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFJdkUsZ0VBQTZEO0FBRzdELHdEQUFzRDtBQUN0RCxzRUFBbUU7QUFDbkUsOERBQTZEO0FBSTdELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRSxXQUFXLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQyxFQUFFO0lBQ3RHLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUscUNBQWlCLEVBQUU7SUFDckQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxxQ0FBaUIsRUFBRTtDQUNqRCxDQUFDO0FBVUYsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBZ0MsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQixnQkFBZ0I7SUFSNUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUMzQztRQUNELE9BQU8sRUFBRTtZQUNMLGlDQUF3QjtTQUMzQjtLQUNKLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuXHJcbmltcG9ydCB7IEF1dGhHdWFyZFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoL2F1dGgtZ3VhcmQuc2VydmljZVwiO1xyXG5cclxuXHJcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL2F1dGguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEF1dGhEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL2F1dGgtZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0c0NvbXBvbmVudCB9IGZyb20gXCIuL2F1dGgvcHJvZHVjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlcnNDb21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL3VzZXIuY29tcG9uZW50XCI7XHJcblxyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2F1dGhcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxyXG4gICAgeyBwYXRoOiBcImF1dGhcIiwgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiYXV0aC86bmFtZS86Y2hlY2tcIiwgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiYXV0aC1kZXRhaWwvOnVybC86cHJvZHVjdFwiLCBjb21wb25lbnQ6IEF1dGhEZXRhaWxDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkU2VydmljZV0gfSxcclxuICAgIHsgcGF0aDogXCJwcm9kdWN0LzppZFwiLCBjb21wb25lbnQ6IFByb2R1Y3RzQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwidXNlclwiLCBjb21wb25lbnQ6IFByb2R1Y3RzQ29tcG9uZW50IH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==