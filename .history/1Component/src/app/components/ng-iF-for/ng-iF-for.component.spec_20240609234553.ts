import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIngForComponent } from './ng-ing-for.component';

describe('NgIngForComponent', () => {
  let component: NgIngForComponent;
  let fixture: ComponentFixture<NgIngForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIngForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIngForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
