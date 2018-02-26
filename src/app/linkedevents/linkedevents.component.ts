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


    getFromApi() {
        interface Eventinterface {
            file: any;
        }

        this.http.get<Event>(this.apiosoite + '/event/?start=today').subscribe((response) => {
            console.log(response);
            this.apitulokset = response.data;
            this.apitulokset.forEach(event => {
                const keywords = event.keywords;
                keywords.forEach(keyword => {
                    console.log(keyword);
                    if (keyword['@id'].includes('p1808')) {
                        const id = event.location['@id'];
                        this.http.get(id).subscribe(event => {
                            console.log(event['position'].coordinates);
                            // lisää nasta kartalle
                            const coords = {
                                lat: event['position'].coordinates[0],
                                lng: event['position'].coordinates[1]
                            };
                        });
                    }
                });

            });
        });
    }

    ngOnInit() {
        this.getFromApi();
    }

}
