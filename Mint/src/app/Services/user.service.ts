import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private _http:HttpClient) { }

  postUser(user:any){
    return this._http.post(environment.url+'/register',user,this.noAuthHeader);
  }

  login(authCredentials:any) {
    return this._http.post(environment.url + '/authenticate', authCredentials, this.noAuthHeader);
  }

  getUserProfile() {
    return this._http.get(environment.url + '/userProfile');
  }


  //Helper Methods

  setToken(token: any) {
    localStorage.setItem('token', token);
  }

 

  getCurrentUser(){
    return localStorage.getItem('curentUser');
  }

  

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }


  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn(){
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
