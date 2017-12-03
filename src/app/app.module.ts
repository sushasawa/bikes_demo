import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeListComponent } from './bikes/bike-list/bike-list.component';
import { BikeDetailComponent } from './bikes/bike-detail/bike-detail.component';
import { BikeItemComponent } from './bikes/bike-list/bike-item/bike-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    BikeListComponent,
    BikeDetailComponent,
    BikeItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSPQUeqVIJlwi-mxJf3TqVCZMRGdYzpUE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
