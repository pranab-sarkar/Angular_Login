

import { HomeServiceService } from './../home-service.service';
import { Component, OnInit } from '@angular/core';
import { Students } from '../student';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  student= this.homeService.students;
  selectedStudent;

  constructor(public homeService: HomeServiceService) { }

  ngOnInit(): void {
    this.homeService;
  }

  onSelect(student: Students): void {
    this.selectedStudent = student;
  }
}
