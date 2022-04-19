import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { HomeToogleAllFollowingComponent } from './home-toogle-all-following.component'

describe('HomeToogleAllFollowingComponent', () => {
  let component: HomeToogleAllFollowingComponent
  let fixture: ComponentFixture<HomeToogleAllFollowingComponent>
  let compiled: DebugElement

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
    spyOn(component.postsToogleOptionChanged, 'emit')
    let scopedCompiled = compiled.queryAll(By.css('.toogle-following-item'))[
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
    let scopedCompiled = compiled.query(By.css('.toogle-following-button .active')).nativeElement;
    expect(scopedCompiled.textContent.trim()).toEqual(component.toogleOption.find(item => {
      return item.key === component.selectedOption
    })?.value);
  })
})
