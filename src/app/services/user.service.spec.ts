// import { TestBed } from '@angular/core/testing';

// import { UserService } from './user.service';

// describe('UserService', () => {
//   let service: UserService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(UserService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });


import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { User } from '../models/users';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all users', () => {
    const users = service.GetAllUsers();
    expect(users.length).toBeGreaterThan(0);
  });

  it('should add a new user', () => {
    const initialLength = service.GetAllUsers().length;
    service.createNewUser('Test User', ['Running'], 1, 45);
    const users = service.GetAllUsers();
    expect(users.length).toBe(initialLength + 1);
    expect(users.some(u => u.name === 'Test User')).toBeTrue();
  });
});

