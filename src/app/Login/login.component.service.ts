import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoginModel, LoginPayLoad } from './login.model';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {
    private _url = 'http://localhost:8080/login';
    constructor(private http: Http) { }

    postLogin(payLoad: LoginPayLoad) {
        return this.http.post(this._url, JSON.stringify(payLoad))
            .map(res => res.status);
    }
 
}
