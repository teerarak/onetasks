"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Module
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_1 = require("./app.routing");
var angular_1 = require("nativescript-drop-down/angular");
//service
var product_service_1 = require("./auth/product.service");
var auth_guard_service_1 = require("./auth/auth-guard.service");
//component
var app_component_1 = require("./app.component");
var auth_component_1 = require("./auth/auth.component");
var auth_detail_component_1 = require("./auth/auth-detail.component");
var product_component_1 = require("./auth/product.component");
var user_component_1 = require("./auth/user.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            app_routing_1.AppRoutingModule,
            angular_1.DropDownModule,
            forms_1.NativeScriptFormsModule,
            nativescript_module_1.NativeScriptModule
        ],
        declarations: [
            app_component_1.AppComponent,
            auth_component_1.AuthComponent,
            auth_detail_component_1.AuthDetailComponent,
            product_component_1.ProductsComponent,
            user_component_1.UsersComponent
        ],
        providers: [
            product_service_1.ProductService,
            auth_guard_service_1.AuthGuardService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxRQUFRO0FBQ1Isc0NBQTJEO0FBQzNELGdGQUE4RTtBQUM5RSxvREFBcUU7QUFDckUsNkNBQWlEO0FBQ2pELDBEQUFnRTtBQUdoRSxTQUFTO0FBQ1QsMERBQXdEO0FBQ3hELGdFQUE2RDtBQUc3RCxXQUFXO0FBQ1gsaURBQStDO0FBQy9DLHdEQUFzRDtBQUN0RCxzRUFBbUU7QUFDbkUsOERBQTZEO0FBQzdELHdEQUF1RDtBQTJCdkQsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBekJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsOEJBQWdCO1lBQ2hCLHdCQUFjO1lBQ2QsK0JBQXVCO1lBQ3ZCLHdDQUFrQjtTQUNyQjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1osOEJBQWE7WUFDYiwyQ0FBbUI7WUFDbkIscUNBQWlCO1lBQ2pCLCtCQUFjO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsZ0NBQWM7WUFDZCxxQ0FBZ0I7U0FDbkI7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvL01vZHVsZVxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IERyb3BEb3duTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd24vYW5ndWxhclwiO1xuaW1wb3J0ICogYXMgc2Nyb2xsVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiO1xuXG4vL3NlcnZpY2VcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEF1dGhHdWFyZFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoL2F1dGgtZ3VhcmQuc2VydmljZVwiO1xuXG5cbi8vY29tcG9uZW50XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC9hdXRoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXV0aERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2F1dGgvYXV0aC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9kdWN0c0NvbXBvbmVudCB9IGZyb20gXCIuL2F1dGgvcHJvZHVjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVzZXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC91c2VyLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgRHJvcERvd25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEF1dGhDb21wb25lbnQsXG4gICAgICAgIEF1dGhEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFByb2R1Y3RzQ29tcG9uZW50LFxuICAgICAgICBVc2Vyc0NvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFByb2R1Y3RTZXJ2aWNlLFxuICAgICAgICBBdXRoR3VhcmRTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==