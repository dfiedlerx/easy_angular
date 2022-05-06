import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { AppModule } from './app.module'
import { HomeModule } from './router-modules/home/home.module'
import { NotFoundModule } from './router-modules/not-found/not-found.module'
import { homeRootRoute, notFoundRoute } from './shared/constants/configs/routes.configs'

describe('AppComponent', () => {
  let router: Router
  let fixture: ComponentFixture<AppComponent>
  let app: AppComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppModule],
      declarations: [AppComponent],
    }).compileComponents()
    router = TestBed.inject(Router)
    fixture = TestBed.createComponent(AppComponent)
    app = fixture.componentInstance
  })

  it('should create the app', () => {
    expect(app).toBeTruthy()
  })

  it('should call app-main-template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-main-template')).toBeInstanceOf(HTMLElement);
  });

  it('should load home module', async () => {
    const route = router.config.find((rc) => rc.path === homeRootRoute)
    if (typeof route?.loadChildren === 'function') {
      expect(await route?.loadChildren()).toEqual(HomeModule)
    } else {
      expect(false).toBeTrue();
    }
  })

  it('should load NotFoundModule', async () => {
    const route = router.config.find((rc) => rc.path === notFoundRoute)
    if (typeof route?.loadChildren === 'function') {
      expect(await route?.loadChildren()).toEqual(NotFoundModule)
    } else {
      expect(false).toBeTrue();
    }
  })

})
