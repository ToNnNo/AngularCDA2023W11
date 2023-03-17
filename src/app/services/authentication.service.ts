import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private static readonly TOKEN = 'token';

  authenticate = new BehaviorSubject<boolean>(this.isAuthenticate());
  // behaviorSubject<T>(default value);

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  public login(username?:string, password?:string): void {
    // récupère username/password
    // Requête HTTP vers API (POST)
    //      --> En réponse le serveur renvoie jeton de connexion (JWT = JSON Web Token)

    localStorage.setItem(AuthenticationService.TOKEN, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    this.authenticate.next(true);

    // snapshot => utilise les données de route sans observable
    // queryParamMap => lit les paramètres de requête ( ..../mapage?page=1)
    if( this.route.snapshot.queryParamMap.has('redirect') ) {
      this.router.navigateByUrl( this.route.snapshot.queryParamMap.get('redirect')! );
    }

  }

  public logout(): void {
    localStorage.removeItem(AuthenticationService.TOKEN);
    this.authenticate.next(false);
    this.router.navigateByUrl('/');
  }

  public isAuthenticate(): boolean {
    return localStorage.getItem(AuthenticationService.TOKEN) != null;
  }

  public getToken(): string|null {
    return localStorage.getItem(AuthenticationService.TOKEN);
  }

}
