import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users$: Observable<IUser[]>;
  message: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  deleteHandler(userId: string): void {
    this.userService.deleteUser(userId).subscribe(response => {
      this.users$ = this.userService.getUsers();
      this.message = "User deleted successfully!";
      setTimeout(() => {
        this.message = null;
      }, 4000);
    });
  }

}
