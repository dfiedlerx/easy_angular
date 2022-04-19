import { Injectable } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { UserService } from '../../services/UserService/user.service'

import { AuthResolver } from './auth.resolver'

@Injectable({
  providedIn: 'root'
})
class UserServiceUnknowMock extends UserService {

  override getLoggedUserId(): number {
    return 1111;
  }
}


describe('AuthResolver Unknow', () => {
  let resolver: AuthResolver
  let route: ActivatedRouteSnapshot
  let routeSnapshot: RouterStateSnapshot

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UserService,
          useClass: UserServiceUnknowMock,
        },
        { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }
      ],
    })
    resolver = TestBed.inject(AuthResolver)
    route = new ActivatedRouteSnapshot()
  })

  it('should resolve and gests false when a unknow userId is chosen', () => {
    resolver.resolve(route, routeSnapshot).subscribe((resolved) => {
      expect(resolved).toBeFalsy()
    })
  })

  it('should be created', () => {
    expect(resolver).toBeTruthy()
  })

  it('should navigate called', () => {
    resolver.resolve(route, routeSnapshot).subscribe((resolved) => {
      expect(resolver['route'].navigate).toHaveBeenCalled()
    })
  })


})

@Injectable({
  providedIn: 'root'
})
class UserServiceExistsMock extends UserService {

  override getLoggedUserId(): number {
    return 270447;
  }
}


describe('AuthResolver Exists', () => {
  let resolver: AuthResolver
  let route: ActivatedRouteSnapshot
  let routeSnapshot: RouterStateSnapshot

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UserService,
          useClass: UserServiceExistsMock,
        },
        { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }
      ],
    })
    resolver = TestBed.inject(AuthResolver)
    route = new ActivatedRouteSnapshot()
  })

  it('should resolve and gests false when a unknow userId is chosen', () => {
    resolver.resolve(route, routeSnapshot).subscribe((resolved) => {
      expect(resolved).toBeTruthy()
    })
  })

  it('should navigate not called', () => {
    resolver.resolve(route, routeSnapshot).subscribe((resolved) => {
      expect(resolver['route'].navigate).not.toHaveBeenCalled()
    })
  })

})