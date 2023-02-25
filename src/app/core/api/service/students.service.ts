import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private afs: AngularFirestore) { }

  getStudentList(): Observable<DocumentChangeAction<unknown>[]> {
    return this.afs
      .collection("students")
      .snapshotChanges();
  }
}
