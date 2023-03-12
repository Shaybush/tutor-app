import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardStudentsComponent } from './dashboard-students.component';

describe('DashboardStudentsComponent', () => {
  let component: DashboardStudentsComponent;
  let fixture: ComponentFixture<DashboardStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardStudentsComponent ],
      schemas : [
        NO_ERRORS_SCHEMA
      ],
      imports :[
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
