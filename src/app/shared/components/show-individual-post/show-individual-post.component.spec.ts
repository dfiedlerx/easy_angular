import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIndividualPostComponent } from './show-individual-post.component';

describe('ShowIndividualPostComponent', () => {
  let component: ShowIndividualPostComponent;
  let fixture: ComponentFixture<ShowIndividualPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIndividualPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIndividualPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
