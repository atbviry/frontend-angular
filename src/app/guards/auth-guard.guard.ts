import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Injectable()
export class AuthGuard implements CanActivate {
  authentificationService: AuthentificationService = inject(AuthentificationService);
  router: Router = inject(Router);

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
  //   // if (this.authentificationService.authenticated) {
  //   //   return true;
  //   // } else
  //     return this.authentificationService.authenticated ? true:false;
  // }
 // les cas de false ça me rammème une page blanche normalement ça doit me ramméner vers la page de login
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.authentificationService.authenticated) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
    }
    return false;

  }

}
