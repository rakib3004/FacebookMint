import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/Services/file-upload.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

    // Inject service 
    constructor(private fileUploadService: FileUploadService) { }
  
    ngOnInit(): void {
    }
  addYourStory(){
    alert("Your Stroy");
  }
   

}
