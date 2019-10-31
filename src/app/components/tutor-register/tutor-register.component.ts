import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tutor-register',
  templateUrl: './tutor-register.component.html',
  styleUrls: ['./tutor-register.component.scss']
})
export class TutorRegisterComponent implements OnInit {
  addForm: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.addForm = new FormGroup({
      firstName: new FormControl()
    });


    this.addForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      totalexp: ['', Validators.required],
      primskills: ['', Validators.required],
      secskills: ['', Validators.required],
      FinishedInterviews:['', Validators.required],
      jobRole:['', Validators.required],
      About:['', Validators.required],
      companyInetrview:['', Validators.required],
      videoIneteview:['', Validators.required],
      lastname: ['', Validators.required],
      scheduledinterviews:['', Validators.required],
      AvailableTimeSlots:['', Validators.required],
      InterviewsTaken:['', Validators.required],
      TelephonicInterviews:['', Validators.required],
      TakensoFar:['', Validators.required],
      Clearance:['', Validators.required],
      roleBy:['', Validators.required],

    });
  }
  PostNumberOtp(){

  }
}
