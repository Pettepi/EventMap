import {Injectable} from '@angular/core';

@Injectable()

export class MediaService {

    constructor() {
    }

    coords = {
        lat: '',
        lng: ''
    };

    setCoords(lat, lon) {
        this.coords = {
            lat: lat,
            lng: lon
        };
    }

    getCoords() {
        return this.coords;
    }

}
