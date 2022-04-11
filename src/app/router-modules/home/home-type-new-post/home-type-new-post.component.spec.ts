import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTypeNewPostComponent } from './home-type-new-post.component';

describe('HomeTypeNewPostComponent', () => {
  let component: HomeTypeNewPostComponent;
  let fixture: ComponentFixture<HomeTypeNewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTypeNewPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTypeNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
