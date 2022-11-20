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


  constructor(private searchService: SearchService) {
    }

  ngOnInit(): void {
    
  }

  displayedColumns: string[] = [];


  public async setData(departureAirport: string, countAdults: number, countChildren: number, 
    days: number, earliestDepartureDate: Date, latestDepartureDate: Date){
    this.hotels = await this.searchService.getHotels();
    this.offers = await this.searchService.getOffers(departureAirport, countAdults, countChildren, 
      days, earliestDepartureDate, latestDepartureDate);
  }
}
