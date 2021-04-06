import {Component, Input} from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../authentication.service';
import { Router } from '@angular/router';
import {StudentService} from '../../service/student.service';
import {Student} from '../../models/Student';
import { AppModule } from '../../app.module';
import {PatternValidator, Validators} from '@angular/forms';
import {invalid} from '@angular/compiler/src/render3/view/util';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  @Input() pattern: string|RegExp;
  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };
  student: Student = {
    email: '',
    courses: [],
    todos: [],
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router, private ss: StudentService) {}
  register() {
    // verify input
    if ( document.getElementById('invalid1') !== null || document.getElementById('invalid2') !== null) {

      alert('please input correct email/password format');
      return;
    }
    if ( this.credentials.first_name  === '' || this.credentials.first_name === null ) {
      alert('Please input your first name!');
      return;
    }
    if ( this.credentials.last_name === '' || this.credentials.last_name === null) {
      alert('Please input your last name!');
      return;
     }
    if ( this.credentials.email === '' || this.credentials.email === null) {
      alert('Please input your e-mail!');
      return;
    }

    if ( this.credentials.password === '' || this.credentials.password === null) {
      alert('Please input your password');
      return;
    }
    // new student register
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl(`/home/${this.credentials.email}`);
      },
      err => {
        console.error(err);
      }
    );
    console.log(this.student.email);

    // add new student in mongoDB
    this.ss.addStudent(this.student).subscribe();
  }
}
