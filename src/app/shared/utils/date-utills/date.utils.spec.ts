import { TestBed } from '@angular/core/testing'
import { datesIsToday } from './date.utils'

describe('datesIsToday', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({})
  })

  it ('should return true because privided date is today', () => {
    expect(datesIsToday(new Date())).toBeTrue();
  })

  it ('should return false because privided date is not today', () => {
    expect(datesIsToday(new Date('1997/04/23'))).toBeFalse();
  })

})
