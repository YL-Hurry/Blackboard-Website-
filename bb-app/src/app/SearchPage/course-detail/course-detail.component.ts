import { Component, OnInit , Input } from '@angular/core';
import {Course} from '../../models/Course';
import {CourseService} from '../../service/course.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  @Input() course: Course;
  constructor(private cs: CourseService, private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    this.getCourse(id);
  }
  // get one course by id
  getCourse(id: string) {
    this.cs.getCourseById(id).subscribe(course => {
      this.course = course;
    });
  }

}
