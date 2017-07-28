import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";


import { AuthGuardService } from "./auth/auth-guard.service";


import { AuthComponent } from "./auth/auth.component";
import { AuthDetailComponent } from "./auth/auth-detail.component";
import { ProductsComponent } from "./auth/product.component";
import { UsersComponent } from "./auth/user.component";


const routes: Routes = [
    { path: "", redirectTo: "/auth", pathMatch: "full" },
    { path: "auth", component: AuthComponent },
    { path: "auth/:name/:check", component: AuthComponent },
    { path: "auth-detail/:url/:product", component: AuthDetailComponent, canActivate: [AuthGuardService] },
    { path: "product/:id", component: ProductsComponent },
    { path: "user", component: ProductsComponent },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot(routes)
    ],
    exports: [
        NativeScriptRouterModule
    ]
})
export class AppRoutingModule { }