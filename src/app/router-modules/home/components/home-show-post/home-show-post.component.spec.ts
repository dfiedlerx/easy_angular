import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowIndividualPostComponent } from 'src/app/shared/components/show-individual-post/show-individual-post.component';

import { HomeShowPostComponent } from './home-show-post.component';

describe('HomeShowPostComponent', () => {
  let component: HomeShowPostComponent;
  let fixture: ComponentFixture<HomeShowPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeShowPostComponent, ShowIndividualPostComponent ]
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

  it('should call app-show-individual-post', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-show-individual-post')).toBeInstanceOf(HTMLElement);
  });

});
