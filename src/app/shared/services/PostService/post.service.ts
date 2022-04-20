import { Injectable } from '@angular/core';
import { postList } from '../../constants/mocks/posts-lists.mock';
import { Post } from '../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getAll() : Array<Post> {
    return postList;
  }

  get(id : number) : Post | undefined {
    return postList.find((e) => {
      return e.id === id;
    })
  }

  put(post: Post) : void {
    postList.unshift(post);
  }

  delete(id: number) : boolean {
    for (let i = 0; i < postList.length; i++) {
      if (postList[i]['id'] === id) {
        postList.splice(i, 1)
        i--
      }
    }

    return true;
  }

}
