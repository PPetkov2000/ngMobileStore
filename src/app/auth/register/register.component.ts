import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  authSubscription: Subscription;
  message: string;
  sameEmailMsg: string;
  diffPasswordsMsg: string;

  constructor(private authService: AuthService, private router: Router) { 
  }
  
  ngOnInit(): void {
    if(this.authService.loggedIn()) {
      this.router.navigate(["/home"]);
    }
  }

  ngOnDestroy(): void {
    if(this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  onSubmit(form: NgForm) {
    this.authSubscription = this.authService.registerUser(form.value).subscribe(response => {
      localStorage.setItem("auth-token", response.token);
      this.router.navigate(["/home"]);
    }, (error) => {
      if(error.error.message === "Email is already taken") {
        this.sameEmailMsg = error.error.message; 
        return;
      }
      if(error.error.message === "Passwords do not match") {
        this.diffPasswordsMsg = error.error.message; 
        return;
      }
      this.message = error.error.message;
      setTimeout(() => {
        this.message = null;
      }, 4000);
    });
  }

}
