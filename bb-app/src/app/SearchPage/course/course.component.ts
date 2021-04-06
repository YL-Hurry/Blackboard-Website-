import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../../models/Course';
import { CourseService } from '../../service/course.service';
import {StudentService} from '../../service/student.service';
import {Student} from '../../models/Student';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() addDetail: EventEmitter<string> = new EventEmitter();
  detail: string = null;
  number: string = null;
  cName: string = null;
  professor: string = null;
  weekTime: string = null;
  dayTime: string = null;
  student: Student;
  show = false;
  email: string;

  constructor(
    private cs: CourseService,
    private ss: StudentService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.student = new Student();
    this.student.courses = [];
  }

  // View course details
  view(course: Course) {
    let weekDay = '';
    switch (course.weekTime) {
      case 1: weekDay = 'Monday'; break;
      case 2: weekDay = 'Tuesday'; break;
      case 3: weekDay = 'Wednesday'; break;
      case 4: weekDay = 'Thursday'; break;
      case 5: weekDay = 'Friday'; break;
      case 6: weekDay = 'Saturday'; break;
      case 7: weekDay = 'Sunday'; break;
    }
    let time = '';
    switch (course.dayTime) {
      case 1: time = '07:30 - 09:00'; break;
      case 2: time = '09:00 - 10:30'; break;
      case 3: time = '10:30 - 12:00'; break;
      case 4: time = '12:00 - 13:30'; break;
      case 5: time = '13:30 - 15:00'; break;
      case 6: time = '15:00 - 16:30'; break;
      case 7: time = '16:30 - 18:00'; break;
      case 8: time = '18:00 - 19:30'; break;
      case 9: time = '19:30 - 21:00'; break;
    }
    if (!this.show) {
      this.weekTime = 'Weekday: ' + weekDay;
      this.dayTime = 'Time: ' + time;
      this.number = 'Course Number: ' + course.courseNumber;
      this.cName = 'Course Content: ' + course.courseName;
      this.professor = 'Instructor: ' + course.professor;
      this.detail = 'Syllabus: ' + course.courseDetail;
      console.log(this.detail);
      this.show = !this.show;
    } else {
      this.weekTime = null;
      this.dayTime = null;
      this.detail = null;
      this.number = null;
      this.professor = null;
      this.cName = null;
      this.show = !this.show;
    }
  }
  // Delete Course from course list
  deleteCourse(c: Course, cl: Course[]) {
    for (let location = 0; location < cl.length; location++) {
      if ( c.courseNumber === cl[location].courseNumber) {
        console.log('location:' + location);
        cl.splice(location, 1);
        console.log('After delete');
        break;
      } else {
        continue;
      }
    }
  }
  // Register course to student calendar
  register() {
    const email = this.route.snapshot.paramMap.get('email');
    console.log('User Email: ' + email);
    // @ts-ignore
    let s = new Student();
    // @ts-ignore
    this.ss.getStudentByEmail(email).subscribe(student => {
      s = student;
      console.log('User Email: ' + s.email);
      const courseAmount = s.courses.length;
  // Waive course
      for ( const c of s.courses) {
        // tslint:disable-next-line:max-line-length
        if ( this.course.courseNumber === c.courseNumber && this.course.professor === c.professor && this.course.weekTime === c.weekTime && this.course.dayTime === c.dayTime) {
          console.log('Duplicate');
          const r = confirm('Are you sure you want to waive this course?');
          if ( r === true) {
            console.log('Begin delete!');
            this.deleteCourse (c, s.courses);
            console.log(s.courses + '   ' + s.email);
            console.log('Delete successfully!');
            this.ss.updateStudent(s).subscribe(() => {
              location.reload();
            });
            return;
          } else {
            return;
          }
        }
      }
  // If choose same course
      for ( const c of s.courses ) {
        if ( this.course.courseNumber === c.courseNumber) {
          console.log('Choose same course');
          alert(' You cannot choose two same course ');
          return;
        }
      }
  // If time conflict
      for ( const c of s.courses ) {
        if ( this.course.dayTime === c.dayTime && this.course.weekTime === c.weekTime ) {
          console.log('Time conflict');
          alert('You have registered a course in this period!');
          return;
        }
      }
  // If choose more than 3 courses
      if ( courseAmount > 2) {
        console.log('Out of bound');
        alert('You can choose at most 3 classes!');
        return;
      } else {
        alert('Register Successfully');
        s.courses.push(this.course);
        this.ss.updateStudent(s).subscribe();
      }
    });
  }
}
