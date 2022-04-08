import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTemplateFooterComponent } from './main-template-footer.component';

describe('MainTemplateFooterComponent', () => {
  let component: MainTemplateFooterComponent;
  let fixture: ComponentFixture<MainTemplateFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTemplateFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTemplateFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
