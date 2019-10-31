import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class StudentRegisterService {

  private readonly postStudentData = "/login";

  constructor(private httpService: HttpService) { }

  postStudents(ada) {
    return this.httpService.post(this.postStudentData,ada);
  }

}
