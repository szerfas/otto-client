import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

import { AuthButtonComponent } from "./auth-button/auth-button.component";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpInterceptor,
            multi: true,
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        //For Auth0 Auth
        AuthModule.forRoot({
            domain: 'dev-df4ef0cqe070vw4o.us.auth0.com',
            clientId: 'H2eJsWAYVbh21iecMoNMakPztfbcW01X',
            authorizationParams: {
                audience: 'http://localhost:5000/',
                redirect_uri: window.location.origin
            },
            httpInterceptor: {
                allowedList: [`http://localhost:5000/api/manufacturers`],
            }
        }),
        AuthButtonComponent,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
