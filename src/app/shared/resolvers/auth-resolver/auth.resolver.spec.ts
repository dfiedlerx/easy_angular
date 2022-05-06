import { TestBed } from '@angular/core/testing'
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router'

import { AuthResolver } from './auth.resolver'


describe('AuthResolver Exists', () => {
  let resolver: AuthResolver

  beforeEach(() => {
    resolver = TestBed.inject(AuthResolver)
  })

  it('should resolve and gests false when a unknow userId is chosen', () => {
    resolver.resolve().subscribe((resolved) => {
      expect(resolved).toBeTruthy()
    })
  })

})