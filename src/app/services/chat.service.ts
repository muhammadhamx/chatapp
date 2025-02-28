import { Injectable, inject } from '@angular/core';
import { Database, ref, set, push, onValue } from '@angular/fire/database';
import { Observable, timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private db = inject(Database);

  getMessages(): Observable<any[]> {
    return new Observable((observer) => {
      const messagesRef = ref(this.db, 'messages');
      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        observer.next(data ? Object.values(data) : []);
      });
    });
  }

  sendMessage(userId: string, userName: string, messageBody: string) {
    const messagesRef = ref(this.db, 'messages');
    const newMessageRef = push(messagesRef);
    set(newMessageRef, {
      userId,
      userName,
      messageBody,
      timeStamp: new Date().toISOString(),
    });
  }

  generateChatRoomId(userId1: string, userId2: string): string {
    return userId1 < userId2 ? `${userId1}_${userId2}` : `${userId2}_${userId1}`;
  }

  sendPrivateMessages(senderId: any, senderName: any, reciverId: any, reciverName: any, messageBody: string) {
    const chatRoomId = this.generateChatRoomId(senderId, reciverId);
    const messagesRef = ref(this.db, `privateMessages/${chatRoomId}`);
    const newMessageRef = push(messagesRef);
    set(newMessageRef, {
      senderId,
      senderName,
      reciverId,
      reciverName,
      messageBody,
      timeStamp: new Date().toISOString()
    })
  }

  getPrivateMessages(userId1: any, userId2: any): Observable<any[]> {
    return new Observable((observer) => {
      const chatRoomId = this.generateChatRoomId(userId1, userId2);
      const messageRef = ref(this.db, `privateMessages/${chatRoomId}`);
      onValue(messageRef, (snapshot) => {
        const data = snapshot.val();
        observer.next(data ? Object.values(data) : [])
      })
    })
  }


}
