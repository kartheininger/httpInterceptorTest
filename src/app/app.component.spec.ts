import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";

class UserServiceStub {
  public getUsers(): Observable<any> {
    return Observable.of([{
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "company": {
        "name": "company abc"
      }
    }]);
  }
};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: UserService, useClass: UserServiceStub }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'HttpInterceptor Example'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('HttpInterceptor Example');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to HttpInterceptor Example!');
  }));
});
