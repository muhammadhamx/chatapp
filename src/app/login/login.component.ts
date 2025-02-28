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

  constructor(private router: Router) {
    let user_name: any = localStorage.getItem('chatUser');
    user_name = JSON.parse(user_name)
    if (user_name) {
      this.userName = user_name.userName
      console.log(user_name)
    }
  }

  joinChat() {
    if (this.userName.trim() == 'admin') {
      this.router.navigate(['/admin']);
    }
    else if (this.userName.trim()) {
      const userId = Math.random().toString(36).substring(2);
      localStorage.setItem('chatUser', JSON.stringify({ userId, userName: this.userName }));
      this.router.navigate(['/chat']);
    }
  }
}
