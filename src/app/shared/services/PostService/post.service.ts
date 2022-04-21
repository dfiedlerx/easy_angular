import { Injectable } from '@angular/core'
import { postTypes } from '../../constants/configs/posts.configs'
import { postList } from '../../constants/mocks/posts-lists.mock'
import { Post } from '../../models/post.model'

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  getAll(): Array<Post> {
    return postList
  }

  get(id: number): Post | undefined {
    return postList.find((e) => {
      return e.id === id
    })
  }

  put(post: Post): void {
    postList.unshift(post)
  }

  getAllPostsFromAUserId(id: number) {
    return postList.filter((item) => {
      return item.userId === id ||
      (
        item.typeTarget !== null &&
        this.get(item.typeTarget)?.userId === id
      )

    })
  }

  getAllCreatedPostsQuantityFromAUserId(id: number) : number {

    return postList.filter((item) => {
      return item.userId === id
    }).length;
    
  }

  delete(id: number): boolean {
    for (let i = 0; i < postList.length; i++) {
      if (postList[i]['id'] === id) {
        postList.splice(i, 1)
        i--
      }
    }

    return true
  }
}
