import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { NewRequestComponent } from './newrequest.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'newrequest',  component: NewRequestComponent },
  { path: '', redirectTo: '/login' , pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    NewRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
