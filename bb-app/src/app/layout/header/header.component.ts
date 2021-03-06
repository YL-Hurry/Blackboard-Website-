import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  email: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.get();
  }
  get() {
    this.email = this.route.snapshot.paramMap.get('email');
  }
}
