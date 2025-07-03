import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [NgClass, FormsModule, NgFor],
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages: { text: string, fromMe: boolean }[] = [];
  newMessage = '';

  sendMessage() {
    if (!this.newMessage.trim()) return;

    this.messages.push({ text: this.newMessage, fromMe: true });

    // Simula resposta automática
    setTimeout(() => {
      this.messages.push({ text: 'Resposta automática!', fromMe: false });
    }, 800);

    this.newMessage = '';
  }
}
