import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ManageusersComponent } from '../../manageusers/manageuserscomponent';
import { EmployeesComponent } from '../../employees/employees.component';
import { RequestComponent } from '../../request/request.component';
import { DocumentsComponent } from '../../documents/documents.component';
import { FeedbackComponent} from "../../feedback/feedback.component";

export const AdminLayoutRoutes: Routes = [

    { path: 'home',      component: HomeComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'manageusers',     component: ManageusersComponent },
    { path: 'employees',     component: EmployeesComponent },
    { path: 'request',          component: RequestComponent },
    { path: 'documents',        component: DocumentsComponent },
    { path: 'feedback',        component: FeedbackComponent },
];
