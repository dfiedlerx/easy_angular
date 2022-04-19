import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundTopAreaAnimatedComponent } from './not-found-top-area-animated.component';

describe('NotFoundTopAreaAnimatedComponent', () => {
  let component: NotFoundTopAreaAnimatedComponent;
  let fixture: ComponentFixture<NotFoundTopAreaAnimatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundTopAreaAnimatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundTopAreaAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
