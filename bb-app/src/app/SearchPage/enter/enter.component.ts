import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Course } from '../../models/Course';
import {CourseService} from '../../service/course.service';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {
  @Input()
  weekTime: number;
  dayTime: number;
  subject: string;
  courseName: string;
  courseNumber: string;
  professor: string;
  courseDetail: string;
  input: string;
  courseList: Course[];
  tempList: Course[];
  coursedetail: string;
  constructor(private cs: CourseService) { }

  ngOnInit() {
      this.courseList = new Array();
      this.tempList = new Array();
      this.coursedetail = null;
  }
  // get all the course
  onSubmit() {
    this.courseList = [];
    this.cs.getCourse().subscribe(courseList => {
      for (const course of courseList) {
        if (course.courseName === this.input && !this.contains(course, this.courseList)) {
          this.courseList.push(course);
        }
        if (course.courseNumber === this.input && !this.contains(course, this.courseList)) {
          this.courseList.push(course);
        }
        if (course.professor === this.input && !this.contains(course, this.courseList)) {
          this.courseList.push(course);
        }
        if (course.subject === this.input && !this.contains(course, this.courseList)) {
          this.courseList.push(course);
        }
      }
    });
  }
  // judge if the course is in the courselist
  contains(course: Course, cList: Course[]) {
    for (const c of cList) {
      if ( c._id ===  course._id ) {
        return true;
      } else {
        return false;
      }
    }
  }
}
