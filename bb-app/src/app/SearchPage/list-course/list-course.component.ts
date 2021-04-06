import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../models/Course';
import {CourseService} from '../../service/course.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {
 @Input() courselist: Course[];

  constructor(private cs: CourseService) {  }

  ngOnInit() {
  }
}
