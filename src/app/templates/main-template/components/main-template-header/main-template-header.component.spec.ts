import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTemplateHeaderComponent } from './main-template-header.component';

describe('MainTemplateHeaderComponent', () => {
  let component: MainTemplateHeaderComponent;
  let fixture: ComponentFixture<MainTemplateHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTemplateHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTemplateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
