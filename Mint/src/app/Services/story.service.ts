import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Story } from '../story';


@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http:HttpClient) { }

  




  saveStory(postDetails:any){
    return this.http.post(environment.url+'/story',postDetails);
  }
  
  getStories(currentUser:any){
    return this.http.get(environment.url+'/story'+currentUser);
  }
}
