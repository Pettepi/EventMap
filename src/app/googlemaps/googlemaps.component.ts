import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})
export class GooglemapsComponent implements OnInit {

    title: string = '';
    lat: number = 60.169832654;
    lng: number = 24.938162914;
    zoom: number = 13;
  constructor() { }

  ngOnInit() {
  }

}
