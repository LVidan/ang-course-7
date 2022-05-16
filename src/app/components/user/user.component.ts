import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

  @Input() user: any;
  clickedUser: string;


  checkUser(): void {
    console.log(this.user.firstName);
    // this.clickedUser = this.user.firstName;

    // if (this.clickedUser === this.user.firstName) {
    //   this.clickedUser = "/";
    // } else if (this.clickedUser === "/") {
    //   console.log('VEC SI STISNUO NA TO IME');
    // } else {
    //   this.clickedUser = this.user.firstName;
    // }
  }
}
