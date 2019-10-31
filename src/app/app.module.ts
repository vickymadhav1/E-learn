import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PaymentsComponent } from './components/payments/payments.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { YourCoursesComponent } from './components/your-courses/your-courses.component';
import {MatButtonModule} from '@angular/material/button';
import { AvailableCourcesComponent } from './components/available-cources/available-cources.component';
import { CourseSchedulerComponent } from './components/course-scheduler/course-scheduler.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { TutorRegisterComponent } from './components/tutor-register/tutor-register.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { LoginComponent } from './components/login/login.component';
import { LiveCoursesComponent } from './components/live-courses/live-courses.component';
import { MatVideoModule } from 'mat-video';
import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpService } from "./http.service";


@NgModule({
  declarations: [
    AppComponent,
    MyCoursesComponent,
    PaymentsComponent,
    YourCoursesComponent,
    AvailableCourcesComponent,
    CourseSchedulerComponent,
    StudentDashboardComponent,
    TutorRegisterComponent,
    StudentRegisterComponent,
    LoginComponent,
    LiveCoursesComponent,
    TutorDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatVideoModule,
    MatCarouselModule,
    MatStepperModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
