import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authMode: string = 'Sign In'
  authMessage: string = 'Already have an account. Sign in instead'


  toggleAuthMode() {
    if (this.authMode === 'Sign In') {
      this.authMode = 'Sign Up';
      this.authMessage = "Don't Have an account? Create One";
    } else if (this.authMode === 'Sign Up') {
      this.authMode = 'Sign In';
      this.authMessage = 'Already have an account. Sign in instead';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
