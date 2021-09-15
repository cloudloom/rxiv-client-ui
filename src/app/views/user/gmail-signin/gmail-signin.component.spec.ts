import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailSigninComponent } from './gmail-signin.component';

describe('GmailSigninComponent', () => {
  let component: GmailSigninComponent;
  let fixture: ComponentFixture<GmailSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
