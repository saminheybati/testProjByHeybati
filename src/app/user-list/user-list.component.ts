import {Component, OnInit} from '@angular/core';
import {Page} from "./pageModel";
import {userModel} from "./userModel";
import {MatDialog} from "@angular/material/dialog";
import {UserFormComponent} from "../user-form/user-form.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  ngOnInit(): void {
    this.http.get<userModel[]>('http://localhost:3000/users').subscribe(res => {
      console.log('res', res)
      this.userList=res
      this.totalElements =res.length

    })
  }

  constructor(public dialog: MatDialog,
              private http: HttpClient) {
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
