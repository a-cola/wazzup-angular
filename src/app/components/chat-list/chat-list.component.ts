import { Component, inject } from '@angular/core';
import { ChatSmallComponent } from '../chat-small/chat-small.component';
import { Chat, DbService } from '../../services/db.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [ChatSmallComponent, ReactiveFormsModule],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.css'
})
export class ChatListComponent {
  db = inject(DbService)

  text = new FormControl('', Validators.required);

  openChat(chat:Chat) {
    chat.count='0';
    this.db.changeChat(chat.id);
  }

  onKeyUp(e: KeyboardEvent) {
    if(e.key === 'Enter' && this.text.valid) {
      this.db.addChat(false, this.text.value!);
      this.text.setValue('')
    }
    if(e.key === 'Control' && this.text.valid) {
      this.db.addChat(true, this.text.value!);
      this.text.setValue('')
    }
    if(e.key === 'Escape') {
      this.text.setValue('')
    }
  }
}
