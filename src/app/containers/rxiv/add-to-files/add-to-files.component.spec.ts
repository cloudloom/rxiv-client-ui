import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToFilesComponent } from './add-to-files.component';

describe('AddToFilesComponent', () => {
  let component: AddToFilesComponent;
  let fixture: ComponentFixture<AddToFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
