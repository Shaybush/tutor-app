import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Student } from 'src/app/core/api/models/students';
import { arrayClassHebrew } from '../../utils/array-util';

@Component({
  selector: 'app-dashboard-student-card',
  templateUrl: './dashboard-student-card.component.html',
  styleUrls: ['./dashboard-student-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardStudentCardComponent implements OnInit {
  @Input() student !: Student;
  studentClass!: string;
  ngOnInit(): void {
    console.log(this.student)
    this.studentClass = arrayClassHebrew(this.student.group);
  }
}
