import { TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { AppModule } from './app.module'
import { HomeModule } from './router-modules/home/home.module'
import { NotFoundModule } from './router-modules/not-found/not-found.module'

describe('AppComponent', () => {
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppModule],
      declarations: [AppComponent],
    }).compileComponents()
    router = TestBed.inject(Router)
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'test-social-network-spa'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('test-social-network-spa')
  })

  it('should load home module', async () => {
    const route = router.config.find((rc) => rc.path === '')
    if (typeof route?.loadChildren === 'function') {
      expect(await route?.loadChildren()).toEqual(HomeModule)
    } else {
      expect(false).toBeTrue();
    }
  })

  it('should load NotFoundModule', async () => {
    const route = router.config.find((rc) => rc.path === '**')
    if (typeof route?.loadChildren === 'function') {
      expect(await route?.loadChildren()).toEqual(NotFoundModule)
    } else {
      expect(false).toBeTrue();
    }
  })

})
