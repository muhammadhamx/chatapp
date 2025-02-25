import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userName: string = '';

  constructor(private router: Router) { }

  joinChat() {
    if (this.userName.trim()) {
      const userId = Math.random().toString(36).substring(2);
      localStorage.setItem('chatUser', JSON.stringify({ userId, userName: this.userName }));
      this.router.navigate(['/chat']);
    }
  }
}
