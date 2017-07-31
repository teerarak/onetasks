import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as dialogs from "ui/dialogs";

import { AuthGuardService } from './auth-guard.service';
import { UserService } from "./user.service";
import { user } from "./user";

@Component({
    selector: "OneApprove-Auth",
    moduleId: module.id,
    templateUrl: "./auth.component.html",
    styleUrls:  ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
    product = "on.lk";
    id = 1;
    cssClass: string = "default";
    Url = "";
    USERS: user[];
    constructor (
        private route: ActivatedRoute,
        private authGuardService: AuthGuardService,
        private user: UserService
    ) { }

    ngOnInit (): void {
        if (this.route.snapshot.params["check"] > 0) {
            this.id = this.route.snapshot.params["check"];
            this.product = this.route.snapshot.params["name"];
        }
    }
    login() {
        if (this.Url + "." + this.product == "fluke.on.lk") {
            this.authGuardService.isLoggedIn = !this.authGuardService.isLoggedIn
        }
        this.USERS = this.user.getUsers();
    }
}
