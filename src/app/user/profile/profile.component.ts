import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: IUser;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserById("profile")
      .subscribe(
        response => {
          console.log(response);
          this.user = response;
        }, error => {
          if(error instanceof HttpErrorResponse) {
            if(error.status === 401) {
              this.router.navigate(["/auth/login"]);
            }
          }
        }
      );
  }

  onSubmit(form: NgForm) {
    this.userService.updateUserProfile(form.value).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }


}
