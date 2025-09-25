import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { getAuth } from 'firebase/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [CommonModule,FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatId!: string;
  text: string = '';
  messages$: any;
  currentUid: string = '';

  constructor(
    private route: ActivatedRoute,
    private chatSvc: ChatService
  ) {}

  ngOnInit() {
    this.chatId = this.route.snapshot.paramMap.get('id')!;

    // Intentamos obtener usuario real
    const auth = getAuth();
    const user = auth.currentUser;

    // Si no hay usuario logueado → usamos fake
    const fakeUser = { uid: 'fakeUser123', displayName: 'Usuario Demo' };
    const finalUser = user || fakeUser;

    this.currentUid = finalUser.uid;
    this.messages$ = this.chatSvc.getMessages(this.chatId);
  }

  async send() {
    const auth = getAuth();
    const user = auth.currentUser;

    // Fake si no hay login
    const fakeUser = { uid: 'fakeUser123', displayName: 'Usuario Demo' };
    const finalUser = user || fakeUser;

    if (!this.text.trim()) return;

    await this.chatSvc.sendMessage(
      this.chatId,
      finalUser as any,   // 👈 acá forzamos el tipo
      this.text.trim()
    );

    this.text = '';
  }
}



/*import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ChatService } from '../../services/chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { getAuth } from '@angular/fire/auth';
import { Auth } from '@angular/fire/auth';
@Component({
  selector: 'app-chat',
  imports: [CommonModule,FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{

  messages$!: Observable<any[]>;
  text  = '';
  chatId!: string;
   currentUid: string | null = null;



  constructor(
    private chatSvc: ChatService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
  this.chatId = this.route.snapshot.paramMap.get('id')!;

  // 🔹 Intentamos obtener usuario de Firebase
  const auth = getAuth();
  const user = auth.currentUser;

  // 🔹 Si no hay usuario logueado, usamos uno de prueba
  const fakeUser = { uid: 'fakeUser123', displayName: 'Usuario Demo' };
  const finalUser = user || fakeUser;

  this.currentUid = finalUser.uid;
  this.messages$ = this.chatSvc.getMessages(this.chatId);
}

async send() {
  const auth = getAuth();
  const user = auth.currentUser;

  // 🔹 Si no hay usuario logueado, usamos el mismo fakeUser
  const fakeUser = { uid: 'fakeUser123', displayName: 'Usuario Demo' };
  const finalUser = user || fakeUser;

  if (!this.text.trim()) return;

 await this.chatSvc.sendMessage(
  this.chatId,
  finalUser as any,  // 👈 forzamos tipo para aceptar fakeUser
  this.text.trim()
);
}
}

  /*ngOnInit() {

    this.chatId = this.route.snapshot.paramMap.get('id')!;

    const auth =getAuth();
    const user = auth.currentUser;

    if (!user){
      this.router.navigate(['/login']);
      return;
    }

    this.messages$ = this.chatSvc.getMessages(this.chatId);
  }

  async send() {
     const auth =getAuth();
     const user = auth.currentUser;

     if (!user) {
      alert('Debes iniciar sesión para enviar mensajes');
      return;
    }

    if (!this.text.trim()) return;

    await this.chatSvc.sendMessage(
      this.chatId,
      user,
      this.text.trim()
    );

    this.text = '';
  }

  }*/

