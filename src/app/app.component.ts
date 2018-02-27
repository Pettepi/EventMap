import {Component} from '@angular/core';
import {MediaService} from './media.service';
import {OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor(private mediaService: MediaService) {
    }
    ngOnInit() {
        console.log(this.mediaService.coords);
        this.mediaService.myMedia();
    }
}
