import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
  });

  let defaultAnswer = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
      }
    ];

  it('should be created', inject([UserService, HttpTestingController], (service: UserService, httpMock: HttpTestingController) => {
    expect(service).toBeTruthy();
  }));

  it("expects a GET request to the users endpoint", inject([UserService, HttpTestingController], (userService: UserService, httpMock: HttpTestingController) => {
    userService.getUsers().subscribe();

    const req = httpMock.expectOne("/users");

    expect(req.request.method).toEqual("GET");

    req.flush(defaultAnswer);

    httpMock.verify();
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
