import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";



@Component({
  selector: 'adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

ngOnInit(): void {
}
}
