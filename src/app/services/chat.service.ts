import { Injectable, inject } from '@angular/core';
import { Database, ref, set, push, onValue } from '@angular/fire/database';
import { Observable } from 'rxjs';

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
}
