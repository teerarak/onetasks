import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as dialogs from "ui/dialogs";
@Component({
    selector: "OneApprove-AuthDetail",
    moduleId: module.id,
    templateUrl: "./auth-detail.component.html",
    styleUrls:  ["./auth.component.css"]
})
export class AuthDetailComponent implements OnInit {
    Url = "";
    message = "Sign in to get the most out of your \napp.";
    constructor(private route: ActivatedRoute) { }
  
    ngOnInit(): void {
        this.Url = this.route.snapshot.params["url"] + "." + this.route.snapshot.params["product"];
    }

    login() {
        // User name and password arguments are optional.
        dialogs.login("Your message", "User name label text", "Password label text").then(r => {
            console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
        });
    }
}