import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {

  users : User[];
  constructor (private userService : UserService){}
  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    })
  }



}
