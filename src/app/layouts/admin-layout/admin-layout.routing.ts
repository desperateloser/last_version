import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ManageusersComponent } from '../../user/manageusers/manageusers.component';
import { UsersComponent } from '../../users/users.component';
import { RequestComponent } from '../../request/request.component';
import { DocumentsComponent } from '../../documents/documents.component';
import { FeedbackComponent} from "../../feedback/feedback.component";
import { EdituserComponent} from "../../edituser/edituser.component";
import {AdduserComponent} from "../../user/adduser/adduser.component";

export const AdminLayoutRoutes: Routes = [

    { path: 'home',      component: HomeComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'manageusers',     component: ManageusersComponent },
    { path: 'employees',     component: UsersComponent },
    { path: 'request',          component: RequestComponent },
    { path: 'documents',        component: DocumentsComponent },
    { path: 'feedback',        component: FeedbackComponent },
    { path: 'edituser',        component: EdituserComponent },
    { path : 'adduser', component : AdduserComponent},
];
