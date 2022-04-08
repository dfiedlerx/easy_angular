import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainTemplateBodyComponent } from './components/main-template-body/main-template-body.component';
import { MainTemplateFooterComponent } from './components/main-template-footer/main-template-footer.component';
import { MainTemplateHeaderComponent } from './components/main-template-header/main-template-header.component';

import { MainTemplateComponent } from './main-template.component';

describe('MainTemplateComponent', () => {
  let component: MainTemplateComponent;
  let fixture: ComponentFixture<MainTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainTemplateComponent,
        MainTemplateHeaderComponent,
        MainTemplateBodyComponent,
        MainTemplateFooterComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
