import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundBackAreaStaticComponent } from './not-found-back-area-static.component';

describe('NotFoundBackAreaStaticComponent', () => {
  let component: NotFoundBackAreaStaticComponent;
  let fixture: ComponentFixture<NotFoundBackAreaStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundBackAreaStaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundBackAreaStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
