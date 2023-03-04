import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { StudentsService } from '../service/students.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsResolver implements Resolve<unknown[]> {


constructor(private studentsService:StudentsService){}

  resolve(): Observable<any> {

    return this.studentsService.getStudentList().pipe(
      catchError(error => {
        return of('No data');
      })
    
)}
}
