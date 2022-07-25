import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../story';


@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http:HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  }); 


  getStory(): Observable<any>{

    console.log('[Data Transaction => Service.Status]')
      return this.http.get<Story>('http://localhost:3000/profile/story',{headers : this.headers, observe: "response"});
  }
  postStatus(newStory: Story){
    console.log('[Service.Status]')
    return this.http.post('http://localhost:3000/profile/status',newStory, {headers : this.headers});
  }
}
