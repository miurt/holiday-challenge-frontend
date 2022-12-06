import { Component, OnInit } from '@angular/core';

import { Hotel } from '../hotel';
import { Offer } from '../offer';
import { SearchService } from '../search.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.css']
})
export class AllResultsComponent implements OnInit {

  offers: Offer[] = new Array<Offer>();
  hotels: Hotel[] = new Array<Hotel>();
  selectedHotel?: Hotel;
  departureAirport = "";
  countAdults = 1;
  countChildren = 0;
  days = 1;
  earliestDepartureDate = new Date;
  latestDepartureDate = new Date;

  constructor(
    private searchService: SearchService
    ) {
    }

  ngOnInit(): void {
    
  }

  displayedColumns: string[] = [];


  public setData(departureAirport: string, countAdults: number, countChildren: number, 
    days: number, earliestDepartureDate: Date, latestDepartureDate: Date){
      this.departureAirport = departureAirport;
      this.countAdults = countAdults;
      this.countAdults = countChildren;
      this.days = days;
      this.earliestDepartureDate = earliestDepartureDate;
      this.latestDepartureDate = latestDepartureDate;

      this.getDataFromServer();
  }

  async getDataFromServer(){
    if (this.hotels.length == 0){
      this.hotels = await this.searchService.getHotels();
    }
    this.offers = await this.searchService.getOffers(this.departureAirport, this.countAdults, this.countChildren, 
      this.days, this.earliestDepartureDate, this.latestDepartureDate);
  }
}
