import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class AuthService {

  constructor() { }

  public isLogged = false;
public isLoggedSubject :Subject<boolean> = new Subject<boolean>();



  logIn() {
    this.isLogged = true;
    this.isLoggedSubject.next(this.isLogged)
  }
  logOut() {
    this.isLogged = false;
    this.isLoggedSubject.next(this.isLogged)
  }

  getToken() {
    return 'test';
  }

  isLoggedIn():boolean {
    return this.isLogged;
  }
}
