import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.route.navigate(['/']);
      return false;
    }
  }

}
