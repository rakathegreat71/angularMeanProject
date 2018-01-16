import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ValidateService} from './validate.service';
import { FlashMessageModule}  from "angular-flash-message";
import {AuthService} from "./auth.service";
import {Http,Headers}from "@angular/http"
import {HttpModule} from "@angular/http";



const appRoutes: Routes = [
  { 
    path: '', 
    component:HomeComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { 
    path: 'dashboard',
    component:DashboardComponent
  }
];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FlashMessageModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ValidateService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
