import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderInitComponent } from './loader-init.component';

describe('LoaderInitComponent', () => {
  let component: LoaderInitComponent;
  let fixture: ComponentFixture<LoaderInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderInitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
