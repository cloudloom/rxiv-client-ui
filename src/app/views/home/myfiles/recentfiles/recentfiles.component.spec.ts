import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentfilesComponent } from './recentfiles.component';

describe('RecentfilesComponent', () => {
  let component: RecentfilesComponent;
  let fixture: ComponentFixture<RecentfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
