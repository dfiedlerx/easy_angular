import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
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
      imports: [ AppModule ]
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

  it('should call app-main-template-header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-main-template-header')).toBeInstanceOf(HTMLElement);
  });

  it('should call app-main-template-body', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-main-template-body')).toBeInstanceOf(HTMLElement);
  });

  it('should call app-main-template-footer', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-main-template-footer')).toBeInstanceOf(HTMLElement);
  });

});
