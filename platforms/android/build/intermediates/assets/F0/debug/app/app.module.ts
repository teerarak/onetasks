//Module
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule } from "./app.routing";
import { DropDownModule } from "nativescript-drop-down/angular";
import * as scrollViewModule from "tns-core-modules/ui/scroll-view";

//service
import { ProductService } from "./auth/product.service";
import { AuthGuardService } from "./auth/auth-guard.service";
import { UserService } from "./auth/user.service";

//component
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthDetailComponent } from "./auth/auth-detail.component";
import { ProductsComponent } from "./auth/product.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        DropDownModule,
        NativeScriptFormsModule,
        NativeScriptModule
    ],
    declarations: [
        AppComponent,
        AuthComponent,
        AuthDetailComponent,
        ProductsComponent
    ],
    providers: [
        AuthGuardService,
        ProductService,
        UserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
