import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../authentication.service';
import { Router } from '@angular/router';
import {Student} from '../../models/Student';
import {StudentService} from '../../service/student.service';
import {formatNumber} from '@angular/common';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  flag: boolean;
  students: Student[];
  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };

  constructor(private ss: StudentService, private auth: AuthenticationService, private router: Router) {}

  // Check if the email is in the list
  findEmailInList(email: string, password: string, studentList: Student[]) {
    for ( const s of studentList) {
      if ( s.email === email && s.password === password) {
        return true;
        break;
      } else {
        continue;
      }
    }
    return false;
  }
  // Log in
   login() {
    // if email empty
    if (this.credentials.email === null || this.credentials.email === '') {
      alert('Please input your email address!');
      return;
    }
    // if password empty
    if (this.credentials.password === null || this.credentials.password === '') {
      alert('Please input your Password!');
      return;
    }
    // if user doesn't exist
    this.ss.getStudent().subscribe(sl => {
      // alert(sl.length);
      const exist = this.findEmailInList(this.credentials.email, this.credentials.password, sl);
      // alert(exist);
      if (!exist) {
        alert('User not exist! or wrong password');
        return;
      }
      this.auth.login(this.credentials).subscribe(
        () => {
          // alert('began login');
          this.router.navigateByUrl(`/home/${this.credentials.email}`);
        },
        err => {
          console.error(err);
        }
      );
    });

  }
}
