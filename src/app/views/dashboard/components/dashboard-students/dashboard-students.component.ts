import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/core/api/models/students';

@Component({
  selector: 'app-dashboard-students',
  templateUrl: './dashboard-students.component.html',
  styleUrls: ['./dashboard-students.component.scss'],
})
export class DashboardStudentsComponent implements OnInit {
  students!: Student[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let student_res = this.route.snapshot.data['studentsData']

    // todo - make it model 
    this.students = student_res.map((student: { payload: { doc: { id: any; data: () => {}; }; }; }) => {
      return {
        id: student.payload.doc.id,
        ...(student.payload.doc.data()),
      } as Student;
    })
  }
}
