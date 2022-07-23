import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

    // Inject service 
    constructor() { }
  
    ngOnInit(): void {
    }
  addYourStory(){
    alert("Your Stroy");
  }
   

}
