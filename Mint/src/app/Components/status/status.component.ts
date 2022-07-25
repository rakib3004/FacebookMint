import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../Services/status.service';
import { Status } from '../../status';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private statusService: StatusService) { }
  status_list: Status[] = [];
  allStatus: Status[] = [];
  
  postStr: string = '';

  ngOnInit(): void {
    //this.status_list = this.statusService.getRawStatus();
    this.getStatus();
    console.log(this.status_list);
  }

  getStatus(){

  /*  this.statusService.getStatus().subscribe((data:any)=>{
      console.log('[Data Transaction => Component.Status]')
     this.status_list = data;
    })*/
    
  this.status_list=  this.statusService.getRawStatus();
  }
 
  newStatus = new Status();
  postStatus(newStatus: Status) {
    this.newStatus.name="Sadman Sakib";
    //this.statusService.postRawStatus(newStatus);
    console.log(newStatus);
   
    const postDetails = { 
      userName:newStatus.name,
      userPost:newStatus.post
    };
    this.statusService.postStatus(newStatus).subscribe(data=>{
      console.log('New Post!!!');
    },err=>{console.log(err)});
  }


}
