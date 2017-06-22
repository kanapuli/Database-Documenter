import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { LoginModel, LoginPayLoad } from './login.model';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {
    private _url = 'http://localhost:8080/login';
    header = new Headers({ 'Access-Control-Allow-Origin': '*' });
    options = new RequestOptions({ headers: this.header });
    constructor(private http: Http) { }

    postLogin(payLoad: LoginPayLoad) {
        return this.http.post(this._url, JSON.stringify(payLoad), this.options)
            .map(res => res.status);

    }

}
