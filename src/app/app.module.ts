import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DefaultModule} from './layouts/default/default.module';
import {UserComponent} from './modules/user/user.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule, MatNativeDateModule} from '@angular/material';
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatStepperModule} from "@angular/material/stepper";
import {ProjectComponent} from './modules/project/project.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ProjectDetailsComponent} from './modules/project/project-details/project-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WorkerComponent} from './modules/worker/worker.component';
import {UserDetailsComponent} from './modules/user/user-details/user-details.component';
import { WorkerDetailsComponent } from './modules/worker/worker-details/worker-details.component';
import {HttpClientModule} from "@angular/common/http";
import { TaskComponent } from './modules/task/task.component';
import { TaskDetailsComponent } from './modules/task/task-details/task-details.component';
import { TaskEditComponent } from './modules/task/task-edit/task-edit.component';
import { SubTaskComponent } from './modules/subtask/subtask.component';
import {ProjectEditComponent} from './modules/project/project-edit/project-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    WorkerComponent,
    UserDetailsComponent,
    WorkerDetailsComponent,
    TaskComponent,
    TaskDetailsComponent,
    TaskEditComponent,
    SubTaskComponent,
    ProjectEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatStepperModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
