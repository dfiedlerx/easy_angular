import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowIndividualPostComponent } from 'src/app/shared/components/show-individual-post/show-individual-post.component';
import { postList } from 'src/app/shared/constants/mocks/posts-lists.mock';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeShowPostComponent } from './home-show-post.component';

describe('HomeShowPostComponent', () => {
  let component: HomeShowPostComponent;
  let fixture: ComponentFixture<HomeShowPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeShowPostComponent, ShowIndividualPostComponent ],
      imports: [ RouterTestingModule, SharedModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeShowPostComponent);
    component = fixture.componentInstance;
    component.timeLinePosts = postList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call app-show-individual-post', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-show-individual-post')).toBeInstanceOf(HTMLElement);
  });

});
