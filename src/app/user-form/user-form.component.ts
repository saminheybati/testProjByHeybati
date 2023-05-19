import {Component, Inject} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)
    this.userForm.patchValue(data)
  }

  userForm = this.fb.group({
    email: [''],
  })

  saveChanges() {
    console.log(this.userForm.value)
    this.data.email=this.userForm.get('email')?.value
     this.http.put('http://localhost:3000/users/' + this.data.id,this.data).subscribe(res => {


        })
  }
}
