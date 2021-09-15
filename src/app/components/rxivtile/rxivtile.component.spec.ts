import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxivtileComponent } from './rxivtile.component';

describe('RxivtileComponent', () => {
  let component: RxivtileComponent;
  let fixture: ComponentFixture<RxivtileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxivtileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxivtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
