import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
    imports: [
        BrowserModule,
        NgxDatatableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
