import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { LocalStorageService } from './local-storage.service';

const BASE_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';
let headers = new HttpHeaders({
  'Content-Type':'application/json',
  'Accept':'application/json'
});

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private localStorage: LocalStorageService, private router: Router) { };

  createUser(user) {
    return this.http.post(BASE_URL + '/users', { ...user }, { headers });
  };

  loginUser(user) {
    return this.http.post(BASE_URL + '/users/sessions', { ...user }, { headers }).subscribe(response => {
        this.localStorage.setValue("access_token", response["access_token"]);
        this.router.navigate(['books']);
      });
  };

  logoutUser() {
    return this.localStorage.clearStorage();
  };

  loggedIn() {
    return !!this.localStorage.getValue("access_token");
  };

  getToken() {
    return this.localStorage.getValue("access_token");
  };

};
