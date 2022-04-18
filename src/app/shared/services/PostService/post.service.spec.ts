import { TestBed } from '@angular/core/testing';
import { Post } from '../../models/post.model';

import { PostService } from './post.service';
import { postList } from '../../constants/mocks/posts-lists.mock'

describe('PostService', () => {
  let service: PostService;
  let existsExamplePost: Post
  let newExamplePost: Post

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostService);
    existsExamplePost = {
      id: 16556887,
      userId: 451932,
      date: new Date('2020/05/05'),
      message: "Curabitur Lonely Cat Enjoying in Summer ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,",
      isRepost: false
    };
    newExamplePost = {
      id: 16556899,
      userId: 451932,
      date: new Date('2020/05/05'),
      message: "AAAA Curabitur Lonely Cat Enjoying in Summer ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,",
      isRepost: false
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get returns undefined because id is unknow', () => {
    expect(service.get(11111111)).toBeUndefined()
  })

  it('should getAll equal postList constant', () => {
    expect(service.getAll()).toEqual(postList)
  })

  it('should get returns examplePost this id exists', () => {
    expect(service.get(existsExamplePost.id)).toEqual(existsExamplePost)
  })

  beforeEach(() => {
    service.put(newExamplePost);
  });

  it('shoud put create a new post in list', () => {
    expect(service.get(newExamplePost.id)).toEqual(newExamplePost);
  })

  it ('should delete removes newExamplePost id from list', () => {
    service.delete(newExamplePost.id); 
    expect(service.get(newExamplePost.id)).toBeUndefined();
  })
});
