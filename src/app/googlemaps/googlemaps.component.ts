import {Component, OnInit} from '@angular/core';
import {MediaService} from '../media.service';

@Component({
    selector: 'app-googlemaps',
    templateUrl: './googlemaps.component.html',
    styleUrls: ['./googlemaps.component.css'],
})
export class GooglemapsComponent implements OnInit {


    title: string = '';
    lat = 60.1737;
    lng = 24.93509;
    zoom: number = 11
    ;

    constructor(public mediaService: MediaService) {
    }


    public icon = {
        url: 'assets/images/nuotti2.png',
        scaledSize: {
            height: 30,
            width: 30
        }
    };

    ngOnInit() {
    }

}
