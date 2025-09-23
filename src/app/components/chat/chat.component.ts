import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true, // solo si tu app está en modo standalone
  imports: [CommonModule, FormsModule], // necesarios para *ngFor y [(ngModel)]
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'] // en plural
})
export class ChatComponent implements OnInit {

  messages$!: Observable<any[]>;
  text:string = '';


  constructor(
    private chatSvc: ChatService,
    private route: ActivatedRoute,
    private auth: AuthService

  ) {}

  ngOnInit() {
    const chatId = this.route.snapshot.paramMap.get('id')!;
    this.messages$ = this.chatSvc.getMessages(chatId);
  }

  async send() {
  const firebaseUser = await this.auth.currentUser(); // Firebase
  const chatId = this.route.snapshot.paramMap.get('id')!;

  if (!this.text.trim() || !firebaseUser) return;

  // 🔹 Pedimos info adicional al backend
  this.auth.getUserFromBackend(firebaseUser.email!).subscribe(async (backendUser) => {
    const userData = {
      uid: firebaseUser.uid,
      name: firebaseUser.displayName || backendUser.name || 'Usuario',
      email: firebaseUser.email,
      role: backendUser.role || 'user'
    };

    await this.chatSvc.sendMessage(chatId, userData, this.text.trim());
    this.text = '';
  });
}
}

