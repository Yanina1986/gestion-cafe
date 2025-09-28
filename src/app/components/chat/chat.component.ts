import { ChatUser } from './../../models/chatuser.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { getAuth } from 'firebase/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '@angular/fire/auth';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatId!: string;
  text: string = '';
  messages$: any;
  currentUid: string = '';
  chatUser!: ChatUser;

  constructor(
    private route: ActivatedRoute,
    private chatSvc: ChatService,
    private auth: Auth
  ) {
    this.chatUser = {
      uid: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!).id : '',
      displayName: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!).nombre : '',
      email: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!).email : '',
      rol: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!).rol : ''
    };
    console.log('Usuario del chat:', this.chatUser);

  }

  ngOnInit() {
    this.chatId = this.route.snapshot.paramMap.get('id')!;
    this.messages$ = this.chatSvc.getMessages(this.chatId);
  }



  async send() {

    if (!this.text.trim()) return; // Evita enviar mensajes vacíos



    await this.chatSvc.sendMessage(
      this.chatId,
      this.chatUser as any,
      this.text.trim()
    );

    console.warn('Mensaje enviado por:', this.chatUser, '->', this.text);
    this.text = '';
  }
}



