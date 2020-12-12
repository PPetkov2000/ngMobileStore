import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  loading = true;
  data: { users: IUser[], page: number, pages: number };
  message: string;
  getUsersSubscription: Subscription;
  deleteUserSubscription: Subscription;

  constructor(public userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getUsersSubscription = this.route.params.pipe(
      switchMap((params: Params) => {
        const pageNumber = params.pageNumber || "1";
        return this.userService.getUsers(pageNumber);
      })
    ).subscribe((response) => {
      this.loading = false;
      this.data = response;
    });
  }

  ngOnDestroy(): void {
    if(this.getUsersSubscription) {
      this.getUsersSubscription.unsubscribe();
    }
    if(this.deleteUserSubscription) {
      this.deleteUserSubscription.unsubscribe();
    }
  }

  deleteHandler(userId: string): void {
    this.deleteUserSubscription = this.userService.deleteUser(userId).subscribe(response => {
      const currentPage = this.router.url.split("/")[3];
      this.getUsersSubscription = this.userService.getUsers(currentPage).subscribe((data) => this.data = data);
      this.router.navigateByUrl(this.router.url);
      this.message = "User deleted successfully!";
      setTimeout(() => {
        this.message = null;
      }, 4000);
    });
  }

}
