import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Bikes } from '../../bikes.model';


@Component({
  selector: 'app-bike-item',
  templateUrl: './bike-item.component.html'
})
export class BikeItemComponent implements OnInit {
 @Input() bike : Bikes;
 @Output() selectedBike = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
  	this.selectedBike.emit();
  }

}
