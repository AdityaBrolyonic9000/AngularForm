import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {}; // Create a model to store the username and password.

  onSubmit() {
    // Here, you can add logic to handle the login request.
    // For a basic example, we'll just log the entered credentials.
    console.log('Login form submitted with:', this.model);
  }
}
