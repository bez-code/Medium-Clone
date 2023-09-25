import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendErrorMassagesComponent } from './backend-error-massages.component';

describe('BackendErrorMassagesComponent', () => {
  let component: BackendErrorMassagesComponent;
  let fixture: ComponentFixture<BackendErrorMassagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendErrorMassagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendErrorMassagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
