import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user$: Observable<IUser>;
  id: string;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.user$ = this.route.params.pipe(
      switchMap((params: Params) => {
        this.id = params.id;
        return this.userService.getUserById(params.id);
      })
    )
  }

  editHandler(formData: IUser): void {
    this.userService.updateUser({ _id: this.id, ...formData }).subscribe(response => {
      this.router.navigateByUrl("/admin/userlist");
    });
  }

}
