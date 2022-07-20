import { Injectable } from '@angular/core';
import { Status } from '../status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor() {
   }
   status: Status[]=[
     
   ];

}
