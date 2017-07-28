"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var UsersComponent = (function () {
    function UsersComponent(user) {
        this.user = user;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.USERS = this.user.getUsers();
        console.log(this.USERS);
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: "OneApprove-user",
        moduleId: module.id,
        templateUrl: "./user.component.html"
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUlsRCwrQ0FBNkM7QUFPN0MsSUFBYSxjQUFjO0lBRXZCLHdCQUNZLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFDekIsQ0FBQztJQUNMLGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO0tBQ3ZDLENBQUM7cUNBSW9CLDBCQUFXO0dBSHBCLGNBQWMsQ0FTMUI7QUFUWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ1aS9saXN0LXBpY2tlclwiO1xyXG5cclxuaW1wb3J0IHsgdXNlciB9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiT25lQXBwcm92ZS11c2VyXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi91c2VyLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIFVTRVJTOiB1c2VyW107XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHVzZXI6IFVzZXJTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5VU0VSUyA9IHRoaXMudXNlci5nZXRVc2VycygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuVVNFUlMpO1xyXG4gICAgfVxyXG59Il19