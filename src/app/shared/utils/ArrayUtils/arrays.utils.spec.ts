import { TestBed } from '@angular/core/testing'
import { KeyValue } from '../../models/key-value.model'
import { deleteArrayItemByKeyValue } from './arrays.utils'

describe('deleteArrayItemByKeyValue', () => {
  let exampleUntouchedArray: Array<KeyValue>

  let exampleDeletedArray: Array<KeyValue>

  beforeEach(() => {
    TestBed.configureTestingModule({})

    exampleUntouchedArray = [
      {
        key: 'aaaa',
        value: 'aaaaaa',
      },
      {
        key: 'bbbb',
        value: 'bbbbbb',
      },
      {
        key: 'bbbb',
        value: 'bbbbbb',
      },
      {
        key: 'cccc',
        value: 'cccccc',
      },
    ]

    exampleDeletedArray = [
      {
        key: 'aaaa',
        value: 'aaaaaa',
      },
      {
        key: 'cccc',
        value: 'cccccc',
      },
    ]
  })

  it('should be created', () => {
    expect(deleteArrayItemByKeyValue).toBeTruthy()
  })

  it('should delete a element correctly', () => {
    exampleUntouchedArray = deleteArrayItemByKeyValue('key', 'bbbb', exampleUntouchedArray)
    expect(exampleUntouchedArray).toEqual(exampleDeletedArray);
  })

})
