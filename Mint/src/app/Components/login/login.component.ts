import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  serverErrorMessages: string = 'false';

  loginForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null, Validators.required)
  });
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('');
  }

  signup(){
    this.router.navigate(['/signup']);
  }
  

  login(){
    this.userService.login(this.loginForm.value).subscribe(
      (res:any) => {
        //this.userService.setCurrentUser(res['currentUser']);
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/home');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );

    }
}