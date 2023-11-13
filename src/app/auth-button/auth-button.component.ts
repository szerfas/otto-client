import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-auth-button',
  imports: [ CommonModule, MatButtonModule ],
  standalone: true,
  styles: [ 'button { margin-left: 10px; }'],
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button mat-flat-button color="primary" (click)="auth.logout({ logoutParams: { returnTo: 'http://localhost:4200/' } })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button mat-flat-button color="primary" (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template>
  `,
})
export class AuthButtonComponent {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService) {}
}
