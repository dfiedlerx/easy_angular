import { TestBed } from '@angular/core/testing'
import { userLoggedId } from '../../constants/configs/users.config'
import { userList } from '../../constants/mocks/user-list.mock'
import { User } from '../../models/user.model'

import { UserService } from './user.service'

describe('UserService', () => {
  let service: UserService
  let existsExampleUser: User
  let newExampleUser: User
  let userListTest: Array<User>

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(UserService)
    ;(existsExampleUser = {
      id: 270447,
      name: 'Alana Williams',
      photo: 'assets/images/resources/photo4.jpg',
      dataJoined: new Date('2022/01/09'),
      follow: [451932, 352253],
    }),
      (newExampleUser = {
        id: 6577897,
        name: 'Daniel Fiedler',
        photo: 'assets/images/resources/photo99.jpg',
        dataJoined: new Date('2022/01/09'),
        follow: [601993, 270447],
      })

    userListTest = userList
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should get returns undefined because id is unknow', () => {
    expect(service.get(11111111)).toBeUndefined()
  })

  it('should getAll equal userList constant', () => {
    expect(service.getAll()).toEqual(userListTest)
  })

  it('should get returns user called Alana because this id exists', () => {
    expect(service.get(existsExampleUser.id)?.id).toEqual(existsExampleUser.id)
  })

  beforeEach(() => {
    service.put(newExampleUser)
  })

  it('should checkIfUserFollowsOtherById return false for this case', () => {
    expect(
      service.checkIfUserFollowsOtherById(
        270447,
        767896948674,
      ),
    ).toBeFalse()
  })

  it('should checkIfUserFollowsOtherById return true for this case', () => {
    expect(service.checkIfUserFollowsOtherById(244497, 270447)).toBeTrue()
  })

  it('should userMakeFollow create a follow ', () => {
    service.userMakeFollow(existsExampleUser.id, newExampleUser.id)
    expect(
      service.get(existsExampleUser.id)?.follow.includes(newExampleUser.id),
    ).toBeTrue()
  })

  it('should userMakeFollow create a follow ', () => {
    service.userMakeUnfollow(newExampleUser.id, existsExampleUser.id)
    expect(
      service.get(newExampleUser.id)?.follow.includes(existsExampleUser.id),
    ).toBeFalse()
  })

  it('shoud put create a new user in list', () => {
    expect(service.get(newExampleUser.id)?.id).toEqual(newExampleUser.id)
  })

  it('should delete removes newExampleUser id from list', () => {
    service.delete(newExampleUser.id)
    expect(service.get(newExampleUser.id)).toBeUndefined()
  })

  it('should getLoggedUserId return the same userLoggedId constant', () => {
    expect(service.getLoggedUserId()).toEqual(userLoggedId)
  })

  it('should getFollowingQuantity returns a right value', () => {
    expect(
      service.getFollowingQuantity(existsExampleUser.id),
    ).toBeGreaterThanOrEqual(existsExampleUser.follow.length)
  })

  it('should getFollowersQuantity returns a right value', () => {
    expect(service.getFollowersQuantity(existsExampleUser.id)).toBeGreaterThan(
      0,
    )
  })
})
