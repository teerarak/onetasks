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
            product_component_1.ProductsComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxRQUFRO0FBQ1Isc0NBQTJEO0FBQzNELGdGQUE4RTtBQUM5RSxvREFBcUU7QUFDckUsNkNBQWlEO0FBQ2pELDBEQUFnRTtBQUdoRSxTQUFTO0FBQ1QsMERBQXdEO0FBQ3hELGdFQUE2RDtBQUc3RCxXQUFXO0FBQ1gsaURBQStDO0FBQy9DLHdEQUFzRDtBQUN0RCxzRUFBbUU7QUFDbkUsOERBQTZEO0FBMkI3RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUF4QnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCw4QkFBZ0I7WUFDaEIsd0JBQWM7WUFDZCwrQkFBdUI7WUFDdkIsd0NBQWtCO1NBQ3JCO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWiw4QkFBYTtZQUNiLDJDQUFtQjtZQUNuQixxQ0FBaUI7U0FDcEI7UUFDRCxTQUFTLEVBQUU7WUFDUCxnQ0FBYztZQUNkLHFDQUFnQjtTQUNuQjtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vTW9kdWxlXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgRHJvcERvd25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93bi9hbmd1bGFyXCI7XG5pbXBvcnQgKiBhcyBzY3JvbGxWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3XCI7XG5cbi8vc2VydmljZVxuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoL3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHsgQXV0aEd1YXJkU2VydmljZSB9IGZyb20gXCIuL2F1dGgvYXV0aC1ndWFyZC5zZXJ2aWNlXCI7XG5cblxuLy9jb21wb25lbnRcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL2F1dGguY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBdXRoRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC9hdXRoLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2R1Y3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC9wcm9kdWN0LmNvbXBvbmVudFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBEcm9wRG93bk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgQXV0aENvbXBvbmVudCxcbiAgICAgICAgQXV0aERldGFpbENvbXBvbmVudCxcbiAgICAgICAgUHJvZHVjdHNDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBQcm9kdWN0U2VydmljZSxcbiAgICAgICAgQXV0aEd1YXJkU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=