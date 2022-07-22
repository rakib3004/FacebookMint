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
  status_list: Status[]=[];
  postStr: string = '';

  ngOnInit(): void {
    this.status_list = this.statusService.getRawStatus();
    console.log(this.status_list);
  }

  
  newStatus = new Status();
  postStatus(newStatus: Status) {
    this.newStatus.name="Sadman Sakib";
    this.statusService.postRawStatus(newStatus);
    console.log(newStatus);
   
    const postDetails = { 
      userName:newStatus.name,
      userPost:newStatus.post
    };
    this.statusService.postStatus(newStatus).subscribe(data=>{
      //alert('New Post!!!');
    },err=>{console.log(err)});
  }


}
