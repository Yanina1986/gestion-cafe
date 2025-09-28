import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, orderBy, collectionData } from '@angular/fire/firestore';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { ChatUser } from '../models/chatuser.model';

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
  async sendMessage(chatId: string, user: ChatUser, text: string) {
    const messagesRef = collection(this.firestore, `chats/${chatId}/messages`);
    console.log('Enviando mensaje:', { chatId, user, text }); // Depuración
    return addDoc(messagesRef, {
      text,
      senderId: user.uid,
      senderName: user.email +'-'+ user.rol || user.email,
      senderRole: user.rol, // 🔹 acá podrías leer el rol real desde tu backend
      createdAt: new Date()
    });
  }
}
