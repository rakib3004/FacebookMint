import { Injectable } from '@angular/core';
import { Status } from '../Classes/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor() {
   }
   status_list: Status[]=[
     {id:1,name:'Tauhidur Rahman',post:'After 4 wonderful years at UMass Amherst, I am joining the Halıcıoğlu Data Science Institute'},
     {id:2,name:'Padmanabha Chowdhury',post:'Do you have a need, a need for speed-y map tile loads? We hope the answer is yes'},
     {id:4,name:'Sartaz Ainan',post:'No matter how bad your day has passed, before you go to bed, pray for those who have made your day a little better. '},
     {id:5,name:'Md. Tazbir Ur Rahman Bhuiyan',post:'Thank you is not enough. I want to build beautiful software which will help people. Before my life ends, May Allah grants me this small wish.'},
     {id:6,name:'Microsoft',post:'Made my way to our Microsoft Dublin office during my recent vacation had a wonderful time exploring and meeting some friendly faces!'},
   ];


   getStatus(): Status[] {
    return this.status_list;
  }

  addStatus(newStatus: Status){
    return this.status_list.push(newStatus);
  }


}
