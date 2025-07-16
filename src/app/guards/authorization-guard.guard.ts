import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  authentificationService: AuthentificationService = inject(AuthentificationService);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {

    let authorize: boolean = false;
    let authorizedRoles: any[] = this.authentificationService.roles;

    //ça bloque le systeme à cause de type du tableau authorizedRoles: any[] car la boucle attend un string
    // for (let role of authorizaedRoles) {
    //   if (role in protecteddRoles) {
    //     authorize = true
    //   }
    // }

//bonne solution
    // let protectedRoles: string[] = route.data['roles'];
    // for (let i = 0; i < authorizedRoles.length; i++) {
    //   if (protectedRoles.includes(authorizedRoles[i])) {
    //     authorize = true;
    //   }
    // }

    //ou tout court

    if (authorizedRoles.includes("ADMIN")) {
      authorize = true;
    }
    return authorize;

  }

}