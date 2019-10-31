import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { YourCoursesComponent } from './components/your-courses/your-courses.component';
import { AvailableCourcesComponent } from './components/available-cources/available-cources.component';
import { CourseSchedulerComponent } from './components/course-scheduler/course-scheduler.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TutorRegisterComponent } from './components/tutor-register/tutor-register.component';
import { LoginComponent } from './components/login/login.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { LiveCoursesComponent } from './components/live-courses/live-courses.component';
import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';


const routes: Routes = [
  {path: '',redirectTo: '/home',pathMatch: 'full'},

  {path: 'home',component: LoginComponent},

  {path: 'payments',component: PaymentsComponent},

  {path: 'courses',component: YourCoursesComponent},

  {path: 'available',component: AvailableCourcesComponent},

  {path: 'scheduler',component: CourseSchedulerComponent},

  {path: 'Student_dashboard',component: StudentDashboardComponent},

  {path: 'tutor_register',component: TutorRegisterComponent},

  {path: 'login',component: LoginComponent},

  {path: 'live',component: LiveCoursesComponent},

  {path: 'student_register',component: StudentRegisterComponent},
  
  {path: 'Tutor_dashboard',component: TutorDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
