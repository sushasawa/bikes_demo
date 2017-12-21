import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';

import {
    Bikes
} from '../bikes.model';

@Component({
    selector: 'app-bike-detail',
    templateUrl: './bike-detail.component.html',
    styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {
    @Input() bike: Bikes;
    bikeLocation: String = '';
    currentImage: any = {};
    lat: number = 18.9894007;
    lng: number = 73.1175162;
    constructor(private http: Http) {}

    ngOnInit() {

    }

    ngOnChanges() {
        console.log(this.bike.current_location_name);
        this.currentImage = this.bike.images[0];
        this.getBikeMap().subscribe(
            (response: Response) => {
                this.createLatLng(response.json());
            },
            (error) => console.log(error)
        );
    }
    changeImage(event) {
        let target = event.target;
        this.currentImage = {
            image: target.currentSrc,
            tag: target.alt
        };
    }

    getBikeMap() {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.bike.current_location_name + '&key=AIzaSyCSPQUeqVIJlwi-mxJf3TqVCZMRGdYzpUE');
    }

    createLatLng(result) {
        console.log('called createLatLng');
        let locationCoo = result.results[0].geometry.location;
        this.lat = locationCoo.lat;
        this.lng = locationCoo.lng;
    }

}
