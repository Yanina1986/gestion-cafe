import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, orderBy, collectionData } from '@angular/fire/firestore';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private firestore: Firestore) {}

  // 🔹 Obtener mensajes en tiempo real
  getMessages(chatId: string): Observable<any[]> {
    const messagesRef = collection(this.firestore, `chats/${chatId}/messages`);
    const q = query(messagesRef, orderBy('createdAt', 'asc'));
    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }

  // 🔹 Enviar un mensaje
  async sendMessage(chatId: string, user: User, text: string) {
    const messagesRef = collection(this.firestore, `chats/${chatId}/messages`);
    return addDoc(messagesRef, {
      text,
      senderId: user.uid,
      senderName: user.displayName || user.email,
      senderRole: 'user', // 🔹 acá podrías leer el rol real desde tu backend
      createdAt: new Date()
    });
  }
}
