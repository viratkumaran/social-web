import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service'
@Injectable({
  providedIn: 'root'
})
export class GuardActivateGuard implements CanActivate {
  constructor(
    public AuthService:AuthService,
    public router:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  | Promise<boolean> |  boolean  {
      if(this.AuthService.isLoggedIn()!==true){
        window.alert("Access not allowed!");
         this.router.navigate(['/login'])
      }
    return true;
  }
  
}
