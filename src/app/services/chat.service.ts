/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
}*/

import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, orderBy, serverTimestamp } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ChatService {
  constructor(private firestore: Firestore) {}

  // enviar mensaje
  async sendMessage(chatId: string, text: string, user: { uid:string, displayName?:string, role?:string }) {
    const messagesRef = collection(this.firestore, `chats/${chatId}/messages`);
    return addDoc(messagesRef, {
      text,
      senderId: user.uid,
      senderName: user.displayName || user.uid,
      senderRole: user.role || 'user',
      createdAt: serverTimestamp()
    });
  }

  // obtener mensajes en tiempo real
 getMessages(chatId: string): Observable<any[]> {
  const messagesRef = collection(this.firestore, `chats/${chatId}/messages`);
  const q = query(messagesRef, orderBy('createdAt', 'asc'));
  return collectionData(q, { idField: 'id' }) as Observable<any[]>;
}
}
