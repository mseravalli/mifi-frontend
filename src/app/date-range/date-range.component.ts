import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit {
  dateRanges = ["year", "month", "day"]
  range =  null

  constructor() { }

  ngOnInit() {
  }
}
