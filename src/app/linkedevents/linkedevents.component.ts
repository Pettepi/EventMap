import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Event} from '../models/event';
import {MediaService} from '../media.service';

@Component({
  selector: 'app-linkedevents',
  templateUrl: './linkedevents.component.html',
  styleUrls: ['./linkedevents.component.scss'],
})
export class LinkedeventsComponent implements OnInit {

  tulos: string;
  apitulokset;
  apiosoite = 'https://api.hel.fi/linkedevents/v1';

  constructor(private http: HttpClient, private mediaService: MediaService) {
  }

  getFromApi() {
    interface Eventinterface {
      file: any;
    }

    this.http.get<Event>(this.apiosoite + '/event/?start=today').
        subscribe((response) => {
          console.log(response);
          this.apitulokset = response.data;
          this.apitulokset.forEach(event => {
            const keywords = event.keywords;
            keywords.forEach(keyword => {
              console.log(keyword);
              if (keyword['@id'].includes('p1808')) {
                const id = event.location['@id'];
                this.http.get(id).subscribe(evt => {
                  console.log(evt['position'].coordinates);
                  // lisää nasta kartalle
                  this.mediaService.setCoords(evt['position'].coordinates[0],
                      evt['position'].coordinates[1]);

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
