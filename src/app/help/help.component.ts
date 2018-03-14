import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  naytahelp = false;

  constructor() { }

  ngOnInit() {
  }

  nayta(){
    this.naytahelp =  !this.naytahelp;
  }

}
