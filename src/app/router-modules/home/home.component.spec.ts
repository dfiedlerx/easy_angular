import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { FullModalComponent } from 'src/app/templates/full-modal/full-modal.component'
import { postList } from 'src/app/shared/constants/mocks/posts-lists.mock'

import { HomeComponent } from './home.component'
import { HomeModule } from './home.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { postsTimelineFilters } from 'src/app/shared/constants/configs/posts.configs'
import { PostService } from 'src/app/shared/services/PostService/post.service'
import { UserService } from 'src/app/shared/services/UserService/user.service'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>
  let postService : PostService = new PostService()
  let userService : UserService = new UserService()

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, FullModalComponent ],
      imports: [HomeModule, RouterTestingModule, SharedModule ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call app-home-type-new-post', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('app-home-type-new-post')).toBeInstanceOf(
      HTMLElement,
    )
  })

  it('should call app-home-show-post', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('app-home-show-post')).toBeInstanceOf(
      HTMLElement,
    )
  })

  it('should call app-home-toogle-all-following', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('app-home-toogle-all-following')).toBeInstanceOf(
      HTMLElement,
    )
  })

  it('should getTImelinePosts equal postList', () => {
    component.choosedFilterPost = postsTimelineFilters['all']
    expect(component['getTimelinePosts']()).toEqual(postList)
  })

  it('should getTImelinePosts equal postList when is filter following', () => {
    component.choosedFilterPost = postsTimelineFilters['following']
    expect(component['getTimelinePosts']()).toEqual(postService.getAllFollowing(userService.getLoggedUserId()))
  })

})
