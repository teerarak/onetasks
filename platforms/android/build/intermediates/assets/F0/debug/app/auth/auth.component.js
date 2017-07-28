"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_service_1 = require("./auth-guard.service");
var AuthComponent = (function () {
    function AuthComponent(route, authGuardService) {
        this.route = route;
        this.authGuardService = authGuardService;
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
        //this.user.getUsers().forEach(function (element) {
        //    console.log(element);
        //});
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
        auth_guard_service_1.AuthGuardService])
], AuthComponent);
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsMkRBQXdEO0FBUXhELElBQWEsYUFBYTtJQUt0Qix1QkFDWSxLQUFxQixFQUNyQixnQkFBa0M7UUFEbEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU45QyxZQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ2xCLE9BQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxhQUFRLEdBQVcsU0FBUyxDQUFDO1FBQzdCLFFBQUcsR0FBRyxFQUFFLENBQUM7SUFJTCxDQUFDO0lBRUwsZ0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELENBQUM7SUFDTCxDQUFDO0lBQ0QsNkJBQUssR0FBTDtRQUNJLG1EQUFtRDtRQUNuRCwyQkFBMkI7UUFDM0IsS0FBSztRQUNMLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQTtZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRixDQUFDO0lBRUwsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRyxDQUFDLHNCQUFzQixDQUFDO0tBQ3ZDLENBQUM7cUNBT3FCLHVCQUFjO1FBQ0gscUNBQWdCO0dBUHJDLGFBQWEsQ0EwQnpCO0FBMUJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuaW1wb3J0IHsgQXV0aEd1YXJkU2VydmljZSB9IGZyb20gJy4vYXV0aC1ndWFyZC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiT25lQXBwcm92ZS1BdXRoXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hdXRoLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6ICBbXCIuL2F1dGguY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcm9kdWN0ID0gXCJvbi5sa1wiO1xyXG4gICAgaWQgPSAxO1xyXG4gICAgY3NzQ2xhc3M6IHN0cmluZyA9IFwiZGVmYXVsdFwiO1xyXG4gICAgVXJsID0gXCJcIjtcclxuICAgIGNvbnN0cnVjdG9yIChcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIGF1dGhHdWFyZFNlcnZpY2U6IEF1dGhHdWFyZFNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQgKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImNoZWNrXCJdID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJjaGVja1wiXTtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJuYW1lXCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIC8vdGhpcy51c2VyLmdldFVzZXJzKCkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgICAgIC8vfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuVXJsICsgXCIuXCIgKyB0aGlzLnByb2R1Y3QgPT0gXCJmbHVrZS5vbi5sa1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aEd1YXJkU2VydmljZS5pc0xvZ2dlZEluID0gIXRoaXMuYXV0aEd1YXJkU2VydmljZS5pc0xvZ2dlZEluXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuVXJsICsgXCIgLiBcIiArIHRoaXMucHJvZHVjdCArIFwiIFwiICsgdGhpcy5hdXRoR3VhcmRTZXJ2aWNlLmlzTG9nZ2VkSW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=