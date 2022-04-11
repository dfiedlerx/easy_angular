import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShowPostComponent } from './home-show-post.component';

describe('HomeShowPostComponent', () => {
  let component: HomeShowPostComponent;
  let fixture: ComponentFixture<HomeShowPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeShowPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeShowPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
