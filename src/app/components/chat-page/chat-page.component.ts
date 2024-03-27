import { Component, input } from '@angular/core';
import { ChatListComponent } from '../chat-list/chat-list.component';
import { CurrentChatComponent } from '../current-chat/current-chat.component';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [ChatListComponent, CurrentChatComponent],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css'
})
export class ChatPageComponent {
  id = input.required<string>();
}
