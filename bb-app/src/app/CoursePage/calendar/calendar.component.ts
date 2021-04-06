import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../models/Course';
import {StudentService} from '../../service/student.service';
import {Student} from '../../models/Student';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  class_1: string[];
  // tslint:disable-next-line:variable-name
  class_2: string[];
  // tslint:disable-next-line:variable-name
  class_3: string[];
  // tslint:disable-next-line:variable-name
  class_4: string[];
  // tslint:disable-next-line:variable-name
  class_5: string[];
  // tslint:disable-next-line:variable-name
  class_6: string[];
  // tslint:disable-next-line:variable-name
  class_7: string[];
  // tslint:disable-next-line:variable-name
  class_8: string[];
  // tslint:disable-next-line:variable-name
  class_9: string[];
  email: string;
  student: Student;
  constructor(private ss: StudentService, private route: ActivatedRoute) {
    console.log('sss');
    console.log(this.email);
  }

  ngOnInit() {
    this.class_1 = [];
    this.class_2 = [];
    this.class_3 = [];
    this.class_4 = [];
    this.class_5 = [];
    this.class_6 = [];
    this.class_7 = [];
    this.class_8 = [];
    this.class_9 = [];
    this.student = new Student();
    this.student.courses = [];
    this.show();
  }
  getCourse(course: Course) {
    switch (course.dayTime) {
      case 1: this.class_1[course.weekTime] = course.courseName; break;
      case 2: this.class_2[course.weekTime] = course.courseName; break;
      case 3: this.class_3[course.weekTime] = course.courseName; break;
      case 4: this.class_4[course.weekTime] = course.courseName; break;
      case 5: this.class_5[course.weekTime] = course.courseName; break;
      case 6: this.class_6[course.weekTime] = course.courseName; break;
      case 7: this.class_7[course.weekTime] = course.courseName; break;
      case 8: this.class_8[course.weekTime] = course.courseName; break;
      case 9: this.class_9[course.weekTime] = course.courseName; break;
    }
  }

  getEmail(): string {
    return this.route.snapshot.paramMap.get('email');
    console.log(this.email);
  }
  getCourses(courses: Course[]) {
    for (const i of courses) {
      this.getCourse(i);
    }
  }
  show() {

    this.ss.getStudentByEmail(this.getEmail()).subscribe(student => {
      this.student = student;
      this.getCourses(this.student.courses);
    });
    console.log(this.email);
  }

}
