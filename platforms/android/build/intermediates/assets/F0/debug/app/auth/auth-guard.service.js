"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs = require("ui/dialogs");
var AuthGuardService = (function () {
    function AuthGuardService(router) {
        this.router = router;
        this.isLoggedIn = false;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        // ... your login logic here
        if (this.isLoggedIn) {
            return true;
        }
        else {
            dialogs.alert("ไม่ถูกต้อง!");
            return false;
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthGuardService);
exports.AuthGuardService = AuthGuardService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDBDQUFpRztBQUVqRyxvQ0FBc0M7QUFHdEMsSUFBYSxnQkFBZ0I7SUFFM0IsMEJBQ1UsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFdEIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQURsQixDQUFDO0lBRUosc0NBQVcsR0FBWCxVQUFZLEtBQTZCLEVBQUUsS0FBMEI7UUFDbEUsNEJBQTRCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztJQUVILHVCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtxQ0FJTyxlQUFNO0dBSGIsZ0JBQWdCLENBZ0I1QjtBQWhCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2FuQWN0aXZhdGUsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZFNlcnZpY2UgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG4gICkge31cclxuICAgIGlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcclxuICAgICAvLyAuLi4geW91ciBsb2dpbiBsb2dpYyBoZXJlXHJcbiAgICBpZiAodGhpcy5pc0xvZ2dlZEluKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KFwi4LmE4Lih4LmI4LiW4Li54LiB4LiV4LmJ4Lit4LiHIVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iXX0=