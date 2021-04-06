import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../models/Course';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseUrl = 'http://localhost:8080/courses/';
  constructor(private http: HttpClient) { }

  // get all course
  getCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(this.courseUrl);
  }
  // get by one course id
  getCourseById(id): Observable<Course> {
    const url = `${this.courseUrl}${id}`;
    return this.http.get<Course>(url);
  }
  // update course
  updateCourse(course: Course): Observable<any> {
    const url = `${this.courseUrl}${course._id}`;
    return this.http.put(url, course, httpOptions);
  }
  // delete course
  deleteCourse(course: Course): Observable<Course> {
    const url = `${this.courseUrl}${course._id}`;
    return this.http.delete<Course>(url, httpOptions);
  }
  // add course
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.courseUrl, course, httpOptions);
  }
}
