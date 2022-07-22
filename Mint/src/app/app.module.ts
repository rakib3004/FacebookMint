import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { StatusComponent } from './Components/status/status.component';
import { StoryComponent } from './Components/story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatusComponent,
    SignupComponent,
    LoginComponent,
    StoryComponent
  ],
  imports: [
     BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
