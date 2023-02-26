import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/core/api/models/students';
import { StudentsService } from 'src/app/core/api/service/students.service';

@Component({
  selector: 'app-dashboard-students',
  templateUrl: './dashboard-students.component.html',
  styleUrls: ['./dashboard-students.component.scss'],
})
export class DashboardStudentsComponent implements OnInit {
  students!: Student[];

  constructor(
    
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((res) => {
      console.log(res['studentsData']);
      this.students = res['studentsData'].map((student: { payload: { doc: { id: any; data: () => {}; }; }; }) => {
        return {
          id: student.payload.doc.id,
          ...(student.payload.doc.data() as {}),
        } as Student;
      });
    });
    // this.studentServ.getStudentList().subscribe(res =>{
    //   console.log(res)
    //   this.students = res.map(student =>{
    //     return{
    //       id : student.payload.doc.id,
    //       ...student.payload.doc.data() as {}
    //     } as Student;
    //   })
    // })
  }
}
