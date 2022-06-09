import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: any;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
