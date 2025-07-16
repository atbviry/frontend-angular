import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
///voilà les  informations que notre sytéme d'authentication va garder. 
/**
 *  il y'a l'authorisation d'authentification: c'est un booleen true or false
 * il y'a le non de l'utilisateur: c'est une chaine de caractères
 * il y'a les roles de l'utilsateur : c'est tableau de roles
 */
  public authenticated: boolean = false; //pour partage l'autorisation de l'utilsateur, donc je le garde dans le context pour l'envoyer à ceux qui en on besoin
  public username!: any; //pour partage le nom de l'utilisateur authentifié
  public roles!: any;  //pour partage les rôles de l'utilisateur authentifié
  
  router: Router = inject(Router);

  public users:any= {
    'admin':['ADMIN', 'STUDENT'],
    'user1':['STUDENT']
  }


  constructor() { };
  /**Quels sont les scenarios de l'authentifications ?
   *  il y'a  deux scenarios: authentifier ou pas 
   */

  //pour connecter ou pas l'utilisateur 
  // public login(user: User): boolean {
  //   if (user.name === "admin" && user.password === "1234") {
  //     this.authenticated = true;
  //     this.username = user.name;
  //     this.roles = ['ADMIN'];
  //     return true;
  //   }
  //   return false;

  // }


  
  ///protéction par les rôle

  public login(user: User): boolean {
    if (this.users[user.name] && user.password === "1234") {
      this.authenticated = true;
      this.username = user.name;
      this.roles = this.users[user.name];  //il va chercher les roles dans le store users en fonction du nom de l'utilisateur
      return true;
    }
    return false;

  }

  //pour deconnecter l'utilisateur
  logout(): void {
    this.username = undefined;
    this.roles = undefined;

    this.router.navigateByUrl("/login");

  }

}
