import { Injectable } from '@angular/core';
import { postMaxDayCreation } from '../../constants/configs/posts.configs';
import { postList } from '../../constants/mocks/posts-lists.mock';
import { userList } from '../../constants/mocks/user-list.mock';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { datesIsToday } from '../../utils/date-utills/date.utils';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  getAll(): Array<Post> {
    return postList;
  }

  getUserTodayLimitPosts(id: number): number {
    let limit = postMaxDayCreation;

    postList.forEach((element) => {
      if (element.userId === id && datesIsToday(element.date) && limit > 0) {
        limit -= 1;
      }
    });

    return limit;
  }

  getAllFollowing(userId: number): Array<Post> {
    return postList.filter((item) => {
      return (
        item.userId === userId ||
        (
          userList.find((subItem) => {
            return subItem.id === userId;
          }) as User
        ).follow.includes(item.userId)
      );
    });
  }

  get(id: number): Post | undefined {
    return postList.find((e) => {
      return e.id === id;
    });
  }

  put(post: Post): void {
    postList.unshift(post);
  }

  getAllPostsFromAUserId(id: number) {
    return postList.filter((item) => {
      return (
        item.userId === id ||
        (item.typeTarget !== null && this.get(item.typeTarget)?.userId === id)
      );
    });
  }

  getAllCreatedPostsQuantityFromAUserId(id: number): number {
    return postList.filter((item) => {
      return item.userId === id;
    }).length;
  }

  delete(id: number): boolean {
    for (let i = 0; i < postList.length; i++) {
      if (postList[i]['id'] === id) {
        postList.splice(i, 1);
        i--;
      }
    }

    return true;
  }
}
