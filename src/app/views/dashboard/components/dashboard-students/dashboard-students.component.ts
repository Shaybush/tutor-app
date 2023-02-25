import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/core/api/models/students';
import { StudentsService } from 'src/app/core/api/service/students.service';

@Component({
  selector: 'app-dashboard-students',
  templateUrl: './dashboard-students.component.html',
  styleUrls: ['./dashboard-students.component.scss']
})
export class DashboardStudentsComponent implements OnInit {
  students !: Student[]
  constructor(private studentServ: StudentsService) { }

  ngOnInit(): void {
    this.studentServ.getStudentList().subscribe(res =>{
      this.students = res.map(student =>{
        console.log(student)
        return{
          id : student.payload.doc.id,
          ...student.payload.doc.data() as {}
        } as Student;
      })
    })

  }

}
