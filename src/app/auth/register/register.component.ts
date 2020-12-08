import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { 
  }
  
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser(form.value).subscribe(response => {
      localStorage.setItem("auth-token", response.token);
      this.router.navigate(["/home"]);
    });

    form.reset();
  }

}
