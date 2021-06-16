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
      path: 'subtasks',
      component: SubTaskComponent
    },
    {
      path: 'subtasks/create',
      component: SubTaskDetailsComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
