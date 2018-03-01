import {Injectable} from '@angular/core';

@Injectable()

export class MediaService {

  constructor() {
  }

  events = [];

  setEvent(ev) {
    this.events.push(ev);
  }

  getEvent() {
    return this.events;
  }

  /*
    name = {
      sv: '',
      fi: '',
    };

    setName(sv, fi) {
      this.name = {
        sv: sv,
        fi: fi,
      };
    }

    getName() {
      return this.name;
    }
  */
}
