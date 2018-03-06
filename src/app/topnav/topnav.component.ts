import { Component, OnInit } from '@angular/core';
import {MediaService} from '../media.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

    constructor(public mediaService: MediaService) {
    }

    ngOnInit() {
    }

}
