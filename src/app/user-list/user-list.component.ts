import {Component, OnInit} from '@angular/core';
import {Page} from "./pageModel";
import {userModel} from "./userModel";
import {MatDialog} from "@angular/material/dialog";
import {UserFormComponent} from "../user-form/user-form.component";
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  ngOnInit(): void {
    this.getUsersData()
  }

  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              private http: HttpClient) {
  }

  userList: userModel[] = []
  partOfUsers: userModel[] = []
  totalElements: number = 0
  page = new Page();
  emailFilter: string = ''

  filterForm = this.fb.group({
    email: [''],
    accessLevel: [''],
  })

  getUsersData() {
    this.http.get<userModel[]>('http://localhost:3000/users/').subscribe(res => {
      this.userList = res
      this.partOfUsers = res
      this.totalElements = res.length
    })
    for (let i = 0; i < 10; i++) {
      this.partOfUsers.push(this.userList[i])
    }


  }

  setPage(event: any) {
    console.log(event.offset * 10)
    let start = event.offset * 10
    let end
    if (event.offset !== 0) {
      end = start * 2
    } else end = 10
    this.partOfUsers = []
    for (let i = start; i < end; i++) {
      if (this.userList[i] !== undefined) {
        this.partOfUsers.push(this.userList[i])
      }
    }

  }


  editUser(row: userModel) {
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: row,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUsersData()
    });
  }


  deleteUser(row: userModel) {
    Swal.fire({
      title: 'آیا این کابر حذف شود ؟',
      text: "بعد از حذف قادر به بازگردانی آن نخواهید بود !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3f8035',
      cancelButtonColor: '#d33',
      cancelButtonText: 'انصراف',

      confirmButtonText: 'بله '
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete('http://localhost:3000/users/' + row.id).subscribe(res => {
          this.getUsersData()
        })
      }
    })
  }

  filterAccessLevel() {
    if (this.filterForm.get('accessLevel')?.value === "ALL") {
      this.getUsersData()
    } else {
      this.partOfUsers = this.userList.filter(item => item.accessLevel === this.filterForm.get('accessLevel')?.value)
      this.totalElements = this.partOfUsers.length
    }
  }

  filterEmail() {
    console.log(this.emailFilter)
    for(let item of this.userList){
        this.partOfUsers = this.userList.filter(item => item.email.includes(this.emailFilter))

    }
  }
}
