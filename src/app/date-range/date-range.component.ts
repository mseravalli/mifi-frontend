import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit {
  dateRanges = [
    {"name":"year",  "value":"yyyy"},
    {"name":"month", "value":"yyyy-mm"},
    {"name":"day",   "value":"yyyy-mm-dd"}
  ];

  @Input() startDate: Date;
  @Input() endDate: Date;
  @Input() range: String;
  @Output() changeDate = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  
  userAction(event:any) {
    var dateRange = {
      "range": this.range,
      "startDate": this.startDate,
      "endDate": this.endDate
    };
    this.changeDate.emit(dateRange);
  }
}
