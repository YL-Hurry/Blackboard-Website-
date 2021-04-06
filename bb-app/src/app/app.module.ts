import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterComponent } from './SearchPage/enter/enter.component';
import { CourseComponent } from './SearchPage/course/course.component';
import { CourseDetailComponent } from './SearchPage/course-detail/course-detail.component';
import { HeaderComponent } from './layout/header/header.component';
import { EventsComponent } from './HomePage/events/events.component';
import { CalendarComponent } from './CoursePage/calendar/calendar.component';
import { CourseCalendarComponent } from './HomePage/course-calendar/course-calendar.component';
import { HomeComponent } from './HomePage/home/home.component';
import { SearchComponent } from './SearchPage/search/search.component';
import { TodoListComponent } from './TodoPage/todo-list/todo-list.component';
import { TodoItemComponent } from './TodoPage/todo-item/todo-item.component';
import { AddTodoComponent } from './TodoPage/add-todo/add-todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListCourseComponent } from './SearchPage/list-course/list-course.component';
import { EventsActivitiesComponent } from './EventPage/events-activities/events-activities.component';
import { TodosComponent } from './HomePage/todos/todos.component';

import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './LoginPage/profile/profile.component';
import { LoginComponent } from './LoginPage/login/login.component';
import { RegisterComponent } from './LoginPage/register/register.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { GooglemapComponent } from './MapPage/googlemap/googlemap.component';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './HomePage/map/map.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { FooterComponent } from './layout/footer/footer.component';

const routes: Routes = [
];


@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    CourseComponent,
    CourseDetailComponent,
    HeaderComponent,
    EventsComponent,
    CalendarComponent,
    CourseCalendarComponent,
    HomeComponent,
    SearchComponent,
    TodoListComponent,
    TodoItemComponent,
    AddTodoComponent,
    ListCourseComponent,
    EventsActivitiesComponent,
    TodosComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    GooglemapComponent,
    MapComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    Ng2CarouselamosModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCrm4rvd9DKVdlK8_BFQ4MSEBBq9O5RhB4'
    })
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
