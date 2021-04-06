import { Component, OnInit } from '@angular/core';
import {AuthenticationService, UserDetails} from '../../authentication.service';
import {StudentService} from '../../service/student.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  email: string;

  constructor(
    private auth: AuthenticationService,
    private ss: StudentService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.email = '';
    this.getEmail();
  }

  getEmail(): void {
    this.email = this.route.snapshot.paramMap.get('email');
    console.log(this.email);
  }
}
