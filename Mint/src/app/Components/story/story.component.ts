import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StatusService } from 'src/app/Services/status.service';
import { StoryService } from 'src/app/Services/story.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  serverErrorMessages: string = 'false';
  storyImageBaseUrl = "http://127.0.0.1:9000/story/";
  currentUserEmail:any;
  allPosts:any;
  createStoryClicked = 0;
  imageFile: File | null = null;
  allStories:any;
  userDetails: any;
  postDetails ={
    email :'',
    text:''
  };

  constructor(private userService: UserService, private router: Router, 
    private statusService: StatusService, private storyService:StoryService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  //getCurrentUserProfile
  getCurrentUser(){
    this.userService.getUserProfile().subscribe(
      (res:any) => {
        this.userDetails = res['user'];
        this.currentUserEmail = this.userDetails.email;
        this.getStories();
      },
      err => { 
        this.serverErrorMessages = err.error.message;
      }
    );
  }


  
  //get all stories
  getStories(){
    this.storyService.getStories(this.currentUserEmail).subscribe(
      (res:any) =>{
        this.allStories = res;
        //change story url 
        this.allStories.forEach((story:any) => {
          story.storyUUID = this.storyImageBaseUrl+story.storyUUID;
        });
    },
    err => {
      this.serverErrorMessages = err.error.message;
    }
    );
  }

 

  changeStoryClicked(){
    this.createStoryClicked = 1;
  }


  saveStory(event: any) {
    this.createStoryClicked = 0;
    this.imageFile = event.target.files[0];
    if (this.imageFile) {
      console.log('Image at Component.ts')
      var imageDetails = new FormData();
      imageDetails.append('files', this.imageFile, this.imageFile.name);
      imageDetails.append('email', this.currentUserEmail);

      this.storyService.saveStory(imageDetails).subscribe(
        (res:any) => {
        if(res) { alert("Story Posted Successfully");this.getStories();}
      },err=>{
        this.serverErrorMessages = err.error.message;
      })
    }
  
  }

  Logout(){
    this.userService.deleteToken();
    this.router.navigate(['']);
  }

}
