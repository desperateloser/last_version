import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HomeComponent } from '../../home/home.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ManageusersComponent } from '../../manageusers/manageuserscomponent';
import { EmployeesComponent } from '../../employees/employees.component';
import { RequestComponent } from '../../request/request.component';
import { DocumentsComponent } from '../../documents/documents.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import {FeedbackComponent} from "../../feedback/feedback.component";
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
      FeedbackComponent,
    HomeComponent,
    UserProfileComponent,
    ManageusersComponent,
      EmployeesComponent,
    RequestComponent,
    DocumentsComponent,
  ]
})

export class AdminLayoutModule {}
