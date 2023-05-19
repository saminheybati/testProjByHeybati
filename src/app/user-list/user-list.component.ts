import {Component, OnInit} from '@angular/core';
import {Page} from "./pageModel";
import {userModel} from "./userModel";
import {MatDialog} from "@angular/material/dialog";
import {UserFormComponent} from "../user-form/user-form.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  ngOnInit(): void {
    this.userList.push({
      email: "saminHeybati@yahoo.com",
      date: "any",
      status: true,
      accessLevel: "ADMIN"
    })
    this.totalElements = 1
  }

  constructor(public dialog: MatDialog) {
  }

  userList: userModel[] = []
  totalElements: number = 0
  page = new Page();


  setPage(event: any) {

  }


  editUser(row: userModel) {
    this.dialog.open(UserFormComponent, {
      data: row,
    });
  }
}
