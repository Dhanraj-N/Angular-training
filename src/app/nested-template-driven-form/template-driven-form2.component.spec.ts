import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenForm2Component } from './template-driven-form2.component';

describe('TemplateDrivenForm2Component', () => {
  let component: TemplateDrivenForm2Component;
  let fixture: ComponentFixture<TemplateDrivenForm2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDrivenForm2Component]
    });
    fixture = TestBed.createComponent(TemplateDrivenForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
