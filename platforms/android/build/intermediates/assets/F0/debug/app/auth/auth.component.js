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
        }
        this.USERS = this.user.getUsers();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsMkRBQXdEO0FBQ3hELCtDQUE2QztBQVM3QyxJQUFhLGFBQWE7SUFNdEIsdUJBQ1ksS0FBcUIsRUFDckIsZ0JBQWtDLEVBQ2xDLElBQWlCO1FBRmpCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQVI3QixZQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ2xCLE9BQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxhQUFRLEdBQVcsU0FBUyxDQUFDO1FBQzdCLFFBQUcsR0FBRyxFQUFFLENBQUM7SUFNTCxDQUFDO0lBRUwsZ0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELENBQUM7SUFDTCxDQUFDO0lBQ0QsNkJBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQTtRQUN4RSxDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4QlksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUcsQ0FBQyxzQkFBc0IsQ0FBQztLQUN2QyxDQUFDO3FDQVFxQix1QkFBYztRQUNILHFDQUFnQjtRQUM1QiwwQkFBVztHQVRwQixhQUFhLENBd0J6QjtBQXhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbmltcG9ydCB7IEF1dGhHdWFyZFNlcnZpY2UgfSBmcm9tICcuL2F1dGgtZ3VhcmQuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIk9uZUFwcHJvdmUtQXV0aFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXV0aC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiAgW1wiLi9hdXRoLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJvZHVjdCA9IFwib24ubGtcIjtcclxuICAgIGlkID0gMTtcclxuICAgIGNzc0NsYXNzOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcclxuICAgIFVybCA9IFwiXCI7XHJcbiAgICBVU0VSUzogdXNlcltdO1xyXG4gICAgY29uc3RydWN0b3IgKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aEd1YXJkU2VydmljZTogQXV0aEd1YXJkU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHVzZXI6IFVzZXJTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0ICgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJjaGVja1wiXSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiY2hlY2tcIl07XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wibmFtZVwiXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICBpZiAodGhpcy5VcmwgKyBcIi5cIiArIHRoaXMucHJvZHVjdCA9PSBcImZsdWtlLm9uLmxrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoR3VhcmRTZXJ2aWNlLmlzTG9nZ2VkSW4gPSAhdGhpcy5hdXRoR3VhcmRTZXJ2aWNlLmlzTG9nZ2VkSW5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5VU0VSUyA9IHRoaXMudXNlci5nZXRVc2VycygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==