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


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'projects',
      component: ProjectComponent
    },
    {
      path: 'workers',
      component: WorkerComponent
    },
    {
      path: 'workers/setup',
      component: WorkerDetailsComponent
    },
    {
      path: 'users',
      component: UserComponent
    },
    {
      path: 'users/setup',
      component: UserDetailsComponent
    },
    {
      path: 'projects/create',
      component: ProjectDetailsComponent
    },
    {
      path: 'projects/edit/:id',
      component: ProjectEditComponent
    },
    {
      path: 'tasks/edit/:id',
      component: TaskEditComponent
    },
    {
      path: 'tasks',
      component: TaskComponent
    },
    {
      path: 'projects/create',
      component: ProjectDetailsComponent
    },
    {
      path: 'tasks/create',
      component: TaskDetailsComponent
    },
    {
      path: 'roles',
      component: RoleComponent
    },
    {
      path: 'roles/create',
      component: RoleDetailsComponent
    },
    {
      path: 'roles/edit/:roleId',
      component: RoleEditComponent
    },
    {
      path: 'subtasks',
      component: SubTaskComponent
    },
    {
      path: 'subtasks/create',
      component: SubTaskDetailsComponent
    },
    {
      path: 'functions',
      component: FunctionComponent
    },
    {
      path: 'functions/create',
      component: FunctionDetailsComponent
    },
    {
      path: 'functions/edit/:functionId',
      component: FunctionEditComponent
    },
    {
      path: 'rolefunctions',
      component: RoleFunctionComponent
    },
    {
      path: 'rolefunctions/create',
      component: RoleFunctionDetailsComponent
    },
    {
      path: 'rolefunctions/edit/:roleId/:functionId',
      component: RoleFunctionEditComponent
    },
    {
      path: 'workerfunctions',
      component: WorkerFunctionComponent
    },
    {
      path: 'workerfunctions/create',
      component: WorkerFunctionDetailsComponent
    },
    {
      path: 'workerfunctions/edit/:workerId/:functionId',
      component: WorkerFunctionEditComponent
    },
   {
      path: 'workerroles',
      component: WorkerRoleComponent
    },
    {
      path: 'workerroles/create',
      component: WorkerRoleDetailsComponent
    },
    {
      path: 'workerroles/edit/:workerId/:roleId',
      component: WorkerRoleEditComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
