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

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();


  public async setData(departureAirport: string, countAdults: number, countChildren: number, 
    days: number, earliestDepartureDate: Date, latestDepartureDate: Date){
    this.hotels = await this.searchService.getHotels();
    this.offers = await this.searchService.getOffers(departureAirport, countAdults, countChildren, 
      days, earliestDepartureDate, latestDepartureDate);
  }
}
