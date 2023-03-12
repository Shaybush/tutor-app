import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStudentCardComponent } from './dashboard-student-card.component';

describe('DashboardStudentCardComponent', () => {
  let component: DashboardStudentCardComponent;
  let fixture: ComponentFixture<DashboardStudentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardStudentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardStudentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
