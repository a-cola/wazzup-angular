import { Component, inject } from '@angular/core';
import { ChatSmallComponent } from '../chat-small/chat-small.component';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [ChatSmallComponent],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.css'
})
export class ChatListComponent {
  db = inject(DbService)
}
