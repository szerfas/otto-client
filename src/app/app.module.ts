import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

import { AuthButtonComponent } from "./components/auth-button/auth-button.component";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
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
        MatMenuModule,
        MatIconModule,
        //For Auth0 Auth
        AuthModule.forRoot({
            domain: 'dev-df4ef0cqe070vw4o.us.auth0.com',
            clientId: 'H2eJsWAYVbh21iecMoNMakPztfbcW01X',
            useRefreshTokens: true,
            cacheLocation: 'localstorage',
            authorizationParams: {
                audience: 'https://localhost:7239/',    //Node=http://localhost:5000/ net=https://localhost:7239/
                redirect_uri: window.location.origin
            },
            httpInterceptor: {
                allowedList: [`http://localhost:5000/api/*`, `https://localhost:7239/api/*`],
            }
        }),
        AuthButtonComponent,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
