import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-private',
  imports: [FormsModule, DatePipe],
  templateUrl: './privateChat.component.html',
  styleUrl: './privateChat.component.scss'
})
export class PrivateComponent implements OnInit {
  Back() {
    this.router.navigate(['/chat']);
  }

  messages: any[] = [];
  newMessage: string = '';
  sender: { userId: string; userName: string } | null = null;
  receiver: { userId: string; userName: string } | null = null;

  constructor(private router: Router, private chatService: ChatService, private route: ActivatedRoute,) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const senderId = params.get('senderId');
      const receiverId = params.get('receiverId');

      this.route.queryParams.subscribe(queryParams => {
        const senderName = queryParams['sender'];
        const receiverName = queryParams['receiver'];

        if (senderId && receiverId && senderName && receiverName) {
          this.sender = { userId: senderId, userName: senderName };
          this.receiver = { userId: receiverId, userName: receiverName };
        } else {
          this.router.navigate(['/chat']); // Redirect if no data
        }
      });
    });
    this.loadMessages();
    console.log(this.messages)
  }


  loadMessages() {
    this.chatService.getPrivateMessages(this.sender?.userId, this.receiver?.userId).subscribe((messages) => {
      this.messages = messages;
    });

  }


  sendMessage() {
    if (this.newMessage.trim()) {

      this.chatService.sendPrivateMessages(this.sender?.userId, this.sender?.userName, this.receiver?.userId, this.receiver?.userName, this.newMessage);
      this.newMessage = '';
    }
  }

}
