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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFJdkUsZ0VBQTZEO0FBRzdELHdEQUFzRDtBQUN0RCxzRUFBbUU7QUFDbkUsOERBQTZEO0FBSTdELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRSxXQUFXLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQyxFQUFFO0lBQ3RHLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUscUNBQWlCLEVBQUU7SUFDckQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxxQ0FBaUIsRUFBRTtDQUNqRCxDQUFDO0FBVUYsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBZ0MsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQixnQkFBZ0I7SUFSNUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUMzQztRQUNELE9BQU8sRUFBRTtZQUNMLGlDQUF3QjtTQUMzQjtLQUNKLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cblxuaW1wb3J0IHsgQXV0aEd1YXJkU2VydmljZSB9IGZyb20gXCIuL2F1dGgvYXV0aC1ndWFyZC5zZXJ2aWNlXCI7XG5cblxuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gXCIuL2F1dGgvYXV0aC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL2F1dGgtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvZHVjdHNDb21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL3Byb2R1Y3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBVc2Vyc0NvbXBvbmVudCB9IGZyb20gXCIuL2F1dGgvdXNlci5jb21wb25lbnRcIjtcblxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2F1dGhcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJhdXRoXCIsIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJhdXRoLzpuYW1lLzpjaGVja1wiLCBjb21wb25lbnQ6IEF1dGhDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiYXV0aC1kZXRhaWwvOnVybC86cHJvZHVjdFwiLCBjb21wb25lbnQ6IEF1dGhEZXRhaWxDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkU2VydmljZV0gfSxcbiAgICB7IHBhdGg6IFwicHJvZHVjdC86aWRcIiwgY29tcG9uZW50OiBQcm9kdWN0c0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJ1c2VyXCIsIGNvbXBvbmVudDogUHJvZHVjdHNDb21wb25lbnQgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=