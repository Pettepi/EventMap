import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Event} from '../models/event';

@Component({
    selector: 'app-linkedevents',
    templateUrl: './linkedevents.component.html',
    styleUrls: ['./linkedevents.component.scss']
})
export class LinkedeventsComponent implements OnInit {

    tulos: string;
    apitulokset;
    apiosoite = 'https://api.hel.fi/linkedevents/v1';

    constructor(private http: HttpClient) {
    }

    getJson() {
        interface Myinterface {
            license: string;
        }

        this.http.get<Myinterface>('assets/package.json').subscribe((data) => {
            console.log(data);
            this.tulos = data.license;
        });
    }

    getFromApi() {
        interface Eventinterface {
            file: any;
        }

        this.http.get<Event>(this.apiosoite + '/event/?start=today').subscribe((response) => {
            console.log(response);
            this.apitulokset = response.data;
        });
    }

    ngOnInit() {
        this.getJson();
        this.getFromApi();
    }

}
