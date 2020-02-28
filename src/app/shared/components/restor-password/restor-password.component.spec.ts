import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorPasswordComponent } from './restor-password.component';

describe('RestorPasswordComponent', () => {
  let component: RestorPasswordComponent;
  let fixture: ComponentFixture<RestorPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
