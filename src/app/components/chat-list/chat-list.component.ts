import { Component, inject } from '@angular/core';
import { ChatSmallComponent } from '../chat-small/chat-small.component';
import { Chat, DbService } from '../../services/db.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [ChatSmallComponent, ReactiveFormsModule, SettingsComponent],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.css'
})
export class ChatListComponent {
  db = inject(DbService)

  text = new FormControl('', Validators.required);

  router = inject(Router);

  settingsVisibility = 'none';

  openChat(chat:Chat) {
    chat.count='0';
    this.router.navigateByUrl('chatlist/'+chat.id)
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

  openSettings() {
    this.settingsVisibility = 'flex';
  }

  closeSettings() {
    this.settingsVisibility = 'none';
  }
}
