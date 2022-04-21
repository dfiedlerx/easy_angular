import { ElementRef, SimpleChange, ViewChild } from '@angular/core'
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'
import { UserNamePhotoTextComponent } from 'src/app/shared/components/user-name-photo-text/user-name-photo-text.component'
import {
  postsMaxCharacters,
  postTypes,
} from 'src/app/shared/constants/configs/posts.configs'
import { postList } from 'src/app/shared/constants/mocks/posts-lists.mock'
import { userList } from 'src/app/shared/constants/mocks/user-list.mock'
import { PostInteraction } from 'src/app/shared/models/post-interaction.model'
import { SharedModule } from 'src/app/shared/shared.module'

import { HomeTypeNewPostComponent } from './home-type-new-post.component'

describe('HomeTypeNewPostComponent', () => {
  let component: HomeTypeNewPostComponent
  let fixture: ComponentFixture<HomeTypeNewPostComponent>
  let exampleTyped = 'Something Typed'
  let maxCharactersConfig = postsMaxCharacters
  let postInteraction: PostInteraction

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeTypeNewPostComponent, UserNamePhotoTextComponent],
      imports: [FormsModule, RouterTestingModule, SharedModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTypeNewPostComponent)
    component = fixture.componentInstance
    component.typedMessage = exampleTyped
    component.typesLimit = maxCharactersConfig
    component.postInteraction = null
    fixture.detectChanges()
  })

  it('should create', () => {

    fixture.detectChanges();
    component.sendNewPost();
    expect(true).toBeTruthy()
  })


  it('should isInvalidCharactersLength returns false', () => {
    component.postInteraction = null
    component.typedMessage = exampleTyped
    component.typesLimit = maxCharactersConfig
    expect(component.isInvalidCharactersLength()).toBeFalse()
  })

  it('should getPostMessage  returns equal typedMessage', () => {
    component.postInteraction = null;
    expect(component['getPostMessage']()).toEqual(component.typedMessage)
  })


  it('shold create a new post after call sendNewPost', () => {
    spyOn(component['postService'], 'put')
    fixture.debugElement
      .query(By.css('.send-new-post-button'))
      .nativeElement.click()
    expect(component['postService'].put).toHaveBeenCalled()
  })

  it('shold create a new post after call sendNewPost', () => {
    component.sendNewPost()
    expect(true).toBeTruthy()
  })

  it('should getPostType return postTypes["normal"] if postInteraction is null', () => {
    component.postInteraction = null
    expect(component['getPostType']()).toEqual(postTypes['normal'])
  })

  it('should getPostTypeTarget return null if postInteraction is null', () => {
    component.postInteraction = null
    expect(component['getTypeTarget']()).toBeNull()
  })

  beforeEach(() => {
    postInteraction = {
      user: userList['0'],
      post: postList['0'],
      type: postTypes['repost'],
    }
    component.postInteraction = postInteraction
    fixture.detectChanges()
  })

  it('should getPostType return postInteraction.type if postInteraction is not null', () => {
    expect(component['getPostType']()).toEqual(postInteraction.type)
  })

  it('should getTypeTarget return postInteraction.post.id if postInteraction is not null', () => {
    expect(component['getTypeTarget']()).toEqual(postInteraction.post.id)
  })

  it('should postInteractionClear emited when .post-iteraction-close is clicked', () => {
    spyOn(component.postInteractionClear, 'emit')
    fixture.debugElement
      .query(By.css('.post-iteraction-close'))
      .nativeElement.click()
    expect(component.postInteractionClear.emit).toHaveBeenCalled()
  })

  beforeEach(() => {
    component.hasPostInteractionChanged = true
    fixture.debugElement.queryAll(By.css('.central-meta'))['0'].nativeElement.classList.add('theme-layout');
    fixture.detectChanges()
  })

  it('should scrollToComponent to be executed', () => {
    spyOn(component, 'scrollToComponent');

    component.hasPostInteractionChanged = true;
    fixture.detectChanges()

    expect(component.scrollToComponent).toHaveBeenCalled();
  })

})
