import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentRegisterService } from "../../services/student-register.service";
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from "../../AlertServices/alertserviece";
@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent implements OnInit {

  StudentregisterForm: FormGroup;
  submitted = false;
  public isVisible: boolean = false;
  isSubmited: Boolean = true
  loading = false;

  constructor(private formBuilder: FormBuilder,
    private Studenteservice: StudentRegisterService,
    private router: Router, private alertService: AlertService) { }


  ngOnInit() {
    this.StudentregisterForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      location: ['', Validators.required],
      creditcard: ['', Validators.required],
      cardnumber: ['', Validators.required],
      expirydatefrom: ['', Validators.required],
      expirydateto: ['', Validators.required],
      CVV: ['', Validators.required],
      bankname: ['', Validators.required],
      accountno: ['', Validators.required],
    });
  }

  get f() { return this.StudentregisterForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.StudentregisterForm.invalid) {
      return;
    }

    this.loading = true;
    this.Studenteservice.postStudents(this.StudentregisterForm.value)
      .pipe(first())
      .subscribe((res:any) => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/home']);
          console.log(res)
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
//256820580620-jdmvq8rtsratifs193qeldocd0chd904.apps.googleusercontent.com  ///client_id
// ry9r2EDRKYAGuaJAQplr8EWI  Key