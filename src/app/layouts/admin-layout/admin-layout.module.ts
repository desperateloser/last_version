import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HomeComponent } from '../../home/home.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ManageusersComponent } from '../../manageusers/manageusers.component';
import { UsersComponent } from '../../users/users.component';
import { RequestComponent } from '../../request/request.component';
import { DocumentsComponent } from '../../documents/documents.component';
import {FeedbackComponent} from "../../feedback/feedback.component";
import {EdituserComponent} from "../../edituser/edituser.component";
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import {AdduserComponent} from "../../adduser/adduser.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
      AdduserComponent,
      EdituserComponent,
      FeedbackComponent,
    HomeComponent,
    UserProfileComponent,
    ManageusersComponent,
      UsersComponent,
    RequestComponent,
    DocumentsComponent,
  ]
})

export class AdminLayoutModule {}
