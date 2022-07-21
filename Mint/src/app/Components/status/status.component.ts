import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../Services/status.service';
import { Status } from '../../Classes/status';

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
    this.status_list = this.statusService.getStatus();
    console.log(this.status_list);
  }

  postStatus() {
    
  }


}
