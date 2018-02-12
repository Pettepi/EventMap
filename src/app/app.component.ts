import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})
export class AppComponent {
    title: string = 'My first AGM project';
    lat: number = 60.169832654;
    lng: number = 24.938162914;
    zoom: number = 13;
}
