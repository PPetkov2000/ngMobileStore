import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.authService.loginUser(form.value).subscribe(response => {
      console.log(response);
      localStorage.setItem("auth-token", response.token);
      this.router.navigate(["/home"]);
    });

    form.reset();
  }

}
