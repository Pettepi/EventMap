import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

        this.http.get(this.apiosoite + '/event/?start=today').subscribe((data) => {
            console.log(data);
            this.apitulokset = data.data;
        });
    }

    ngOnInit() {
        this.getJson();
        this.getFromApi();
    }

}
