import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Bikes} from '../bikes.model';
import {Http, Response} from '@angular/http';


@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html'
})
export class BikeListComponent implements OnInit {
  bikes: Bikes[] = [];
  @Output() wasSelectedBike = new EventEmitter<Bikes>();
  constructor(private http: Http) { }

  ngOnInit() {
    this.getBikeList().subscribe(
        (response:Response) => {
          this.createBikeList(response.json());
        },
        (error)=> console.log(error)
      );
  };

  onSelectedBike(bike){
    this.wasSelectedBike.emit(bike);
  }

  getBikeList(){
    return this.http.get('https://api.credr.com/v1/product/search/?q=eyJwYWdlIjoxLCJjdXJyZW50X2NpdHlfaWQiOjJ9');
  }

  createBikeList(jsonObject){
    let bikesData:any= jsonObject.payload.results;
    for(let bikeData in bikesData){
      this.bikes.push(
          new Bikes(bikesData[bikeData].created_date.split('T')[0],
          bikesData[bikeData].current_location_name,
          bikesData[bikeData].display_name,
          bikesData[bikeData].display_price,
          bikesData[bikeData].make_name,
          bikesData[bikeData].outlet,
          bikesData[bikeData].vehicle_model_name,
          bikesData[bikeData].variant_name,
          bikesData[bikeData].kms_driven,
          bikesData[bikeData].years_old,
          bikesData[bikeData].year_of_mfg,
          bikesData[bikeData].image.vehicle_images)
        );
    }
  }

}
