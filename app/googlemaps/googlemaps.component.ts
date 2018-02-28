import {Component, OnInit} from '@angular/core';
import {MediaService} from '../media.service';
import {AppComponent} from '../app.component';

@Component({
    selector: 'app-googlemaps',
    templateUrl: './googlemaps.component.html',
    styleUrls: ['./googlemaps.component.css'],
})
export class GooglemapsComponent implements OnInit {

    title: string = '';
    coords;
    lat;
    lng;
    zoom: number = 8;

    constructor(private mediaService: MediaService) {
    }

    ngOnInit() {
        this.coords = this.mediaService.getCoords();
        this.lat = this.coords.lat;
        this.lng = this.coords.lng;
    }

}
