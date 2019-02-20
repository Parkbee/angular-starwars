import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  
  constructor(protected router: Router) {    
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.isAuthenticated();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.isAuthenticated(route);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.isAuthenticated(childRoute);
  }

  protected isAuthenticated(route?: ActivatedRouteSnapshot) {
    let allowedUserType = true;
    let loggedInUserType = "dark-side"

    let expectedRole: string;
    if (route) {
      expectedRole = route.data.expectedRole;

      if (expectedRole) {
        allowedUserType = loggedInUserType === expectedRole;
      }
    }

    if (!allowedUserType) {
      return false;
    }

    return true;
  }
}