import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})
export class GooglemapsComponent implements OnInit {

    title: string = '';
    lat: number = 24;
    lng: number = 24;
    zoom: number = 13;
  constructor() { }

  ngOnInit() {
  }

}
