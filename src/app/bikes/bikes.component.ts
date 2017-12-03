import { Component, OnInit } from '@angular/core';
import {Bikes} from './bikes.model';
@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html'
})
export class BikesComponent {
selectedRecipe: Bikes;
  constructor() { }

}
