import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 
  showSucessMessage: boolean = false;
  serverErrorMessages: string = 'false';

  registerForm = this.formBuilder.group({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,Validators.required),
    cpass:new FormControl(null,Validators.required)
  })
  constructor(private _router:Router,private formBuilder:FormBuilder,private userService:UserService) { }

  ngOnInit() {
  }

  moveToLogin(){
    this._router.navigate(['/login']);
  }

  register(){
    
    if((this.registerForm.get('password')?.value != this.registerForm.get('cpass')?.value)){
      this.serverErrorMessages = "Password Mismatched!!!!";
      return;
    }

    this.serverErrorMessages='false';
    this.userService.postUser(this.registerForm.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => {this.showSucessMessage = false; this._router.navigate(['/login'])}, 3000);
        this.registerForm.reset();
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Opps!! Server not Responding. Please contact admin.';
      }
    )
     
  }
}
