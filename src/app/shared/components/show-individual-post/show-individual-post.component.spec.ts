import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ShowIndividualPostComponent } from './show-individual-post.component';

describe('ShowIndividualPostComponent', () => {
  let component: ShowIndividualPostComponent;
  let fixture: ComponentFixture<ShowIndividualPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIndividualPostComponent ],
      imports: [ RouterTestingModule ]
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

  it('shold create a newrepost post after call putARepost', () => {
    spyOn(component['postService'], 'put');
    fixture.debugElement.query(By.css('.post-action-repost')).nativeElement.click();
    expect(component['postService'].put).toHaveBeenCalled()
  })

});
