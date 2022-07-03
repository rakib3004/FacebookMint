import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-navbar',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router:Router) {}

  click = 1;
  loggedIn = 1;

  menuButtonClickEvent() {
    if (this.click == 0) this.click = 1;
    else this.click = 0;
  }

  signin(){
    this.router.navigateByUrl('signin');
  }

  signup(){
    this.router.navigateByUrl('signup');
  }

  signout(){
    this.router.navigate(['signin']);
  }


  ngOnInit(): void {}
}