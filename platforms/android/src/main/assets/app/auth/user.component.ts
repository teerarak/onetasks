import { Component, OnInit } from "@angular/core";
import { ListPicker } from "ui/list-picker";

import { user } from "./user";
import { UserService } from "./user.service";

@Component({
    selector: "OneApprove-user",
    moduleId: module.id,
    templateUrl: "./user.component.html"
})
export class UsersComponent implements OnInit {

    constructor(
        
    ) { }
    ngOnInit(): void {
    }
}