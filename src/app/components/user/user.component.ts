import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() user: any;
  @Output() userClicked: EventEmitter<any> = new EventEmitter();


  getUser(user: any): void {
    this.userClicked.emit(user);
  }
}
