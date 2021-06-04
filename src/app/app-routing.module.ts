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
      path: 'tasks',
      component: TaskComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
