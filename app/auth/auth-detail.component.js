"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs = require("ui/dialogs");
var AuthDetailComponent = (function () {
    function AuthDetailComponent(route) {
        this.route = route;
        this.Url = "";
        this.message = "Sign in to get the most out of your \napp.";
    }
    AuthDetailComponent.prototype.ngOnInit = function () {
        this.Url = this.route.snapshot.params["url"] + "." + this.route.snapshot.params["product"];
    };
    AuthDetailComponent.prototype.login = function () {
        // User name and password arguments are optional.
        dialogs.login("Your message", "User name label text", "Password label text").then(function (r) {
            console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
        });
    };
    return AuthDetailComponent;
}());
AuthDetailComponent = __decorate([
    core_1.Component({
        selector: "OneApprove-AuthDetail",
        moduleId: module.id,
        templateUrl: "./auth-detail.component.html",
        styleUrls: ["./auth.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], AuthDetailComponent);
exports.AuthDetailComponent = AuthDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxvQ0FBc0M7QUFPdEMsSUFBYSxtQkFBbUI7SUFHNUIsNkJBQW9CLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRnpDLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxZQUFPLEdBQUcsNENBQTRDLENBQUM7SUFDVixDQUFDO0lBRTlDLHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFFRCxtQ0FBSyxHQUFMO1FBQ0ksaURBQWlEO1FBQ2pELE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRyxDQUFDLHNCQUFzQixDQUFDO0tBQ3ZDLENBQUM7cUNBSTZCLHVCQUFjO0dBSGhDLG1CQUFtQixDQWUvQjtBQWZZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJPbmVBcHByb3ZlLUF1dGhEZXRhaWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2F1dGgtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6ICBbXCIuL2F1dGguY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBVcmwgPSBcIlwiO1xyXG4gICAgbWVzc2FnZSA9IFwiU2lnbiBpbiB0byBnZXQgdGhlIG1vc3Qgb3V0IG9mIHlvdXIgXFxuYXBwLlwiO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxyXG4gIFxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5VcmwgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcInVybFwiXSArIFwiLlwiICsgdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJwcm9kdWN0XCJdO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIC8vIFVzZXIgbmFtZSBhbmQgcGFzc3dvcmQgYXJndW1lbnRzIGFyZSBvcHRpb25hbC5cclxuICAgICAgICBkaWFsb2dzLmxvZ2luKFwiWW91ciBtZXNzYWdlXCIsIFwiVXNlciBuYW1lIGxhYmVsIHRleHRcIiwgXCJQYXNzd29yZCBsYWJlbCB0ZXh0XCIpLnRoZW4ociA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByLnJlc3VsdCArIFwiLCB1c2VyOiBcIiArIHIudXNlck5hbWUgKyBcIiwgcHdkOiBcIiArIHIucGFzc3dvcmQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19