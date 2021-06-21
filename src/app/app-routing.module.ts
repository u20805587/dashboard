import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {UserComponent} from "./modules/user/user.component";
import {ProjectComponent} from "./modules/project/project.component";
import {WorkerComponent} from "./modules/worker/worker.component";
import {ProjectDetailsComponent} from "./modules/project/project-details/project-details.component";
import {UserDetailsComponent} from "./modules/user/user-details/user-details.component";
import {WorkerDetailsComponent} from "./modules/worker/worker-details/worker-details.component";
import {WorkerEditComponent} from "./modules/worker/worker-edit/worker-edit.component";
import {TaskComponent} from "./modules/task/task.component";
import {TaskDetailsComponent} from "./modules/task/task-details/task-details.component";
import {TaskEditComponent} from "./modules/task/task-edit/task-edit.component";
import {SubTaskComponent} from "./modules/subtask/subtask.component";
import {SubTaskDetailsComponent} from "./modules/subtask/subtask-details/subtask-details.component";
import {ProjectEditComponent} from "./modules/project/project-edit/project-edit.component";
import {RoleComponent} from "./modules/role/role.component";
import {RoleDetailsComponent} from "./modules/role/role-details/role-details.component";
import {RoleEditComponent} from "./modules/role/role-edit/role-edit.component";
import {FunctionComponent} from "./modules/function/function.component";
import {FunctionDetailsComponent} from "./modules/function/function-details/function-details.component";
import {FunctionEditComponent} from "./modules/function/function-edit/function-edit.component";
import {RoleFunctionComponent} from "./modules/roleFunction/roleFunction.component";
import {RoleFunctionDetailsComponent} from "./modules/roleFunction/roleFunction-details/roleFunction-details.component";
import {RoleFunctionEditComponent} from "./modules/roleFunction/roleFunction-edit/roleFunction-edit.component";
import {WorkerFunctionComponent} from "./modules/workerFunction/workerFunction.component";
import {WorkerFunctionDetailsComponent} from "./modules/workerFunction/workerFunction-details/workerFunction-details.component";
import {WorkerFunctionEditComponent} from "./modules/workerFunction/workerFunction-edit/workerFunction-edit.component";
import {WorkerRoleComponent} from "./modules/workerRole/workerRole.component";
import {WorkerRoleDetailsComponent} from "./modules/workerRole/workerRole-details/workerRole-details.component";
import {WorkerRoleEditComponent} from "./modules/workerRole/workerRole-edit/workerRole-edit.component";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AppGuard } from './app.guard';

const routes: Routes = [

   { path: 'login', component: LoginComponent },
   { path: 'logout', component: LogoutComponent },
 //  { path: 'projects', component: ProjectComponent, canActivate: [AppGuard]},
  // { path: 'default', component: DefaultComponent, canActivate: [AppGuard]},
   //{ path: '', redirectTo: 'default', pathMatch: 'full' },
{
  path: '',
  component: DefaultComponent,
  children: [
    {
      path: '',
      component: DashboardComponent, canActivate: [AppGuard]
    },
    {
      path: 'projects',
      component: ProjectComponent, canActivate: [AppGuard]
    },
    {
      path: 'workers',
      component: WorkerComponent, canActivate: [AppGuard]
    },
    {
      path: 'workers/create',
      component: WorkerDetailsComponent, canActivate: [AppGuard]
    },
    {
      path: 'users',
      component: UserComponent, canActivate: [AppGuard]
    },
    {
      path: 'users/setup',
      component: UserDetailsComponent, canActivate: [AppGuard]
    },
    {
      path: 'projects/create',
      component: ProjectDetailsComponent, canActivate: [AppGuard]
    },
    {
      path: 'projects/edit/:id',
      component: ProjectEditComponent, canActivate: [AppGuard]
    },
    {
      path: 'tasks/edit/:id',
      component: TaskEditComponent, canActivate: [AppGuard]
    },
    {
      path: 'tasks',
      component: TaskComponent, canActivate: [AppGuard]
    },
    {
      path: 'projects/create',
      component: ProjectDetailsComponent, canActivate: [AppGuard]
    },
    {
      path: 'tasks/create',
      component: TaskDetailsComponent, canActivate: [AppGuard]
    },
    {
      path: 'roles',
      component: RoleComponent, canActivate: [AppGuard]
    },
    {
      path: 'roles/create',
      component: RoleDetailsComponent, canActivate: [AppGuard]
    },
    {
      path: 'roles/edit/:roleId',
      component: RoleEditComponent, canActivate: [AppGuard]
    },
    {
      path: 'subtasks',
      component: SubTaskComponent, canActivate: [AppGuard]
    },
    {
      path: 'subtasks/create',
      component: SubTaskDetailsComponent, canActivate: [AppGuard]
    },
    {
      path: 'functions',
      component: FunctionComponent, canActivate: [AppGuard]
    },
    {
      path: 'functions/create',
      component: FunctionDetailsComponent, canActivate: [AppGuard]
    },
    {
      path: 'functions/edit/:functionId',
      component: FunctionEditComponent, canActivate: [AppGuard]
    },
    {
      path: 'rolefunctions',
      component: RoleFunctionComponent, canActivate: [AppGuard]
    },
    {
      path: 'rolefunctions/create',
      component: RoleFunctionDetailsComponent, canActivate: [AppGuard]
    },
    {
      path: 'rolefunctions/edit/:roleId/:functionId',
      component: RoleFunctionEditComponent, canActivate: [AppGuard]
    },
    {
      path: 'workerfunctions',
      component: WorkerFunctionComponent, canActivate: [AppGuard]
    },
    {
      path: 'workerfunctions/create',
      component: WorkerFunctionDetailsComponent, canActivate: [AppGuard]
    },
    {
      path: 'workerfunctions/edit/:workerId/:functionId',
      component: WorkerFunctionEditComponent, canActivate: [AppGuard]
    },
   {
      path: 'workerroles',
      component: WorkerRoleComponent, canActivate: [AppGuard]
    },
    {
      path: 'workerroles/create',
      component: WorkerRoleDetailsComponent, canActivate: [AppGuard]
    },
    {
      path: 'workerroles/edit/:workerId/:roleId',
      component: WorkerRoleEditComponent, canActivate: [AppGuard]
    },
    {
      path: 'workers/edit/:workerId',
      component: WorkerEditComponent, canActivate: [AppGuard]
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
