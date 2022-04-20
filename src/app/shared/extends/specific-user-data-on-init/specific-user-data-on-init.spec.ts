import { TestBed } from '@angular/core/testing'
import { UserService } from '../../services/UserService/user.service'
import { SpecificUserDataOnInit } from './specific-user-data-on-init'

describe('SpecificUserDataOnInit', () => {
  let classCase: SpecificUserDataOnInit

  beforeEach(() => {
    classCase = new SpecificUserDataOnInit(new UserService());
  })

  it('should create an instance', () => {
    expect(classCase).toBeTruthy()
  })
})
