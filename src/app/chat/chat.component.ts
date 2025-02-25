import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  newMessage: string = '';
  user: { userId: string; userName: string } | null = null;

  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    const savedUser = localStorage.getItem('chatUser');
    if (savedUser) {
      this.user = JSON.parse(savedUser);
      this.chatService.getMessages().subscribe((messages) => {
        this.messages = messages;
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  sendMessage() {
    if (this.newMessage.trim() && this.user) {
      this.chatService.sendMessage(this.user.userId, this.user.userName, this.newMessage);
      this.newMessage = '';
    }
  }

  logout() {
    localStorage.removeItem('chatUser');
    this.router.navigate(['/login']);
  }
}