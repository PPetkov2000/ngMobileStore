import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { 
  }
  
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.userService.registerUser(form.value).subscribe(response => {
      console.log(response);
      localStorage.setItem("auth-token", response.token);
      this.router.navigate(["/home"]);
    });

    form.reset();
  }

}
