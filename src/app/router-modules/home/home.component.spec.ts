import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HomeModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call app-home-type-new-post', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-home-type-new-post')).toBeInstanceOf(HTMLElement);
  });

  it('should call app-home-show-post', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-home-show-post')).toBeInstanceOf(HTMLElement);
  });

});
