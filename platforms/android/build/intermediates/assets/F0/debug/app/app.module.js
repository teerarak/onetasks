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
var user_service_1 = require("./auth/user.service");
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
            auth_guard_service_1.AuthGuardService,
            product_service_1.ProductService,
            user_service_1.UserService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxRQUFRO0FBQ1Isc0NBQTJEO0FBQzNELGdGQUE4RTtBQUM5RSxvREFBcUU7QUFDckUsNkNBQWlEO0FBQ2pELDBEQUFnRTtBQUdoRSxTQUFTO0FBQ1QsMERBQXdEO0FBQ3hELGdFQUE2RDtBQUM3RCxvREFBa0Q7QUFFbEQsV0FBVztBQUNYLGlEQUErQztBQUMvQyx3REFBc0Q7QUFDdEQsc0VBQW1FO0FBQ25FLDhEQUE2RDtBQTJCN0QsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBekJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsOEJBQWdCO1lBQ2hCLHdCQUFjO1lBQ2QsK0JBQXVCO1lBQ3ZCLHdDQUFrQjtTQUNyQjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1osOEJBQWE7WUFDYiwyQ0FBbUI7WUFDbkIscUNBQWlCO1NBQ3BCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AscUNBQWdCO1lBQ2hCLGdDQUFjO1lBQ2QsMEJBQVc7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vTW9kdWxlXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgRHJvcERvd25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93bi9hbmd1bGFyXCI7XG5pbXBvcnQgKiBhcyBzY3JvbGxWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3XCI7XG5cbi8vc2VydmljZVxuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoL3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHsgQXV0aEd1YXJkU2VydmljZSB9IGZyb20gXCIuL2F1dGgvYXV0aC1ndWFyZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL2F1dGgvdXNlci5zZXJ2aWNlXCI7XG5cbi8vY29tcG9uZW50XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC9hdXRoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXV0aERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2F1dGgvYXV0aC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9kdWN0c0NvbXBvbmVudCB9IGZyb20gXCIuL2F1dGgvcHJvZHVjdC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIERyb3BEb3duTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBBdXRoQ29tcG9uZW50LFxuICAgICAgICBBdXRoRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBQcm9kdWN0c0NvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEF1dGhHdWFyZFNlcnZpY2UsXG4gICAgICAgIFByb2R1Y3RTZXJ2aWNlLFxuICAgICAgICBVc2VyU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=