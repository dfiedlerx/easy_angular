import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NotFoundBackAreaStaticComponent } from './components/not-found-back-area-static/not-found-back-area-static.component'
import { NotFoundTopAreaAnimatedComponent } from './components/not-found-top-area-animated/not-found-top-area-animated.component'

import { NotFoundComponent } from './not-found.component'

describe('NotFoundComponent', () => {
  let component: NotFoundComponent
  let fixture: ComponentFixture<NotFoundComponent>
  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NotFoundComponent,
        NotFoundTopAreaAnimatedComponent,
        NotFoundBackAreaStaticComponent,
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent)
    component = fixture.componentInstance
    compiled = fixture.debugElement.nativeElement
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should load app-not-found-top-area-animated component', () => {
    expect(
      compiled.querySelector('app-not-found-top-area-animated'),
    ).toBeInstanceOf(HTMLElement)
  })

  it('should load app-not-found-back-area-static component', () => {
    expect(
      compiled.querySelector('app-not-found-back-area-static'),
    ).toBeInstanceOf(HTMLElement)
  })
})
