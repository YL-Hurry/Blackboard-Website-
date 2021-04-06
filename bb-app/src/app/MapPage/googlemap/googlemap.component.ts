import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss']
})
export class GooglemapComponent implements OnInit {
  zoom: number = 16;

  locations = [];

  mapDoubleClick(event) {
    const obj = {
      lat: event.coords.lat,
      lng: event.coords.lng
    };
    this.locations.push(obj);
  }

  constructor() { }

  ngOnInit() {
  }

}
