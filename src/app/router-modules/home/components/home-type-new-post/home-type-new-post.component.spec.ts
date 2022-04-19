import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { postsMaxCharacters } from 'src/app/shared/constants/configs/posts.configs';

import { HomeTypeNewPostComponent } from './home-type-new-post.component';

describe('HomeTypeNewPostComponent', () => {
  let component: HomeTypeNewPostComponent;
  let fixture: ComponentFixture<HomeTypeNewPostComponent>;
  let exampleTyped = 'Something Typed';
  let maxCharactersConfig = postsMaxCharacters;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTypeNewPostComponent ],
      imports: [ FormsModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTypeNewPostComponent);
    component = fixture.componentInstance;
    component.typedMessage = exampleTyped;
    component.typesLimit = maxCharactersConfig;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should isInvalidCharactersLength returns false', () => {
    expect(component.isInvalidCharactersLength()).toBeFalse();
  });

  it ('should isInvalidCharactersLength returns true', () => {
    //A example value with a small number of characters
    component.typesLimit = 5; 
    expect(component.isInvalidCharactersLength()).toBeTrue();
  });

  it ('should getCharactersLeft returns the right value', () => {
    expect(component.getCharactersLeft())
      .toEqual(maxCharactersConfig - exampleTyped.length);
  })

});
