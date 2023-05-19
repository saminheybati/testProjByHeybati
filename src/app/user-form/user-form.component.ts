import {Component, Inject} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)
  }

  userForm = this.fb.group({
    email: [''],
  })

}
