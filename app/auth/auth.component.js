"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_service_1 = require("./auth-guard.service");
var user_service_1 = require("./user.service");
var AuthComponent = (function () {
    function AuthComponent(route, authGuardService, user) {
        this.route = route;
        this.authGuardService = authGuardService;
        this.user = user;
        this.product = "on.lk";
        this.id = 1;
        this.cssClass = "default";
        this.Url = "";
    }
    AuthComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.params["check"] > 0) {
            this.id = this.route.snapshot.params["check"];
            this.product = this.route.snapshot.params["name"];
        }
    };
    AuthComponent.prototype.login = function () {
        if (this.Url + "." + this.product == "fluke.on.lk") {
            this.authGuardService.isLoggedIn = !this.authGuardService.isLoggedIn;
            console.log(this.Url + " . " + this.product + " " + this.authGuardService.isLoggedIn);
        }
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    core_1.Component({
        selector: "OneApprove-Auth",
        moduleId: module.id,
        templateUrl: "./auth.component.html",
        styleUrls: ["./auth.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        auth_guard_service_1.AuthGuardService,
        user_service_1.UserService])
], AuthComponent);
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsMkRBQXdEO0FBQ3hELCtDQUE2QztBQVE3QyxJQUFhLGFBQWE7SUFLdEIsdUJBQ1ksS0FBcUIsRUFDckIsZ0JBQWtDLEVBQ2xDLElBQWlCO1FBRmpCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQVA3QixZQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ2xCLE9BQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxhQUFRLEdBQVcsU0FBUyxDQUFDO1FBQzdCLFFBQUcsR0FBRyxFQUFFLENBQUM7SUFLTCxDQUFDO0lBRUwsZ0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELENBQUM7SUFDTCxDQUFDO0lBQ0QsNkJBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQTtZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRixDQUFDO0lBRUwsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRyxDQUFDLHNCQUFzQixDQUFDO0tBQ3ZDLENBQUM7cUNBT3FCLHVCQUFjO1FBQ0gscUNBQWdCO1FBQzVCLDBCQUFXO0dBUnBCLGFBQWEsQ0F3QnpCO0FBeEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuaW1wb3J0IHsgQXV0aEd1YXJkU2VydmljZSB9IGZyb20gJy4vYXV0aC1ndWFyZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIk9uZUFwcHJvdmUtQXV0aFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXV0aC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiAgW1wiLi9hdXRoLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJvZHVjdCA9IFwib24ubGtcIjtcclxuICAgIGlkID0gMTtcclxuICAgIGNzc0NsYXNzOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcclxuICAgIFVybCA9IFwiXCI7XHJcbiAgICBjb25zdHJ1Y3RvciAoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBhdXRoR3VhcmRTZXJ2aWNlOiBBdXRoR3VhcmRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgdXNlcjogVXNlclNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQgKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImNoZWNrXCJdID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJjaGVja1wiXTtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJuYW1lXCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLlVybCArIFwiLlwiICsgdGhpcy5wcm9kdWN0ID09IFwiZmx1a2Uub24ubGtcIikge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhHdWFyZFNlcnZpY2UuaXNMb2dnZWRJbiA9ICF0aGlzLmF1dGhHdWFyZFNlcnZpY2UuaXNMb2dnZWRJblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLlVybCArIFwiIC4gXCIgKyB0aGlzLnByb2R1Y3QgKyBcIiBcIiArIHRoaXMuYXV0aEd1YXJkU2VydmljZS5pc0xvZ2dlZEluKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19