import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { HomeToogleAllFollowingComponent } from './home-toogle-all-following.component'

describe('HomeToogleAllFollowingComponent', () => {
  let component: HomeToogleAllFollowingComponent
  let fixture: ComponentFixture<HomeToogleAllFollowingComponent>
  let compiled: DebugElement
  let scopedCompiled: DebugElement
  let spy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeToogleAllFollowingComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeToogleAllFollowingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  beforeEach(() => {
    compiled = fixture.debugElement
  })

  it('should toogle-following-item respect toogleOption', () => {
    let scopedCompiled = compiled
      .queryAll(By.css('.toogle-following-item'))
      .filter((item) => {
        return component.toogleOption.find((subItem) => {
          return subItem.value === item.nativeElement.textContent.trim()
        })
      })

    expect(scopedCompiled).toHaveSize(component.toogleOption.length)
  })

  beforeEach(() => {
    spy = spyOn(component.postsToogleOptionChanged, 'emit')
  })

  it('should postToogleOptionChanged no emited if is the current active selectedOption', () => {
    spy.calls.reset()
    scopedCompiled = compiled.query(By.css('.active'))
    let aux = component.toogleOption.find((item) => {
      return item.value === scopedCompiled.nativeElement.textContent.trim()
    })?.key
    component.selectedOption = aux ?? component.selectedOption
    scopedCompiled.nativeElement.click()
    expect(component.postsToogleOptionChanged.emit).not.toHaveBeenCalled()
  })

  beforeEach(() => {
    scopedCompiled = compiled.queryAll(By.css('.toogle-following-item'))[
      component.toogleOption.length - 1
    ]
    scopedCompiled.nativeElement.click()
    fixture.detectChanges()
  })

  it('should event postToogleOptionChanged emited', () => {
    expect(component.postsToogleOptionChanged.emit).toHaveBeenCalled()
  })

  it('should selectedOption has changed after .toogle-following-item click', () => {
    expect(component.selectedOption).toEqual(
      component.toogleOption[component.toogleOption.length - 1].key,
    )
  })

  it('should active class is in correct .toogle-following-item after .toogle-following-item click', () => {
    scopedCompiled.nativeElement.click()
    expect(
      compiled
        .query(By.css('.toogle-following-button .active'))
        .nativeElement.textContent.trim(),
    ).toEqual(
      component.toogleOption.find((item) => {
        return item.key === component.selectedOption
      })?.value,
    )
  })
})
