import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    @Input() username: string;
    @Input() password: string;
    loginSuceed: boolean;
    errorMessage: string;
    title: string;
    constructor(private router: Router) {
        this.loginSuceed = true;
        this.errorMessage = 'Bad UserName / Password';
        this.title = 'Database Documentation Management';
        }

    onSubmit(f: NgForm) {
        if (f.valid && this.username === 'kanapuli' && this.password === 'aa') {
            this.loginSuceed = true;
            this.router.navigate(['dashboard']);
        } else {
            this.loginSuceed = false;
        }

    }
}
