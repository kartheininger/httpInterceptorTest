import {Injectable} from "@angular/core";
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

/**
 * Intercepts every http call and prepends a base string to the url.
 *
 * @author Johannes Kartheininger
 */
@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
	public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const requestWithBasePath: HttpRequest<any> = req.clone({url: "https://jsonplaceholder.typicode.com".concat(req.url)});
        return next.handle(requestWithBasePath);
	}
}