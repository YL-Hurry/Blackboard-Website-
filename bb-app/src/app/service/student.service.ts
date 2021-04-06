import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, Subject, Subscription} from 'rxjs';

import {Student} from '../models/Student';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }



  studentUrl = 'http://localhost:8080/students/';
  // get all student
  getStudent(): Observable<Student[]> {
    return  this.http.get<Student[]>(this.studentUrl);
  }
  // get one student by email
  getStudentByEmail(email): Observable<Student> {
    const url = `${this.studentUrl}${email}`;
    console.log('get student');
    return this.http.get<Student>(url);
  }
  // update student
   updateStudent(student: Student): Observable<any> {
    const url = `${this.studentUrl}${student.email}`;
    /*const l = student.courses.length - 1;
    console.log(url + student.courses[l].courseName + student.email)*/
    return this.http.patch(url, student, httpOptions);
  }
  // add one student
  addStudent(student: Student): Observable<Student> {
    console.log('create student');
    return this.http.post<Student>(this.studentUrl, student, httpOptions);
  }

}
