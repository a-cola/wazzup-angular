import { Component } from '@angular/core';
import { ChatListComponent } from '../chat-list/chat-list.component';
import { CurrentChatComponent } from '../current-chat/current-chat.component';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [ChatListComponent],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class StartPageComponent {

}
