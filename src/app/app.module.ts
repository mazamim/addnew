import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { TablesComponent } from './components/tables/tables.component';
import { ProgresstasklistComponent } from './components/progresstasklist/progresstasklist.component';
import { ActivityComponent } from './components/activity/activity.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {BreadcrumbModule} from 'xng-breadcrumb';
import { SectionHeaderComponent } from './components/section-header/section-header.component';

import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EmployeeService } from './_services/employee.service';

import { ExpensesComponent } from './expenses/expenses.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TaskAddComponent } from './task/task-add/task-add.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { ClientAddComponent } from './client/client-add/client-add.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsAddComponent } from './projects/projects-add/projects-add.component';
import { ToolsAddComponent } from './tools/tools-add/tools-add.component';
import { ToolsListComponent } from './tools/tools-list/tools-list.component';
import { FileUploadModule } from 'ng2-file-upload';
import { PhotoEditorComponent } from './employee/photo-editor/photo-editor.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    TablesComponent,
    ProgresstasklistComponent,
    ActivityComponent,
    FooterComponent,
    HomeComponent,
    SectionHeaderComponent,


    ExpensesComponent,

    AddStudentComponent,
    EditStudentComponent,
    StudentListComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    TaskAddComponent,
    TaskListComponent,
    EmployeeEditComponent,
    ClientAddComponent,
    ClientListComponent,
    ProjectsListComponent,
    ProjectsAddComponent,
    ToolsAddComponent,
    ToolsListComponent,
    PhotoEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    BsDropdownModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule,
    AccordionModule.forRoot(),
    FileUploadModule




  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
