import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { DashboardUserProfileComponent } from './dashboard-user-profile.component';

describe('DashboardUserProfileComponent', () => {
  let component: DashboardUserProfileComponent;
  let fixture: ComponentFixture<DashboardUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUserProfileComponent ],
      schemas : [NO_ERRORS_SCHEMA],
      imports :[
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
