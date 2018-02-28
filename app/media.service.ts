import {Injectable} from '@angular/core';

@Injectable()

export class MediaService {

    constructor() {
    }

    coords = {
        lat: '',
        lng: ''
    };

    desc = {
        en: ''
    };

    setCoords(lat, lng) {
        this.coords = {
            lat: lat,
            lng: lng
        };
    }

    getCoords() {
        return this.coords;
}

    setDesc(en) {
        this.desc = {
            en: en
        };
    }

    getDesc() {
        return this.desc;
    }

}
