import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) :boolean{
    if (localStorage.getItem('access_token')) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}