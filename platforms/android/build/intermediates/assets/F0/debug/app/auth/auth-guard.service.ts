import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

import * as dialogs from "ui/dialogs";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router
  ) {}
    isLoggedIn = false;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     // ... your login logic here
    if (this.isLoggedIn) {
      return true;
    } else {
        dialogs.alert("ไม่ถูกต้อง!");
      return false;
    }
  }

}