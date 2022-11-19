import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm = this.formBuilder.group({
    departureAirport: '',
    countAdults: 1,
    countChildren: 0,
    days: 1,
    earliestDepartureDate: new FormControl(new Date()),
    latestDepartureDate: new FormControl(new Date())
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.searchForm.value);
    this.searchForm.reset();
  }

}
