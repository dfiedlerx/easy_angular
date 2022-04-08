import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTemplateBodyComponent } from './main-template-body.component';

describe('MainTemplateBodyComponent', () => {
  let component: MainTemplateBodyComponent;
  let fixture: ComponentFixture<MainTemplateBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTemplateBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTemplateBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
