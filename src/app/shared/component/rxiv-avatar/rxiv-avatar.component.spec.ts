import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxivAvatarComponent } from './rxiv-avatar.component';

describe('RxivAvatarComponent', () => {
  let component: RxivAvatarComponent;
  let fixture: ComponentFixture<RxivAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxivAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxivAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
