import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private _http:HttpClient) { }

  localhost="http://localhost:3000"

   status_list: Status[]=[
     {name:'Tauhidur Rahman',post:'After 4 wonderful years at UMass Amherst, I am joining the Halıcıoğlu Data Science Institute'},
     {name:'Padmanabha Chowdhury',post:'Do you have a need, a need for speed-y map tile loads? We hope the answer is yes'},
     {name:'Sartaz Ainan',post:'No matter how bad your day has passed, before you go to bed, pray for those who have made your day a little better. '},
     {name:'Md. Tazbir Ur Rahman Bhuiyan',post:'Thank you is not enough. I want to build beautiful software which will help people. Before my life ends, May Allah grants me this small wish.'},
     {name:'Microsoft',post:'Made my way to our Microsoft Dublin office during my recent vacation had a wonderful time exploring and meeting some friendly faces!'},
   ];

   headers = new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  }); 

   getRawStatus(): Status[] {
    return this.status_list;
  }

  getStatus(): Observable<any>{
    console.log('[Data Transaction => Service.Status]')
      return this._http.get<Status>('http://localhost:3000/profile/status',{headers : this.headers, observe: "response"});
  }
  postStatus(newStatus: Status){
    return this._http.post('http://localhost:3000/profile/status',newStatus, {headers : this.headers});
  }

  postRawStatus(newStatus: Status){
    return this.status_list.push(newStatus);
  }


}
