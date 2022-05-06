import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { FullModalComponent } from 'src/app/templates/full-modal/full-modal.component'

import { HomeComponent } from './home.component'
import { HomeModule } from './home.module'
import { SharedModule } from 'src/app/shared/shared.module'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>


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

})
