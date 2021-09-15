import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrxivPinnedComponent } from './myrxiv-pinned.component';

describe('MyrxivPinnedComponent', () => {
  let component: MyrxivPinnedComponent;
  let fixture: ComponentFixture<MyrxivPinnedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrxivPinnedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrxivPinnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
