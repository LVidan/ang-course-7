import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/i-user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  allUsers: IUser[] = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe"
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Demo Doe"
    },
    {
      id: 3,
      firstName: "Philip",
      lastName: "Demo"
    }
  ];

  clickedUser: string = 'Alo';
}
