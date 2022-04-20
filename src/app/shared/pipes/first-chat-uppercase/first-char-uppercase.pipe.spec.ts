import { FirstCharUppercasePipe } from './first-char-uppercase.pipe'

describe('FirstCharUppercasePipe', () => {
  let pipe: FirstCharUppercasePipe
  let testString = 'aaaaa'
  let rightResult = 'Aaaaa'

  beforeEach(() => {
    pipe = new FirstCharUppercasePipe()
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy()
  })

  it('should return a string when a string is given', () => {
    expect(typeof pipe.transform(testString)).toBe('string')
  })

  it('should return a undefined when undefined is given', () => {
    expect(typeof pipe.transform(undefined)).toBe('undefined')
  })

  it('should return a first uppercased string when string is given', () => {
    expect(pipe.transform(testString)).toEqual(rightResult)
  })
})
