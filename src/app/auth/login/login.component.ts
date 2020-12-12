import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  authSubscription: Subscription;
  navigateUrl: string;
  message: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.authService.loggedIn()) {
      this.router.navigate(["/home"]);
    }
    this.navigateUrl = this.route.snapshot.queryParams.previousUrl || "/home";
  }

  ngOnDestroy(): void {
    if(this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  onSubmit(form: NgForm) {
    this.authSubscription = this.authService.loginUser(form.value).subscribe(response => {
      localStorage.setItem("auth-token", response.token);
      this.router.navigateByUrl(this.navigateUrl);
    }, (error) => {
      this.message = error.error.message;
      setTimeout(() => {
        this.message = null;
      }, 4000);
    });
  }

}
