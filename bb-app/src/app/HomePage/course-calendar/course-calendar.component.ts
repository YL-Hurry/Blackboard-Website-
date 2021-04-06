import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from '../../service/student.service';
import {ActivatedRoute} from '@angular/router';
import {Student} from '../../models/Student';
import {Course} from '../../models/Course';

@Component({
  selector: 'app-course-calendar',
  templateUrl: './course-calendar.component.html',
  styleUrls: ['./course-calendar.component.scss']
})
export class CourseCalendarComponent implements OnInit {
  email: string;
  nowTime: Date;
  student: Student;
  courses: Course[];
  constructor(
    private ss: StudentService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.courses = [];
    this.nowTime = new Date(Date.parse(new Date().toString()));
    console.log(this.getdate());
    this.putCourse();
  }
  getdate() {
    return this.nowTime.getDay();
  }
  getEmail(): string {
    return this.route.snapshot.paramMap.get('email');
    console.log(this.email);
  }

  putCourse() {
    this.ss.getStudentByEmail(this.getEmail()).subscribe(student => {
      console.log(student);
      // tslint:disable-next-line:max-line-length
      if (student !== null && student.courses !== undefined && student.courses.length !== 0) {this.getTodayCourse(this.getdate(), student.courses); }
      // this.student = student;
    });
    console.log(this.email);
  }
  getTodayCourse(today: number, courses: Course[]) {
    for (const i of courses) {
      if (i.weekTime === today) {
        this.courses.push(i);
      }
    }
  }
}
