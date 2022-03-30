import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-days-of-week',
  templateUrl: './days-of-week.component.html',
  styleUrls: ['./days-of-week.component.scss']
})
export class DaysOfWeekComponent implements OnInit {

  daysOfWeek = {
    'ita': ['Lun','Mar','Mer','Gio','Ven','Sab','Dom'],
    'eng': ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    'ger': ['Mon','Die','Mit','Don','Fre','Sam','Son']
  };

  defaultLanguage : string = 'eng';

  dayNumber: number;

  constructor() { }

  ngOnInit(): void {
    this.dayNumber =  this.getDayNumber(new Date());
  }

  getDayNumber(dt){
    return (dt.getDay() + 6) % 7;
  }

}
