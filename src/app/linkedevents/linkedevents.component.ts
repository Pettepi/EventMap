import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
      data: any;
    }

    this.http.get<Eventinterface>(this.apiosoite + '/event/?start=today&end=today&keyword=yso:p1808').
        subscribe((response) => {
          console.log(response);
          this.apitulokset = response.data;
          this.apitulokset.forEach(event => {
            const keywords = event.keywords;
            keywords.forEach(keyword => {
              console.log(keyword['@id']);
               if (keyword['@id'].includes('p1808')) {
                   const id = event.location['@id'];
                   this.http.get(id).subscribe(paikka => {
                       console.log(paikka['position'].coordinates);
                       // lisää nasta kartalle
                       event.paikka = paikka;
                       console.log(event);
                       this.mediaService.setEvent(event);
                   });
                   // }
               }});
          });
        });
  }

  ngOnInit() {
    this.getFromApi();
  }

}
