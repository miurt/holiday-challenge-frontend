import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Offer } from './offer';
import { OffersTO } from './offersTO';
import { Hotel } from './hotel';
import { HotelsTO } from './hotelsTO';


@Injectable({
  providedIn: 'root'
})

export class SearchService {
  //URL for local usage with backend
  //private searchUrl = 
  //'http://localhost:8080/api/search/offers/{departureAirport}+{countAdults}+{countChildren}+{days}+{earliestDepartureDate}+{latestDepartureDate}';
  //'http://localhost:8080/api/search/hotels';
  private searchUrl = environment.backendBasePath + 'api/search/offers/';
  private hotelUrl = environment.backendBasePath + 'api/search/hotels';

  headers = new HttpHeaders({ 'Accept': 'application/json' });

  httpOptions = {
    reportProgress: true,
    headers: this.headers
  };


  constructor(private http: HttpClient) { }

  /** GET offers from the server */

  async getOffers(departureAirport: string, countAdults: number, countChildren: number, 
      days: number, earliestDepartureDate: Date, latestDepartureDate: Date): Promise<Offer[]> {
    const response = await firstValueFrom(this.http.get<OffersTO>(this.searchUrl + departureAirport + '+' +
        countAdults + '+' + countChildren + '+' + days + '+' + earliestDepartureDate + '+' + latestDepartureDate, 
        this.httpOptions));
    let offers = response.offers;
    return offers;
  }

  async getHotels(): Promise<Hotel[]> {
    const response = await firstValueFrom(this.http.get<HotelsTO>(this.hotelUrl, this.httpOptions));
    let hotels = response.hotels;
    return hotels;
  }
}
