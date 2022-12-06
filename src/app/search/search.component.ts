import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AllResultsComponent } from '../all-results/all-results.component';

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
    private formBuilder: FormBuilder//, private allResults: AllResultsComponent
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.searchForm.value);
    //this.allResults.setData(this.searchForm.value.departureAirport!, this.searchForm.value.countAdults!,
    //  this.searchForm.value.countChildren!, this.searchForm.value.days!, this.searchForm.value.earliestDepartureDate!,
    //  this.searchForm.value.latestDepartureDate!);
    this.searchForm.reset();
  }

}
