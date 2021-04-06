import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './HomePage/home/home.component';
import {SearchComponent} from './SearchPage/search/search.component';
import {CalendarComponent} from './CoursePage/calendar/calendar.component';
import {TodoListComponent} from './TodoPage/todo-list/todo-list.component';
import {CourseDetailComponent} from './SearchPage/course-detail/course-detail.component';
import {LoginComponent} from './LoginPage/login/login.component';
import {RegisterComponent} from './LoginPage/register/register.component';
import {ProfileComponent} from './LoginPage/profile/profile.component';
import {AuthGuardService} from './auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'home/:email', component: HomeComponent},
  {path: 'search/:email', component: SearchComponent},
  {path: 'calendar/:email', component: CalendarComponent},
  {path: 'courses/:id', component: CourseDetailComponent},
  {path: 'todo/:email', component: TodoListComponent},
  {path: 'courses/:id', component: CourseDetailComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'profile/:email',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
