import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrxivComponent } from './myrxiv.component';

describe('MyrxivComponent', () => {
  let component: MyrxivComponent;
  let fixture: ComponentFixture<MyrxivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrxivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrxivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
