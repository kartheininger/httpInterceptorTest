import { HttpClientTestingModule, HttpTestingController, TestRequest } from "@angular/common/http/testing";
import { HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { inject, TestBed } from "@angular/core/testing";
import { BaseUrlInterceptor } from "./base-url.interceptor";

describe("BaseUrlInterceptor", () => {
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: BaseUrlInterceptor,
                    multi: true,
                }
            ]
        });
    });

    afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
        httpMock.verify();
    }));

    it("should prepend string to GET request",
        inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
            http.get("/rest/get").subscribe();

            const req: TestRequest = httpMock.expectOne("https://jsonplaceholder.typicode.com/rest/get");

            expect(req.request.method).toEqual("GET");
        }));

    it("should prepend string to POST request",
        inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
            http.post("/rest/post", {}).subscribe();

            const req: TestRequest = httpMock.expectOne("https://jsonplaceholder.typicode.com/rest/post");

            expect(req.request.method).toEqual("POST");
        }));

    it("should prepend string to DELETE request",
        inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
            http.delete("/rest/delete").subscribe();

            const req: TestRequest = httpMock.expectOne("https://jsonplaceholder.typicode.com/rest/delete");

            expect(req.request.method).toEqual("DELETE");
        }));

    it("should prepend string to PUT request",
        inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
            http.put("/rest/put", {}).subscribe();

            const req: TestRequest = httpMock.expectOne("https://jsonplaceholder.typicode.com/rest/put");

            expect(req.request.method).toEqual("PUT");
        }));

});