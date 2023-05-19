import {Component, OnInit} from '@angular/core';
import {Page} from "./pageModel";
import {userModel} from "./userModel";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  ngOnInit(): void {
    this.userList.push({
      email:"saminHeybati@yahoo.com",
      date:"any",
      status:true
    })
    this.totalElements=1
  }
  userList: userModel[] = []
  totalElements: number = 0
  page = new Page();


  setPage(event: any) {

  }






}
