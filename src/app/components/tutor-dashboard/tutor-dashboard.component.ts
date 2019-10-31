import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
type dayItem = { day: any, hasEvent: boolean };



export interface Course {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.component.html',
  styleUrls: ['./tutor-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TutorDashboardComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
   Courses: Course[] = [
    {value: 'course-0', viewValue: 'Angular'},
    {value: 'course-1', viewValue: 'Java'},
    {value: 'course-2', viewValue: 'React JS'}
  ];
  constructor(private _formBuilder: FormBuilder) { }

  date: any;
  daysInThisMonth: any;
  daysInLastMonth: Array<dayItem>;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  eventList: any;
  selectedEvent: any;
  isSelected: any;
  day:any

  dayNames = ['Mon', 'Tue', 'wed', 'thu', 'Fri', 'Sat', 'Sun'];


  ngOnInit() {
    this.date = new Date();
    this.monthNames = ["January", "February", "March",
                        "April", "May", "June", "July",
                        "August", "September", "October",
                        "November", "December"];
    this.getDaysOfMonth();
    this.loadEventThisMonth();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
    this.getDaysOfMonth();
  }

  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();

    
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();

    if (this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }

    const firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDay();
    const prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();

    for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push({ day: i, hasEvent: false });
    }

    const thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();

    for (var i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push({ day: i + 1, hasEvent: false });
    }

    const lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
    const nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate();

    for (var i = 0; i < (6 - lastDayThisMonth); i++) {
      this.daysInNextMonth.push({ day: i + 1, hasEvent: false });
    }
    
    const totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
    if (totalDays < 36) {
      for (var i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
        this.daysInNextMonth.push({ day: i , hasEvent: false });
      }
    }
  }

  selectDate(dayItem: dayItem) {
    console.log('click', dayItem);
    dayItem.hasEvent = true;
    this.isSelected = false;
    this.selectedEvent = new Array();
    var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + this.day + " 00:00:00";
    var thisDate2 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + this.day + " 23:59:59";
    this.eventList.forEach(event => {
      if (
        ((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) ||
        ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {

        this.isSelected = true;
        this.selectedEvent.push(event);
      }
    });
  }

  loadEventThisMonth() {
    this.eventList = new Array();
    var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    var endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
  }

}
