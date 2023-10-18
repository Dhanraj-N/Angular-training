import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltDirectiveComponent } from './inbuilt-directive.component';

describe('InbuiltDirectiveComponent', () => {
  let component: InbuiltDirectiveComponent;
  let fixture: ComponentFixture<InbuiltDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InbuiltDirectiveComponent]
    });
    fixture = TestBed.createComponent(InbuiltDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
