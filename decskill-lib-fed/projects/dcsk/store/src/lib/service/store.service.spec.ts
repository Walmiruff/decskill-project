import { TestBed } from '@angular/core/testing';
import { StoreService } from './store.service';

describe('StoreService', () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a user', () => {
    const user = {
      id: 1,
      name: 'John Doe',
      tag:'',
      photo: 'john.jpg',
    };

    service.addUser(user);
  });

  it('should add a post', () => {
    const post = {
      id: 1,
      userId: 1,
      content: 'Hello, world!',
      date: new Date(),
    };

    service.addPost(post);
    service.getPosts().subscribe((posts) => {
      expect(posts).toContain(post);
    });
  });

  it('should update a user', () => {
    const user = {
      id: 1,
      name: 'John Doe',
      photo: 'john.jpg',
    };

    const updatedUser = {
      id: 1,
      name: 'Updated John Doe',
      photo: 'updated.jpg',
    };

    service.addUser(user);
    
  });

  it('should delete a post', () => {
    const post1 = {
      id: 1,
      userId: 1,
      content: 'Post 1',
      date: new Date(),
    };

    const post2 = {
      id: 2,
      userId: 1,
      content: 'Post 2',
      date: new Date(),
    };

    service.addPost(post1);
    service.addPost(post2);

    service.deletePost(post1.id);
    service.getPosts().subscribe((posts) => {
      expect(posts).not.toContain(post1);
      expect(posts).toContain(post2);
    });
  });
});
