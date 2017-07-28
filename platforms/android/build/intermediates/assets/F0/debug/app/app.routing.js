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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFJdkUsZ0VBQTZEO0FBRzdELHdEQUFzRDtBQUN0RCxzRUFBbUU7QUFDbkUsOERBQTZEO0FBRTdELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRSxXQUFXLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQyxFQUFFO0lBQ3RHLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUscUNBQWlCLEVBQUU7Q0FDeEQsQ0FBQztBQVVGLElBQWEsZ0JBQWdCO0lBQTdCO0lBQWdDLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFBakMsSUFBaUM7QUFBcEIsZ0JBQWdCO0lBUjVCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7U0FDM0M7UUFDRCxPQUFPLEVBQUU7WUFDTCxpQ0FBd0I7U0FDM0I7S0FDSixDQUFDO0dBQ1csZ0JBQWdCLENBQUk7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5cbmltcG9ydCB7IEF1dGhHdWFyZFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoL2F1dGgtZ3VhcmQuc2VydmljZVwiO1xuXG5cbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL2F1dGguY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBdXRoRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC9hdXRoLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2R1Y3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC9wcm9kdWN0LmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2F1dGhcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJhdXRoXCIsIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJhdXRoLzpuYW1lLzpjaGVja1wiLCBjb21wb25lbnQ6IEF1dGhDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiYXV0aC1kZXRhaWwvOnVybC86cHJvZHVjdFwiLCBjb21wb25lbnQ6IEF1dGhEZXRhaWxDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkU2VydmljZV0gfSxcbiAgICB7IHBhdGg6IFwicHJvZHVjdC86aWRcIiwgY29tcG9uZW50OiBQcm9kdWN0c0NvbXBvbmVudCB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==