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
<<<<<<< HEAD
  status_list: any;
  allStatus: Status[] = [];
=======
  status_list: Status[]=[];
  statusArray:any;
>>>>>>> d91df3d7f6203e449181d8e0231ed3ee821b262f
  postStr: string = '';

  ngOnInit(): void {
    //this.status_list = this.statusService.getRawStatus();
    this.getStatus();
    console.log(this.status_list);
  }

  getStatus(){
<<<<<<< HEAD
    this.statusService.getStatus().subscribe((data)=>{
      this.status_list = data.body;
      this.allStatus = this.status_list;
      console.log(JSON.stringify(this.allStatus));
=======
    this.statusService.getStatus().subscribe((data:any)=>{
      console.log('[Data Transaction => Component.Status]')
     this.status_list = data;
>>>>>>> d91df3d7f6203e449181d8e0231ed3ee821b262f
    })
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
